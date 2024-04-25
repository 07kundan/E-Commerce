import { createContext, useContext, useState } from "react";
import { ID } from "appwrite";
import { account } from "./AppWriteConfig";
import { useNavigate } from "react-router-dom";
const userContext = createContext();

export function useUser() {
  return useContext(userContext);
}

export function UserProvider(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // Login function
  async function Login(email, password) {
    const loggedIn = await account.createEmailSession(email, password);
    setUser(loggedIn);
    navigate("/");
    // console.log(user);
  }

  // Logout function
  async function Logout() {
    console.log("logout");
  }

  // SignUp
  async function Signup(email, password, name) {
    await account.create(ID.unique(), email, password, name);
    navigate("/login");
  }

  return (
    <userContext.Provider value={{ current: user, Login, Logout, Signup }}>
      {props.children}
    </userContext.Provider>
  );
}
