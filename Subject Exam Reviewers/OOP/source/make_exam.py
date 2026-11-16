"""Build the oop_finals exam object (JSON) for src/data/exams.js from questions.py.
Multiple choice only. Code-reading items are compiled and run with javac/java, and the real
output (lines joined with " / ") becomes the correct option. Usage: python3 make_exam.py
"""
import json, os, random, subprocess, tempfile
from collections import Counter
import questions as Q

rng = random.Random(11)  # fixed seed -> same answer letters every rebuild


def run_java(file, code, joiner=" / "):
    with tempfile.TemporaryDirectory() as d:
        src = os.path.join(d, f"{file}.java")
        # Like the instructor's handouts, every class may be written "public class ..."; only the
        # class holding main() can be public in one .java file, so drop "public" from the others.
        import re
        code = re.sub(r"\bpublic\s+((?:abstract\s+)?(?:class|interface))\s+(\w+)",
                      lambda m: m.group(0) if m.group(2) == file else f"{m.group(1)} {m.group(2)}", code)
        open(src, "w").write(code)
        c = subprocess.run(["javac", src], capture_output=True, text=True, cwd=d)
        if c.returncode != 0:
            raise RuntimeError(f"{file}: compile error\n{c.stderr}")
        r = subprocess.run(["java", "-cp", d, file], capture_output=True, text=True, cwd=d, timeout=20)
        if r.returncode != 0:
            raise RuntimeError(f"{file}: runtime error\n{r.stderr}")
        return joiner.join(line.strip() for line in r.stdout.strip().splitlines())


def place(correct, distractors, bag):
    opts = [correct] + list(distractors)
    assert len(opts) == 4 and len(set(opts)) == 4, opts
    if not bag:
        bag.extend([0, 1, 2, 3]); rng.shuffle(bag)
    pos = bag.pop()
    wrong = list(distractors); rng.shuffle(wrong)
    wrong.insert(pos, correct)
    return wrong, pos


def build():
    items, bag = [], []
    code_by_module = {}
    for c in Q.CODE:
        code_by_module.setdefault(c["module"], []).append(c)
    for module, rows in Q.MC.items():
        for text, correct, distractors, note in rows:
            opts, pos = place(correct, distractors, bag)
            items.append({"question": text, "options": opts, "answer": pos,
                          "explanation": module + (f". {note}" if note else "")})
        for c in code_by_module.get(module, []):
            output = run_java(c["file"], c["code"])
            opts, pos = place(output, c["wrong"], bag)
            items.append({"question": c["q"], "code": c["code"], "options": opts, "answer": pos,
                          "explanation": module + f". Output: {output}. {c['note']}"})
        for o in [x for x in Q.OUTPUT if x["module"] == module]:
            output = run_java(o["file"], o["code"], "\n")
            items.append({"type": "output_tracing",
                          "question": f"Trace the output ({o['name']}): what does this program print?",
                          "code": o["code"], "answer": output,
                          "instruction": "Type each printed line on its own line, in order." if "\n" in output
                                         else "Type exactly what is printed.",
                          "explanation": module + f". {o['note']}"})
    for i, q in enumerate(items, 1):
        q["id"] = i
    return items


if __name__ == "__main__":
    qs = build()
    exam = {
        "id": "oop_finals",
        "term": "Finals",
        "title": "Finals Exam Reviewer",
        "description": "Modules 10–14: Code Reuse and Class Hierarchy, Interfaces, Abstract Class and Interface, Polymorphism, and Modularity. Multiple choice + output tracing.",
        "timeLimit": 90,
        "questions": qs,
    }
    os.makedirs("out", exist_ok=True)
    json.dump(exam, open("out/oop_finals.json", "w"), ensure_ascii=False, indent=2)
    print("total:", len(qs), {m.split(" - ")[0]: len(v) for m, v in Q.MC.items()}, "| code items:", len(Q.CODE))
    qs_mc = [q for q in qs if q.get("type") != "output_tracing"]
    print("output tracing:", len(Q.OUTPUT), "items,", sum(len(q["answer"].split("\n")) for q in qs if q.get("type") == "output_tracing"), "lines")
    for q in qs:
        if q.get("type") == "output_tracing": print("\n#", q["question"]); print(q["answer"])
    qs = qs_mc
    print("letters:", dict(sorted(Counter("ABCD"[q["answer"]] for q in qs).items())))
    print("longest-is-correct:", sum(1 for q in qs if max(range(4), key=lambda i: len(q["options"][i])) == q["answer"]))
    for q in qs:
        if "code" in q:
            print("  code:", q["options"][q["answer"]])
    for q in qs:
        L = [len(o) for o in q["options"]]; a = q["answer"]; rest = max(L[:a] + L[a + 1:])
        if L[a] > rest * 1.35 and L[a] - rest > 10:
            print("  giveaway?", q["id"], "|", q["options"][a][:70])
