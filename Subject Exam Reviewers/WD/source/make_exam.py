"""Build the wd_finals exam object (JSON) for src/data/exams.js.

Output-tracing answers are never typed by hand: each console snippet is run with Node
and each DOM snippet with jsdom, and the real output becomes the answer key.
Usage: python3 make_exam.py <path-to-node-project-with-jsdom>
"""
import json, random, subprocess, sys, os, tempfile
from collections import Counter
import questions as Q

RUNNER = sys.argv[1] if len(sys.argv) > 1 else "runner"
rng = random.Random(7)  # fixed seed -> same answer letters every rebuild


def run_console(code):
    out = subprocess.run(["node", "-e", code], capture_output=True, text=True, timeout=20)
    if out.returncode != 0:
        raise RuntimeError(out.stderr)
    return out.stdout.rstrip("\n")


DOM_JS = r"""
const { JSDOM } = require('jsdom');
const [html, script, selector] = JSON.parse(require('fs').readFileSync(0, 'utf8'));
const dom = new JSDOM('<!DOCTYPE html><body>' + html + '</body>', { runScripts: 'outside-only' });
// jsdom has no innerText; browsers treat it like textContent for these simple cases
Object.defineProperty(dom.window.HTMLElement.prototype, 'innerText', {
  get() { return this.textContent; }, set(v) { this.textContent = v; }, configurable: true });
dom.window.eval(script);
const lines = [...dom.window.document.querySelectorAll(selector)].map(e => e.textContent.trim());
process.stdout.write(lines.join('\n'));
"""


def run_dom(html, script, selector):
    with tempfile.NamedTemporaryFile("w", suffix=".js", dir=RUNNER, delete=False) as f:
        f.write(DOM_JS)
        path = f.name
    try:
        out = subprocess.run(["node", path], input=json.dumps([html, script, selector]),
                             capture_output=True, text=True, timeout=20, cwd=RUNNER)
    finally:
        os.unlink(path)
    if out.returncode != 0:
        raise RuntimeError(out.stderr)
    return out.stdout


def build_mc():
    items, bag = [], []
    for chapter, rows in Q.MC.items():
        for text, correct, distractors, note in rows:
            opts = [correct] + list(distractors)
            assert len(opts) == 4 and len(set(opts)) == 4, (text, opts)
            if not bag:
                bag = [0, 1, 2, 3]; rng.shuffle(bag)
            pos = bag.pop()
            wrong = list(distractors); rng.shuffle(wrong)
            wrong.insert(pos, correct)
            items.append({"question": text, "options": wrong, "answer": pos,
                          "explanation": chapter + (f". {note}" if note else ""), "_ch": chapter})
    return items


def build_output():
    items = []
    for o in Q.OUTPUT:
        if o["kind"] == "console":
            answer = run_console(o["code"])
            items.append({"type": "output_tracing",
                          "question": f"{o['name']} - Determine the exact output produced by the program.",
                          "code": o["code"], "answer": answer,
                          "explanation": f"{Q.CH6}. {o['note']}."})
        else:
            answer = run_dom(o["html"], o["script"], o["selector"])
            code = "<!-- index.html -->\n" + o["html"] + "\n\n// script.js\n" + o["script"]
            items.append({"type": "output_tracing",
                          "question": f"{o['name']} - What text does each element display after script.js runs?",
                          "code": code, "answer": answer,
                          "instruction": "Type the text each element displays on the page, top to bottom, one per line.",
                          "explanation": f"{Q.CH6}. {o['note']}."})
    return items


if __name__ == "__main__":
    mc = build_mc()
    ot = build_output()
    # Order: chapter 5 MC, chapter 6 MC, output tracing, chapter 7 MC (shuffle is on by default anyway)
    ordered = [q for q in mc if q["_ch"] == Q.CH5] + [q for q in mc if q["_ch"] == Q.CH6] + ot + \
              [q for q in mc if q["_ch"] == Q.CH7]
    for i, q in enumerate(ordered, 1):
        q.pop("_ch", None)
        q["id"] = i
    exam = {
        "id": "wd_finals",
        "term": "Finals",
        "title": "Finals Exam Reviewer",
        "description": "Chapters 5–7: Advanced CSS, Introduction to JavaScript (incl. DOM), and Web Hosting. Multiple choice + JavaScript output tracing.",
        "timeLimit": 120,
        "questions": ordered,
    }
    os.makedirs("out", exist_ok=True)
    json.dump(exam, open("out/wd_finals.json", "w"), ensure_ascii=False, indent=2)
    print("MC:", len(mc), {k.split(' - ')[0]: len(v) for k, v in Q.MC.items()},
          "| output tracing:", len(ot), "| total:", len(ordered))
    print("answer letters:", dict(sorted(Counter("ABCD"[q["answer"]] for q in mc).items())))
    print("longest-is-correct:", sum(1 for q in mc if max(range(4), key=lambda i: len(q["options"][i])) == q["answer"]))
    print("output lines:", sum(len(q["answer"].split("\n")) for q in ot))
    for q in ot:
        print("\n#", q["question"].split(" - ")[0]); print(q["answer"])
