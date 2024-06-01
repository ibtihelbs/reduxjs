import { useDispatch, useSelector } from "react-redux";
import { buyPhone, restockPhone } from "./reduxtoolkit/phoneSlice";
import { useEffect, useState } from "react";
import { userFetch } from "./reduxtoolkit/userSlice";
const App = () => {
  const numberOfPhones = useSelector((state) => state.phone.numberOfPhones);
  const [input, setInput] = useState("");
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userFetch("https://jsonplaceholder.typicode.com/users"));
  }, [dispatch]);

  return (
    <div style={{ margin: "auto", width: "500px", height: "100vh" }}>
      <h1>Users</h1>
      {users.status == "loading" ? (
        <h3>loading</h3>
      ) : users.status == "success" ? (
        users.users.map((v) => <h2 key={v.id}> {v.email} </h2>)
      ) : (
        <h3> {users.error} </h3>
      )}
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
