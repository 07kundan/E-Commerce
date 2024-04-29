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
  const [category, setCategory] = useState("smartphones");
  const [cartProduct, setCartProduct] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Login function
  async function Login(email, password) {
    await account.createEmailSession(email, password);
    setUser(await account.get());
    navigate("/");
    console.log(user);
  }

  // SignUp
  async function Signup(email, password, name) {
    await account.create(ID.unique(), email, password, name);
    navigate("/login");
  }

  // Logout function

  async function Logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
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
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
