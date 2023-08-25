import { auth } from "../firebase";

const SignOut = () => {
  return (
    <button
      onClick={() => auth.signOut()}
      className="bg-blue-500 p-2 m-3 text-white rounded-md"
    >
      Log Out
    </button>
  );
};

export default SignOut;
