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
  const [category, setCategory] = useState("smartphones");
  const [cartProduct, setCartProduct] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10,
      image:
        "https://naturali.co.in/cdn/shop/files/Artboard1_098b3e41-330b-439c-aa43-cea296ec8dfc.jpg?v=1710743204",
      rating: 5,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      image:
        "https://naturali.co.in/cdn/shop/files/Artboard1_098b3e41-330b-439c-aa43-cea296ec8dfc.jpg?v=1710743204",
      rating: 4.2,
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      image:
        "https://naturali.co.in/cdn/shop/files/Artboard1_098b3e41-330b-439c-aa43-cea296ec8dfc.jpg?v=1710743204",
      rating: 4.7,
      quantity: 1,
    },
  ]);

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
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
