import { useState } from "react";
import { login, googleLogin } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white gap-4">
      <h1 className="text-4xl font-bold">Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="p-2 rounded text-black"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="p-2 rounded text-black"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-green-500 px-4 py-2 rounded"
      >
        Login
      </button>

      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Continue with Google
      </button>

      <Link to="/signup" className="text-blue-400">
        Create Account
      </Link>
    </div>
  );
}

export default Login;