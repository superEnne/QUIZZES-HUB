"""Simple black-and-white diagrams for the pointers PDFs (reportlab Flowables).

A section in pointers.py may carry  "figure": {...}  (or a list of them). Supported types:
  flow     {"type": "flow", "boxes": ["Title|detail", ...], "labels": [...], "per_row": 4, "loop": False}
  stack    {"type": "stack", "boxes": ["Title|detail", ...], "side": "label for a side arrow"}
  tree     {"type": "tree", "root": "Title|detail", "children": ["A|..", {"label": "B", "children": [...]}]}
  columns  {"type": "columns", "cols": [{"title": "...", "rows": ["...", ...]}, ...]}
  cycle    {"type": "cycle", "center": "...", "boxes": [4 boxes clockwise from top]}
  nested   {"type": "nested", "box": {"label": "...", "children": [{"label": ..., "children": [...]}, ...]}}
  triangle {"type": "triangle", "top": "...", "left": "...", "right": "...",
            "edges": {"left-top": "label", "top-right": "label", "left-right": "label"}}
  cells    {"type": "cells", "chars": "Juan Cruz", "note": "..."}
Every figure may have "caption"; captions are numbered automatically ("Figure 3. ...").
"Title|detail" draws Title in bold and detail in regular type under it. Lines, text and fills
stay black / white / light gray so the PDF keeps black text only.
"""
from reportlab.platypus import Flowable
from reportlab.lib.colors import black, white, Color
from reportlab.lib.utils import simpleSplit

R, B, I = "Times-Roman", "Times-Bold", "Times-Italic"
FS, LS = 10, 12          # box font size / line step
GRAY = Color(0.9, 0.9, 0.9)
PAD = 5


def _lines(text, width):
    """Split "Title|detail" into [(font, line), ...] wrapped to width."""
    title, _, detail = text.partition("|")
    out = []
    for ln in simpleSplit(title, B, FS, width - 2 * PAD):
        out.append((B, ln))
    if detail:
        for part in detail.split("\n"):
            for ln in simpleSplit(part, R, FS - 0.5, width - 2 * PAD):
                out.append((R, ln))
    return out or [(R, "")]


def _box_h(text, width):
    return len(_lines(text, width)) * LS + 2 * PAD


def _box(c, x, y, w, h, text, fill=False, align="center"):
    """Box with its bottom-left corner at (x, y)."""
    c.setStrokeColor(black); c.setLineWidth(0.8)
    c.setFillColor(GRAY if fill else white)
    c.rect(x, y, w, h, stroke=1, fill=1)
    lines = _lines(text, w)
    c.setFillColor(black)
    ty = y + h / 2 + (len(lines) * LS) / 2 - LS + 3
    for font, ln in lines:
        c.setFont(font, FS if font == B else FS - 0.5)
        if align == "center":
            c.drawCentredString(x + w / 2, ty, ln)
        else:
            c.drawString(x + PAD, ty, ln)
        ty -= LS


def _arrow(c, x1, y1, x2, y2, head=5):
    import math
    c.setStrokeColor(black); c.setFillColor(black); c.setLineWidth(0.8)
    c.line(x1, y1, x2, y2)
    a = math.atan2(y2 - y1, x2 - x1)
    p = c.beginPath()
    p.moveTo(x2, y2)
    p.lineTo(x2 - head * math.cos(a - 0.4), y2 - head * math.sin(a - 0.4))
    p.lineTo(x2 - head * math.cos(a + 0.4), y2 - head * math.sin(a + 0.4))
    p.close()
    c.drawPath(p, stroke=0, fill=1)


def _label(c, x, y, text, size=9, font=I):
    c.setFillColor(black); c.setFont(font, size)
    c.drawCentredString(x, y, text)


class Figure(Flowable):
    counter = [0]

    def __init__(self, spec, indent=0):
        super().__init__()
        self.spec, self.indent = spec, indent
        Figure.counter[0] += 1
        self.num = Figure.counter[0]

    # ---- sizing -------------------------------------------------------------
    def wrap(self, aw, ah):
        self.aw = aw - self.indent
        self.body_h = getattr(self, "_h_" + self.spec["type"])()
        self.cap_h = 16 if self.spec.get("caption") else 4
        self.height = self.body_h + self.cap_h + 8
        return aw, self.height

    def draw(self):
        c = self.canv
        c.saveState()
        c.translate(self.indent, self.cap_h + 2)
        getattr(self, "_d_" + self.spec["type"])(c)
        c.restoreState()
        if self.spec.get("caption"):
            _label(c, self.indent + self.aw / 2, 4, f"Figure {self.num}. {self.spec['caption']}", 9.5, I)

    # ---- flow -----------------------------------------------------------------
    def _flow_geom(self):
        boxes = self.spec["boxes"]
        per = self.spec.get("per_row", len(boxes))
        gap = 22
        w = min(150, (self.aw - gap * (per - 1)) / per)
        rows = [boxes[i:i + per] for i in range(0, len(boxes), per)]
        h = max(_box_h(b, w) for b in boxes)
        row_gap = 26
        return rows, w, h, gap, row_gap, per

    def _h_flow(self):
        rows, w, h, gap, rg, per = self._flow_geom()
        return (len(rows) * h + (len(rows) - 1) * rg + (14 if self.spec.get("labels") else 0)
                + (24 if self.spec.get("loop") else 0))

    def _d_flow(self, c):
        rows, w, h, gap, rg, per = self._flow_geom()
        labels = self.spec.get("labels", [])
        shade = set(self.spec.get("shade", []))
        total_w = per * w + (per - 1) * gap
        x0 = (self.aw - total_w) / 2
        top = self.body_h - (14 if labels else 0)
        k = 0
        prev = None
        for r, row in enumerate(rows):
            y = top - h - r * (h + rg)
            for i, b in enumerate(row):
                x = x0 + i * (w + gap)
                _box(c, x, y, w, h, b, fill=k in shade)
                if prev is not None:
                    px, py = prev
                    if py == y:
                        _arrow(c, px + w, y + h / 2, x, y + h / 2)
                        if k - 1 < len(labels) and labels[k - 1]:
                            _label(c, (px + w + x) / 2, y + h + 4, labels[k - 1], 8.5)
                    else:  # next row: elbow from the bottom of the last box to the top of the first box
                        mid = py - rg / 2
                        c.setLineWidth(0.8)
                        c.line(px + w / 2, py, px + w / 2, mid)
                        c.line(px + w / 2, mid, x + w / 2, mid)
                        _arrow(c, x + w / 2, mid, x + w / 2, y + h)
                prev = (x, y)
                k += 1
        if self.spec.get("loop") and len(rows) == 1:
            n = len(rows[0]); y = top - h
            lt = self.spec.get("loop_to", 0)
            xl = x0 + lt * (w + gap) + w / 2; xr = x0 + (n - 1) * (w + gap) + w / 2
            c.setLineWidth(0.8)
            c.line(xr, y, xr, y - 10); c.line(xr, y - 10, xl, y - 10)
            _arrow(c, xl, y - 10, xl, y)
            if self.spec.get("loop_label"):
                _label(c, (xl + xr) / 2, y - 20, self.spec["loop_label"], 8.5)

    # ---- stack ----------------------------------------------------------------
    def _stack_geom(self):
        w = min(330, self.aw - 120)
        hs = [_box_h(b, w) for b in self.spec["boxes"]]
        return w, hs, 6

    def _h_stack(self):
        w, hs, gap = self._stack_geom()
        return sum(hs) + gap * (len(hs) - 1)

    def _d_stack(self, c):
        w, hs, gap = self._stack_geom()
        x = (self.aw - w) / 2
        y = self.body_h
        shade = set(self.spec.get("shade", []))
        for i, (b, h) in enumerate(zip(self.spec["boxes"], hs)):
            y -= h
            _box(c, x, y, w, h, b, fill=i in shade)
            y -= gap
        if self.spec.get("side"):
            sx = x + w + 18
            _arrow(c, sx, self.body_h - 4, sx, 4) if self.spec.get("down", True) else _arrow(c, sx, 4, sx, self.body_h - 4)
            c.saveState(); c.translate(sx + 11, self.body_h / 2); c.rotate(-90)
            _label(c, 0, 0, self.spec["side"], 9); c.restoreState()

    # ---- tree -----------------------------------------------------------------
    def _norm(self, n):
        return n if isinstance(n, dict) else {"label": n, "children": []}

    def _tree_geom(self):
        kids = [self._norm(k) for k in self.spec["children"]]
        n = len(kids)
        gap = 14
        w = min(140, (self.aw - gap * (n - 1)) / n)
        rw = min(200, self.aw * 0.4)
        rh = _box_h(self.spec["root"], rw)
        kh = max(_box_h(k["label"], w) for k in kids)
        gk = [k["children"] for k in kids]
        gh = max([_box_h(g, w) for gs in gk for g in gs] or [0])
        gcount = max([len(gs) for gs in gk] or [0])
        return kids, w, gap, rw, rh, kh, gh, gcount

    def _h_tree(self):
        kids, w, gap, rw, rh, kh, gh, gcount = self._tree_geom()
        h = rh + 28 + kh
        if gcount:
            h += gcount * (gh + 6) + 16
        return h

    def _d_tree(self, c):
        kids, w, gap, rw, rh, kh, gh, gcount = self._tree_geom()
        top = self.body_h
        rx = (self.aw - rw) / 2
        _box(c, rx, top - rh, rw, rh, self.spec["root"], fill=True)
        n = len(kids)
        total = n * w + (n - 1) * gap
        x0 = (self.aw - total) / 2
        ky = top - rh - 28 - kh
        bus = top - rh - 14
        c.setLineWidth(0.8)
        c.line(self.aw / 2, top - rh, self.aw / 2, bus)
        c.line(x0 + w / 2, bus, x0 + (n - 1) * (w + gap) + w / 2, bus)
        for i, k in enumerate(kids):
            x = x0 + i * (w + gap)
            _arrow(c, x + w / 2, bus, x + w / 2, ky + kh) if self.spec.get("arrows") else c.line(x + w / 2, bus, x + w / 2, ky + kh)
            _box(c, x, ky, w, kh, k["label"])
            gy = ky - 16
            for g in k["children"]:
                gy -= gh
                c.line(x + 8, ky, x + 8, gy + gh / 2); c.line(x + 8, gy + gh / 2, x + 16, gy + gh / 2)
                _box(c, x + 16, gy, w - 16, gh, g, align="left")
                gy -= 6

    # ---- columns --------------------------------------------------------------
    def _col_geom(self):
        cols = self.spec["cols"]
        n = len(cols)
        gap = 12
        w = (self.aw - gap * (n - 1)) / n
        head = max(_box_h(col["title"], w) for col in cols)
        body = max(sum(len(simpleSplit(r, R, FS - 0.5, w - 2 * PAD - 8)) for r in col["rows"]) for col in cols) * LS + 2 * PAD
        return cols, w, gap, head, body

    def _h_columns(self):
        cols, w, gap, head, body = self._col_geom()
        return head + body

    def _d_columns(self, c):
        cols, w, gap, head, body = self._col_geom()
        top = self.body_h
        for i, col in enumerate(cols):
            x = i * (w + gap)
            _box(c, x, top - head, w, head, col["title"], fill=True)
            c.setFillColor(white); c.setStrokeColor(black)
            c.rect(x, top - head - body, w, body, stroke=1, fill=1)
            ty = top - head - PAD - LS + 3
            c.setFillColor(black)
            for r in col["rows"]:
                parts = simpleSplit(r, R, FS - 0.5, w - 2 * PAD - 8)
                for j, ln in enumerate(parts):
                    c.setFont(R, FS - 0.5)
                    if j == 0:
                        c.drawString(x + PAD, ty, "•")
                    c.drawString(x + PAD + 8, ty, ln)
                    ty -= LS

    # ---- cycle ----------------------------------------------------------------
    def _h_cycle(self):
        return 190

    def _d_cycle(self, c):
        cx, cy = self.aw / 2, self.body_h / 2
        bw, bh = 120, 40
        cw = 130
        ch = _box_h(self.spec["center"], cw)
        _box(c, cx - cw / 2, cy - ch / 2, cw, ch, self.spec["center"], fill=True)
        dx, dy = 150, 70
        pos = [(cx, cy + dy), (cx + dx, cy), (cx, cy - dy), (cx - dx, cy)]
        boxes = self.spec["boxes"]
        for (x, y), b in zip(pos, boxes):
            _box(c, x - bw / 2, y - bh / 2, bw, bh, b)
        # clockwise arrows between the outer boxes
        _arrow(c, cx + bw / 2, cy + dy, cx + dx, cy + bh / 2)
        _arrow(c, cx + dx, cy - bh / 2, cx + bw / 2, cy - dy)
        _arrow(c, cx - bw / 2, cy - dy, cx - dx, cy - bh / 2)
        _arrow(c, cx - dx, cy + bh / 2, cx - bw / 2, cy + dy)

    # ---- nested ---------------------------------------------------------------
    def _nest_h(self, node, w):
        kids = node.get("children", [])
        h = 20 + (len(simpleSplit(node["detail"], R, FS - 0.5, w - 2 * PAD)) * LS + 2 if node.get("detail") else 0)
        for k in kids:
            h += self._nest_h(k, w - 24) + 6
        return h + (6 if kids else 4)

    def _h_nested(self):
        return self._nest_h(self.spec["box"], min(380, self.aw - 40))

    def _nest_draw(self, c, node, x, ytop, w, depth=0):
        h = self._nest_h(node, w)
        c.setStrokeColor(black); c.setLineWidth(0.8)
        c.setFillColor(GRAY if depth % 2 == 0 else white)
        c.rect(x, ytop - h, w, h, stroke=1, fill=1)
        c.setFillColor(black); c.setFont(B, FS)
        c.drawString(x + PAD, ytop - 13, node["label"])
        y = ytop - 18
        if node.get("detail"):
            for ln in simpleSplit(node["detail"], R, FS - 0.5, w - 2 * PAD):
                c.setFont(R, FS - 0.5); c.drawString(x + PAD, y - 8, ln); y -= LS
            y -= 2
        for k in node.get("children", []):
            kh = self._nest_draw(c, k, x + 12, y - 2, w - 24, depth + 1)
            y -= kh + 6
        return h

    def _d_nested(self, c):
        w = min(380, self.aw - 40)
        self._nest_draw(c, self.spec["box"], (self.aw - w) / 2, self.body_h, w)

    # ---- triangle ---------------------------------------------------------------
    def _h_triangle(self):
        return 150

    def _d_triangle(self, c):
        bw, bh = 140, 38
        top = (self.aw / 2, self.body_h - bh / 2)
        left = (self.aw / 2 - 170, bh / 2 + 2)
        right = (self.aw / 2 + 170, bh / 2 + 2)
        for (x, y), key in ((top, "top"), (left, "left"), (right, "right")):
            _box(c, x - bw / 2, y - bh / 2, bw, bh, self.spec[key], fill=(key == "top"))
        e = self.spec.get("edges", {})
        # left -> top (find), right -> top (publish), left -> right (bind)
        _arrow(c, left[0] + 10, left[1] + bh / 2, top[0] - bw / 2 + 10, top[1] - bh / 2)
        _label(c, (left[0] + top[0]) / 2 - 40, (left[1] + top[1]) / 2 + 4, e.get("left-top", ""), 9)
        _arrow(c, right[0] - 10, right[1] + bh / 2, top[0] + bw / 2 - 10, top[1] - bh / 2)
        _label(c, (right[0] + top[0]) / 2 + 42, (right[1] + top[1]) / 2 + 4, e.get("right-top", ""), 9)
        _arrow(c, left[0] + bw / 2, left[1], right[0] - bw / 2, right[1])
        _label(c, self.aw / 2, left[1] + 6, e.get("left-right", ""), 9)

    # ---- cells ----------------------------------------------------------------
    def _h_cells(self):
        return 46 + (14 if self.spec.get("note") else 0)

    def _d_cells(self, c):
        chars = self.spec["chars"]
        cw = min(26, (self.aw - 20) / len(chars))
        x0 = (self.aw - cw * len(chars)) / 2
        y = self.body_h - 30
        for i, ch in enumerate(chars):
            c.setStrokeColor(black); c.setFillColor(GRAY if i in self.spec.get("shade", []) else white)
            c.rect(x0 + i * cw, y, cw, 24, stroke=1, fill=1)
            c.setFillColor(black); c.setFont("Courier-Bold", 12)
            if ch == " ":
                c.setFont(I, 7.5); c.drawCentredString(x0 + i * cw + cw / 2, y + 9, "sp")
            else:
                c.drawCentredString(x0 + i * cw + cw / 2, y + 8, ch)
            c.setFont(R, 8.5)
            c.drawCentredString(x0 + i * cw + cw / 2, y - 11, str(i))
        if self.spec.get("note"):
            _label(c, self.aw / 2, y - 26, self.spec["note"], 9, R)
