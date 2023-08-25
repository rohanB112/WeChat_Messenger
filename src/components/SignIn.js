import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <button
      onClick={googleSignIn}
      className="bg-blue-500 px-6 py-2 my-3 text-white rounded-md"
    >
      Get Started
    </button>
  );
};

export default SignIn;
