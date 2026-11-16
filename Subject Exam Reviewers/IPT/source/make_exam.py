"""Build the ipt1_finals exam object (JSON) for src/data/exams.js from questions.py.
Multiple choice only. Answer letters are balanced with a fixed seed. Usage: python3 make_exam.py
"""
import json, os, random
from collections import Counter
import questions as Q

rng = random.Random(23)  # fixed seed -> same answer letters every rebuild


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
    for lesson, rows in Q.MC.items():
        for row in rows:
            text, correct, distractors, note = row[:4]
            code = row[4] if len(row) > 4 else None
            opts, pos = place(correct, distractors, bag)
            q = {"question": text, "options": opts, "answer": pos,
                 "explanation": lesson + (f". {note}" if note else ".")}
            if code:
                q["code"] = code
            items.append(q)
    for i, q in enumerate(items, 1):
        q["id"] = i
    return items


if __name__ == "__main__":
    qs = build()
    exam = {
        "id": "ipt1_finals",
        "term": "Finals",
        "title": "Finals Exam Reviewer",
        "description": "Web Services and SOAP, REST and Consuming APIs, and Reliable and Secure Data Exchange (serialization, access control, data protection). Multiple choice, from remembering to scenario and evaluating items.",
        "timeLimit": 90,
        "questions": qs,
    }
    os.makedirs("out", exist_ok=True)
    json.dump(exam, open("out/ipt1_finals.json", "w"), ensure_ascii=False, indent=2)
    print("total:", len(qs), {k.split(" - ")[0]: len(v) for k, v in Q.MC.items()}, "| with code:", sum("code" in q for q in qs))
    print("letters:", dict(sorted(Counter("ABCD"[q["answer"]] for q in qs).items())))
    longest = [q for q in qs if max(range(4), key=lambda i: len(q["options"][i])) == q["answer"]]
    print("longest-is-correct:", len(longest), f"({len(longest)*100//len(qs)}%)")
    for q in qs:
        L = [len(o) for o in q["options"]]; a = q["answer"]; rest = max(L[:a] + L[a + 1:])
        if L[a] > rest * 1.3 and L[a] - rest > 8:
            print("  giveaway?", q["id"], "|", q["options"][a], "| vs", max((o for i, o in enumerate(q["options"]) if i != a), key=len))
