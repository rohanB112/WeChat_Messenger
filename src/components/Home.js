import main from "../assets/main.png";
import SignIn from "./SignIn";

const Home = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 self-center mx-32">
      <div className="p-6">
        <p className="text-4xl font-bold my-3">
          Welcome to <br />
          We chat
        </p>
        <p className="text-gray-600">
          A simple React Js chat app powered by Firebase along with Tailwind
          CSS. Click on the Get Started button to Log in using your google
          account. Thank You!
        </p>
        <SignIn />
      </div>
      <div className="flex text-center items-center">
        <img src={main} alt="img" className="w-3/4 m-auto" />
      </div>
    </div>
  );
};

export default Home;
