import { useDispatch, useSelector } from "react-redux";
import { buyPhone, restockPhone } from "./reduxtoolkit/phoneSlice";
import { useState } from "react";
const App = () => {
  const numberOfPhones = useSelector((state) => state.phone.numberOfPhones);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "auto", width: "500px", height: "100vh" }}>
      <h1> nUmber of Phones ** {numberOfPhones} </h1>
      <button onClick={() => dispatch(buyPhone())}> buy a phone </button>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(restockPhone(parseInt(input)));
            setInput("");
          }}
        >
          restock
        </button>
      </div>
    </div>
  );
};

export default App;
