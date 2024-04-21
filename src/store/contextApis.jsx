import { createContext, useContext, useState } from "react";

const userContext = createContext();

export function useUser() {
  return useContext(userContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  // Login function
  async function Login() {
    console.log("login");
  }

  // Logout function
  async function Logout() {
    console.log("logout");
  }

  // SignUp
  async function Signup() {
    console.log("signup");
  }

  return (
    <userContext.Provider value={{ current: user, Login, Logout, Signup }}>
      {props.children}
    </userContext.Provider>
  );
}
