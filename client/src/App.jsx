import { useState } from "react";
import { signup, login, googleLogin } from "./services/authService";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signup(email, password);
      alert("Signup successful");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Login successful");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      alert("Google login successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 bg-black text-white">
      <h1 className="text-4xl font-bold">AI Interview Platform</h1>

      <input
        type="email"
        placeholder="Enter email"
        className="p-2 text-black rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        className="p-2 text-black rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex gap-4">
        <button
          onClick={handleSignup}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Signup
        </button>

        <button
          onClick={handleLogin}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Login
        </button>
      </div>

      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Continue with Google
      </button>
    </div>
  );
}

export default App;