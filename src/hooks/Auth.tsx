import React, { createContext, useState, useEffect, useContext } from "react";
import { storeToken, getToken, destroyToken } from "services/storage";
import { Api } from "services/api";

interface IAuth {
  signed: boolean;
  signIn(token: string): any;
  signOut(): any;
}

const AuthContext = createContext<IAuth>({} as IAuth);

export const AuthProvider: React.FC = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null | undefined>(null);

  function signIn(token: string) {
    storeToken(token);
    setUserToken(token);
    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  function signOut() {
    destroyToken();
    setUserToken(null);
    Api.defaults.headers.common["Authorization"] = "";
  }

  async function getAndSetUserToken() {
    const token = await getToken();
    setUserToken(token);
    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  useEffect(() => {
    getAndSetUserToken();
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!userToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
