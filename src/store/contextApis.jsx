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
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(null);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [categoryPageActive, setCategoryPageActive] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  const [authenticationState, setAuthenticationState] = useState("");
  const [category, setCategory] = useState("smartphones");
  const [cartProduct, setCartProduct] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // User details
  const [userDetails, setUserDetails] = useState({
    Name: "",
    PhoneNo: null,
    Email: "",
    Password: "",
  });

  // Navbar funcitonality

  const handleScroll = () => {
    // console.log("called");
    setIsNavbarActive(false);
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= scrollValue && !isNavbarActive) {
      setIsNavbarHidden(true);
    } else {
      setIsNavbarHidden(false);
    }
    setScrollValue(currentScrollPos);
  };

  // Add event listener for scrolling when component mounts
  useEffect(() => {
    window.location.pathname === "/Login" ||
    window.location.pathname === "/signup" ||
    window.location.pathname === "/category"
      ? setCategoryPageActive(true)
      : setCategoryPageActive(false);
    window.addEventListener("scroll", handleScroll);

    if (categoryPageActive) {
      setIsNavbarHidden(false);
    }
    if (!isNavbarActive && !categoryPageActive) {
      const interval = setTimeout(() => {
        setIsNavbarHidden(true);
      }, 4000);
      return () => clearInterval(interval);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollValue, isNavbarActive, categoryPageActive]);
  // --------------------

  // Login function
  async function Login(email, password) {
    try {
      setLoader(true);
      await account.createEmailSession(email, password);
      setUser(await account.get());
      // console.log("Login");
      setAuthenticationState("Login");
      navigate("/");
    } catch (error) {
      setAuthenticationState("Please use correct Email and password");
    }
    setLoader(false);
  }

  // SignUp
  async function Signup(email, password, name) {
    try {
      setLoader(true);
      await account.create(ID.unique(), email, password, name);
      // console.log("SignUp");
      setAuthenticationState("SignUp");
      navigate("/login");
    } catch (error) {
      setAuthenticationState("Failed to SignUp");
    }
    setLoader(false);
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
        loader,
        setLoader,
        userDetails,
        setUserDetails,
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
        isNavbarActive,
        setIsNavbarActive,
        isNavbarHidden,
        setIsNavbarHidden,
        setCategoryPageActive,
        handleScroll,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
