import { useState } from "react";
import axios from "axios";

// ユーザー一覧を取得するカスタムフック
export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [test, setTest] = useState(false);

  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = () => {
    // ボタン押下時にローディングフラグon、エラーフラグoff
    setIsLoading(true);
    setIsError(false);

    // APIの実行
    axios
      .get("http://localhost:3000/posts")
      .then((result) => {
        console.table(result.data);
        // 苗字と名前を結合するように変換
        const users = result.data.map((user) => ({
          id: user.id,
          name: `${user.lastname} ${user.firstname}`,
          age: user.age,
        }));
        // ユーザー一覧Stateを更新
        setUserList(users);
      })
      // エラーの場合はエラーフラグをon
      .catch(() => setIsError(true))
      // 処理完了後はローディングフラグをoff
      .finally(() => setIsLoading(false));
  };

  const isTest = () => {
    setTest(!test);
  } 

  // まとめて返却したいのでオブジェクトに設定する
  return { userList, isLoading, isError, onClickFetchUser, test, isTest };
};
