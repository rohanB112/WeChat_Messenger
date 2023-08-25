import { auth } from "../firebase.js";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#2ecc71] text-white float-left rounded-br-full`,
};

const Message = ({ text, name, uid }) => {
  const messageClass =
    uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
