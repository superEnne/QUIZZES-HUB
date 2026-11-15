"""Build the CC6 Finals pointers PDF: Times 12, black text only, review-material layout."""
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import black
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
                                KeepTogether, Flowable)
from xml.sax.saxutils import escape
import pointers as P

OUT = sys.argv[1] if len(sys.argv) > 1 else "CC6_Finals_Pointers.pdf"
R, B, I = "Times-Roman", "Times-Bold", "Times-Italic"
SIZE, LEAD = 12, 15
IND = 0.25 * inch          # body indent under a section heading
BUL = 0.5 * inch           # bullet text indent

title = ParagraphStyle("title", fontName=B, fontSize=14, leading=18, alignment=TA_CENTER, textColor=black)
subtitle = ParagraphStyle("sub", fontName=I, fontSize=SIZE, leading=LEAD, alignment=TA_CENTER, textColor=black, spaceAfter=10)
body = ParagraphStyle("body", fontName=R, fontSize=SIZE, leading=LEAD, alignment=TA_JUSTIFY, textColor=black)
body_ind = ParagraphStyle("body_ind", parent=body, leftIndent=IND, spaceAfter=4)
part = ParagraphStyle("part", fontName=B, fontSize=SIZE, leading=LEAD, textColor=black, spaceBefore=12, spaceAfter=2)
sec = ParagraphStyle("sec", fontName=B, fontSize=SIZE, leading=LEAD, textColor=black, leftIndent=IND, spaceBefore=6, spaceAfter=2)
bullet = ParagraphStyle("bullet", fontName=R, fontSize=SIZE, leading=LEAD, textColor=black,
                        leftIndent=BUL, bulletIndent=IND + 0.08 * inch, bulletFontName=R, bulletFontSize=SIZE, spaceAfter=1)
cell = ParagraphStyle("cell", fontName=R, fontSize=SIZE, leading=LEAD - 1, textColor=black)
cell_b = ParagraphStyle("cell_b", parent=cell, fontName=B)


class Rule(Flowable):
    """Thin black line under a part heading, like the review material."""
    def __init__(self, width=None, thickness=0.75):
        super().__init__()
        self.width, self.thickness = width, thickness
    def wrap(self, aw, ah):
        self.w = self.width or aw
        return self.w, self.thickness + 4
    def draw(self):
        self.canv.setStrokeColor(black)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, 2, self.w, 2)


def esc(t):
    return escape(t).replace('"', "&quot;")


def bullets_for(section):
    out = []
    for term, meaning in section.get("terms", []):
        out.append(Paragraph(f"<b>{esc(term)}</b> - {esc(meaning)}", bullet, bulletText="•"))
    for pt in section.get("points", []):
        # Bold the label before " - " when a point is "Label - details"
        if " - " in pt:
            label, rest = pt.split(" - ", 1)
            pt_html = f"<b>{esc(label)}</b> - {esc(rest)}"
        else:
            pt_html = esc(pt)
        out.append(Paragraph(pt_html, bullet, bulletText="•"))
    return out


def build():
    story = [Paragraph(esc(P.TITLE), title), Paragraph(esc(P.SUBTITLE), subtitle),
             Paragraph(esc(P.INTRO), body), Spacer(1, 4)]

    for ch in P.CHAPTERS:
        story.append(KeepTogether([Paragraph(f"{ch['num']} - {esc(ch['title'])} ({ch['chapter']})", part), Rule()]))
        for si, s in enumerate(ch["sections"], 1):
            head = Paragraph(f"{ch['num']}.{si}  {esc(s['heading'])}", sec)
            block = [head]
            if s.get("text") and not s.get("terms") and not s.get("points"):
                block.append(Paragraph(esc(s["text"]), body_ind))
            else:
                # text first if it is an introduction; for "Two Types" the text is a follow-up note
                if s.get("text") and s["heading"] != "Two Types of Query Languages":
                    block.append(Paragraph(esc(s["text"]), body_ind))
                block.extend(bullets_for(s))
                if s.get("text") and s["heading"] == "Two Types of Query Languages":
                    block.append(Spacer(1, 2))
                    block.append(Paragraph(esc(s["text"]), body_ind))
            # keep heading with its first lines
            story.append(KeepTogether(block[:3]))
            story.extend(block[3:])

    # Quick comparisons
    n = len(P.CHAPTERS) + 1
    rows = [[Paragraph("Terms", cell_b), Paragraph("How to tell them apart", cell_b)]]
    rows += [[Paragraph(esc(a), cell_b), Paragraph(esc(b), cell)] for a, b in P.COMPARISONS]
    t = Table(rows, colWidths=[2.1 * inch, 4.4 * inch - IND], hAlign="RIGHT")
    t.setStyle(TableStyle([
        ("GRID", (0, 0), (-1, -1), 0.5, black),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5), ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 3), ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.append(KeepTogether([Paragraph(f"{n} - Quick Comparisons", part), Rule(), Spacer(1, 4), t]))

    def footer(canv, doc):
        canv.saveState()
        canv.setFont(R, 10)
        canv.setFillColor(black)
        canv.drawCentredString(letter[0] / 2, 0.55 * inch, f"CC 6 Finals Pointers  |  Page {doc.page}")
        canv.restoreState()

    doc = SimpleDocTemplate(OUT, pagesize=letter, leftMargin=inch, rightMargin=inch,
                            topMargin=0.9 * inch, bottomMargin=0.9 * inch,
                            title="CC 6 Finals Exam Pointers - Chapters 5 to 8",
                            author="QuizHub", subject="Information Management")
    from functools import partial
    from reportlab.pdfgen.canvas import Canvas
    doc.build(story, onFirstPage=footer, onLaterPages=footer,
              canvasmaker=partial(Canvas, initialFontName=R, initialFontSize=SIZE))


if __name__ == "__main__":
    build()
    print("wrote", OUT)
