import { useSelector } from "react-redux";

const Test = () => {
  const state = useSelector((state) => state.airPad);
  console.log("test componant", state);
  return <div>Test</div>;
};

export default Test;
