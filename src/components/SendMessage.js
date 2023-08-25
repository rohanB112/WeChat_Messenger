import { async } from "@firebase/util";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase.js";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={sendMessage}
        className="h-14 flex m-auto fixed bottom-0 w-full max-w-[728px] text-xl px-5"
      >
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="w-full rounded-l-md bg-gray-700 text-xl p-3 text-white border-none outline-none"
          type="text"
          placeholder="Message"
        />
        <button
          className="w-[20%] rounded-r-md bg-blue-500 text-white"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
