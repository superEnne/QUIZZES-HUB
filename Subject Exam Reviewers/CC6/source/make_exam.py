"""Turn questions.py into the cc6_finals exam object (JSON) for src/data/exams.js."""
import json, random
from collections import Counter
import questions as Q

rng = random.Random(6)  # fixed seed -> same answer letters every rebuild

def build_questions():
    out, positions, qid = [], [], 1
    for chapter, items in Q.QUESTIONS.items():
        for text, correct, distractors, note in items:
            opts = [correct] + list(distractors)
            assert len(opts) == 4 and len(set(opts)) == 4, (text, opts)
            # balanced answer letters: refill a shuffled [0,1,2,3] bag
            if not positions:
                positions = [0, 1, 2, 3]; rng.shuffle(positions)
            pos = positions.pop()
            wrong = list(distractors); rng.shuffle(wrong)
            wrong.insert(pos, correct)
            expl = chapter + (f". {note}" if note else "")
            out.append({"id": qid, "question": text, "options": wrong, "answer": pos, "explanation": expl})
            qid += 1
    return out

if __name__ == "__main__":
    qs = build_questions()
    exam = {
        "id": "cc6_finals",
        "term": "Finals",
        "title": "Finals Exam Reviewer",
        "description": "Chapters 5–8: Database Query Languages, Data Organization and Architecture, Data Governance, and Special Purpose Databases.",
        "timeLimit": 120,
        "questions": qs,
    }
    json.dump(exam, open("out/cc6_finals.json", "w"), ensure_ascii=False, indent=2)
    print("questions:", len(qs), "| per chapter:", {k.split(' - ')[0]: len(v) for k, v in Q.QUESTIONS.items()})
    print("answer letters:", dict(sorted(Counter("ABCD"[q["answer"]] for q in qs).items())))
