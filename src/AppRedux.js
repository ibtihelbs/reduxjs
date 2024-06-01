import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { phoneCreator } from "./redux/phones/actions";
import { useState } from "react";
import { userLogCreator } from "./redux/user/actions";
function App() {
  const numberOfPhones = useSelector((state) => state.shop.numberOfPhones);
  const islogged = useSelector((state) => state.user.userLogged);
  console.log(islogged);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  console.log(typeof phoneCreator());
  return (
    <div className="App">
      <button onClick={() => dispatch(userLogCreator())}>
        {" "}
        {!islogged ? "login" : "log out"}{" "}
      </button>
      <h1> NUmber of phones - {numberOfPhones} </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={() => {
          if (numberOfPhones - parseInt(input) < 0) return;
          dispatch(phoneCreator(parseInt(input)));
          setInput("");
        }}
      >
        {" "}
        buy a phone{" "}
      </button>
    </div>
  );
}

export default App;
