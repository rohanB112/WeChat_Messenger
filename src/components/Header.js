import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Logo from "../assets/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="flex justify-between items-center m-4 p-4">
      <h1 className="text-3xl font-bold flex">
        <img src={Logo} className="w-10 mx-3" />
        WeChat
      </h1>
      {user ? (
        <div className="flex items-center">
          <h1 className="font-sans underline">{user.displayName}</h1>
          <SignOut />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
