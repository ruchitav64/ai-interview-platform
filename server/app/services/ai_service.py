import os
from dotenv import load_dotenv
from google import genai

load_dotenv(dotenv_path=".env")

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
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

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return response.text

    except Exception as e:
        return str(e)