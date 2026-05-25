import { useState, useContext } from "react";
import questions from "../data/questions";
import { AuthContext } from "../context/AuthContext";
import { saveInterviewAttempt } from "../services/firestoreService";

function Interview() {
    const { user } = useContext(AuthContext);
  const [currentQuestion] = useState(
    questions[Math.floor(Math.random() * questions.length)]
  );

  const [answer, setAnswer] = useState("");

  const handleSubmit = async () => {
  try {
    console.log("Submitting answer...");

    console.log(user.uid);

    await saveInterviewAttempt(
      user.uid,
      currentQuestion.question,
      answer
    );

    console.log("Saved successfully");

    alert("Answer saved successfully");

  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-4xl font-bold">
        Mock Interview
      </h1>

      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-2xl">
        <p className="text-xl mb-4">
          {currentQuestion.question}
        </p>

        <textarea
          placeholder="Write your answer here..."
          className="w-full h-40 p-4 rounded text-black"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 px-4 py-2 rounded"
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
}

export default Interview;