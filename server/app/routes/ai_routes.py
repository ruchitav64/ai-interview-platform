from fastapi import APIRouter
from pydantic import BaseModel

from app.services.ai_service import evaluate_answer

router = APIRouter()

class InterviewRequest(BaseModel):  #validates incoming JSON automatically.
    question: str
    answer: str

@router.post("/evaluate")
def evaluate_interview(request: InterviewRequest):

    feedback = evaluate_answer(
        request.question,
        request.answer
    )

    return {
        "feedback": feedback
    }