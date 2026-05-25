import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv(dotenv_path=".env")

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel(
    "models/gemini-3.1-flash-live-preview"
)

def evaluate_answer(question, answer):

    prompt = f"""
    You are a professional interview evaluator.

    Interview Question:
    {question}

    Candidate Answer:
    {answer}

    Evaluate the answer professionally.

    Give:
    1. Strengths
    2. Weaknesses
    3. Suggestions for improvement
    4. Confidence score out of 10
    """

    response = model.generate_content(prompt)

    return response.text