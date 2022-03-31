import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
  const { children } = props;

  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState("hello");

  // ContextオブジェクトとしてisAdminとsetIsAdminを設定(オブジェクトの省略記法)
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin, message, setMessage }}>
      {children}
    </AdminFlagContext.Provider>
  );
};
