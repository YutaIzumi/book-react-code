import { useState } from "react";

export const Hello = () => {
  // Stateの定義
  const [values, setValues] = useState({
    date: '2021-08-14',
    title: 'initial title',
    description: 'initial description',
  });

  const onClickButton = () => {
    setValues({...values, title: 'changed title', description: 'today!' });
  }

  return (
    <>
        <button onClick={onClickButton}>button</button>
        <ul>
            <li>{values.date}</li>
            <li>{values.title}</li>
            <li>{values.description}</li>
        </ul>
    </>
  );
};
