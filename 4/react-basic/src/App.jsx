import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  // Stateの定義
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("add!");
  }, [num]);

  // ボタンを押した時にStateをカウントアップ
  const onClickButton = () => {
    setNum((num) => num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColoredMessage color="blue" fontSize="20px">お元気ですか?</ColoredMessage>
      <ColoredMessage color="pink" fontSize="20px">元気です!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
