import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";

import { getInterviewHistory } from "../services/firestoreService";

function History() {
  const { user } = useContext(AuthContext);

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getInterviewHistory(user.uid);

      setHistory(data);
    };

    fetchHistory();
  }, [user]);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Interview History
      </h1>

      <div className="flex flex-col gap-6">
        {history.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold mb-2">
              Question
            </h2>

            <p className="mb-4">
              {item.question}
            </p>

            <h2 className="text-xl font-bold mb-2">
              Your Answer
            </h2>

            <p>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;