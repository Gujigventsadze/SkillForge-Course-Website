import { createContext, ReactNode, useContext, useState } from "react";

interface SignInContextType {
  isLoggedIn: boolean;
  authToken: string;
  signIn: () => void;
  signOut: () => void;
}

const InitialState: SignInContextType = {
  isLoggedIn: false,
  authToken: "",
  signIn: () => {},
  signOut: () => {},
};

const SignInContext = createContext<SignInContextType>(InitialState);

const SignInProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string>("");

  const signIn = () => {
    setIsLoggedIn(true);
    setAuthToken("something");
  };
  const signOut = () => {
    setIsLoggedIn(false);
    setAuthToken("");
  };

  return (
    <SignInContext.Provider value={{ isLoggedIn, authToken, signIn, signOut }}>
      {children}
    </SignInContext.Provider>
  );
};

export const useSignIn = () => useContext(SignInContext);
