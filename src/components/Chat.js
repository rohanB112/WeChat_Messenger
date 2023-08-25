import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Chat = () => {
  const scroll = useRef();
  console.log(scroll);
  const [messages, setMessages] = useState([]);
  // console.log(messages);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className="flex flex-col p-[10px] relative">
        {messages &&
          messages.map((message) => {
            return <Message key={message.id} {...message} />;
          })}
      </main>
      <SendMessage scroll={scroll} />

      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
