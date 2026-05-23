import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

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