import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";

function Login() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await result.user.getIdToken();
      console.log("Logged in as:", user.displayName);
      console.log("token is logged in :",token);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;