import { createContext, useContext, useEffect, useState } from "react";
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
  const [authenticationState, setAuthenticationState] = useState("");
  const [category, setCategory] = useState("smartphones");
  const [cartProduct, setCartProduct] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  // Login function
  async function Login(email, password) {
    try {
      await account.createEmailSession(email, password);
      setUser(await account.get());
      // console.log("Login");
      setAuthenticationState("Login");
      navigate("/");
    } catch (error) {
      setAuthenticationState("Please use correct Email and password");
    }
  }

  // SignUp
  async function Signup(email, password, name) {
    try {
      await account.create(ID.unique(), email, password, name);
      // console.log("SignUp");
      setAuthenticationState("SignUp");
      navigate("/login");
    } catch (error) {
      setAuthenticationState("Failed to SignUp");
    }
  }

  // Logout function

  async function Logout() {
    await account.deleteSession("current");
    // console.log("Logout");
    setAuthenticationState("Logout");
    setUser(null);
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
      setAuthenticationState("Login");
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <userContext.Provider
      value={{
        current: user,
        Login,
        Logout,
        Signup,
        category,
        setCategory,
        cartProduct,
        setCartProduct,
        wishlistItems,
        setWishlistItems,
        authenticationState,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
