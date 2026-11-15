"""Build the ea_finals exam object (JSON) for src/data/exams.js from questions.py.
Types: multiple choice + True or False. Usage: python3 make_exam.py
"""
import json, os, random
from collections import Counter
import questions as Q

rng = random.Random(9)  # fixed seed -> same answer letters every rebuild


def build():
    items, bag = [], []
    for chapter in Q.MC:
        for text, correct, distractors, note in Q.MC[chapter]:
            opts = [correct] + list(distractors)
            assert len(opts) == 4 and len(set(opts)) == 4, (text, opts)
            if not bag:
                bag = [0, 1, 2, 3]; rng.shuffle(bag)
            pos = bag.pop()
            wrong = list(distractors); rng.shuffle(wrong)
            wrong.insert(pos, correct)
            items.append({"question": text, "options": wrong, "answer": pos,
                          "explanation": chapter + (f". {note}" if note else "")})
        for statement, truth, note in Q.TF.get(chapter, []):
            items.append({"type": "true_false", "question": statement, "options": ["True", "False"],
                          "answer": 0 if truth else 1,
                          "explanation": chapter + (f". {note}" if note else "")})
    for i, q in enumerate(items, 1):
        q["id"] = i
    return items


if __name__ == "__main__":
    qs = build()
    exam = {
        "id": "ea_finals",
        "term": "Finals",
        "title": "Finals Exam Reviewer",
        "description": "Chapters 9–11: Developing Future Architecture Views, Developing an EA Management Plan, and the Role of Investment Planning and Project Management. Multiple choice + True or False.",
        "timeLimit": 90,
        "questions": qs,
    }
    os.makedirs("out", exist_ok=True)
    json.dump(exam, open("out/ea_finals.json", "w"), ensure_ascii=False, indent=2)
    mc = [q for q in qs if q.get("type", "mc") == "mc"]
    tf = [q for q in qs if q.get("type") == "true_false"]
    print("total:", len(qs), "| MC:", len(mc), "| TF:", len(tf))
    print("MC letters:", dict(sorted(Counter("ABCD"[q["answer"]] for q in mc).items())))
    print("TF:", dict(Counter("True" if q["answer"] == 0 else "False" for q in tf)))
    print("longest-is-correct:", sum(1 for q in mc if max(range(4), key=lambda i: len(q["options"][i])) == q["answer"]))
    for q in mc:
        L = [len(o) for o in q["options"]]; c = L[q["answer"]]; rest = max(L[:q["answer"]] + L[q["answer"] + 1:])
        if c > rest * 1.35 and c - rest > 10:
            print("  giveaway?", q["id"], "|", q["options"][q["answer"]][:70])
