import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const is = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!is.current) {
      is.current = true;
      return;
    }
    console.log("update");
  });
  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value); // 비동기로 수행된다.
    //console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
