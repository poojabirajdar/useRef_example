import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const refNumber = useRef(1);
  const refFocus = useRef();
  const prevValue = useRef();
  useEffect(() => {
    refNumber.current = refNumber.current + 1;
  });
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  function foucs() {
    refFocus.current.focus();
    refFocus.current.value = "hi theres";
  }
  return (
    <div className="App">
      <input
        ref={refFocus}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <div>{value}</div>
      <div>render count:{refNumber.current}</div>
      <div>previous value:{prevValue.current}</div>
      <button onClick={foucs}>Focus</button>
    </div>
  );
}
