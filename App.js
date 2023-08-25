import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Chat from "./src/components/Chat";
import Home from "./src/components/Home";

import { auth } from "./src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const root = createRoot(document.getElementById("root"));

const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <Header />
      {user && <Chat />}
      {!user && <Home />}
    </>
  );
};

root.render(<App />);
