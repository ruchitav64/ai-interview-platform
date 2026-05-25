import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      <p>User successfully authenticated.</p>
      <div className="flex gap-4">
        <Link
          to="/interview"
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Start Interview
        </Link>

        <Link
          to="/history"
          className="bg-green-500 px-4 py-2 rounded"
        >
          View History
        </Link>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;