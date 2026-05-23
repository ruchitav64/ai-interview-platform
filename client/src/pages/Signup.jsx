import { useState } from "react";
import { signup } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signup(email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white gap-4">
      <h1 className="text-4xl font-bold">Signup</h1>

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
        onClick={handleSignup}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        Signup
      </button>

      <Link to="/" className="text-blue-400">
        Already have an account?
      </Link>
    </div>
  );
}

export default Signup;