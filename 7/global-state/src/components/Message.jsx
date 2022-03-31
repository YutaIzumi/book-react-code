import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

export const Message = (props) => {
  const { id } = props;
  // Context内のisAdminと更新関数を取得
  const { isAdmin, message, setMessage } = useContext(AdminFlagContext);

  // 切り替え押下時
  const onClickMessage = () => document.getElementById(id).textContent=message;
  const changeMessage = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div>
      <p>{String(isAdmin)}</p>
      <p id={id}>メッセージを入力してください</p>
	    <p><input type="text" name="name" onChange={changeMessage} /></p>
      <button onClick={onClickMessage}>メッセージ切り替え</button>
    </div>
  );
};
