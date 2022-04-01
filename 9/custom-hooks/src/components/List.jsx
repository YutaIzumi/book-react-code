import { useFetchUsers } from "../hooks/useFetchUsers";

export const List = () => {
  // カスタムフックの使用
  // 関数を実行し返却値を分割代入で受け取る
  const { userList, isLoading, isError, onClickFetchUser, test, isTest } = useFetchUsers();

  return (
    <div>
        <p>List</p>
        <p>{String(test)}</p>
        <button onClick={isTest}>test</button>
    </div>
  );
};