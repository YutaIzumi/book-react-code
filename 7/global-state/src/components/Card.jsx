import { useContext } from "react";
import { EditButton } from "./EditButton";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#e9dbd0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

// シンプルになった!
export const Card = () => {
    // Context内のisAdminと更新関数を取得
    const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
    // 切り替え押下時
    const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <>
      <p>{isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}</p>
      <button onClick={onClickSwitch}>切り替え</button>
      <div style={style}>
        <p>山田太郎</p>
        <EditButton />
      </div>
    </>
  );
};
