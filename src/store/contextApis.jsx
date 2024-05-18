import { createContext, useContext, useEffect, useState } from "react";
import { ID } from "appwrite";
import { account, databases } from "./AppWriteConfig";
import { redirect, useNavigate } from "react-router-dom";
const userContext = createContext();

export function useUser() {
  return useContext(userContext);
}

export function UserProvider(props) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({});
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
    PhoneNo: "",
    Email: "",
    Password: "",
  });
  const [profile, setProfile] = useState({});

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

  // function to get document
  const fetchUserDocuments = async (email) => {
    try {
      const response = await databases.listDocuments(
        "6624cfd4357d94effa79",
        "66470fb100112c5dd918"
      );
      // console.log(email);
      const filtered = response.documents.filter(
        (document) => document.Email === email
      );

      // console.log(filtered);
      if (filtered.length > 0) {
        setProfile(filtered[0]);
      }
      // response.documents.forEach((document) => {
      //   if (email === document.Email) {
      //     console.log(response.documents);
      //   }

      //   // console.log("email", document.Email);
      //   // console.log(email === document.Email);
      // });

      // console.log("successful");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user && user.email) {
      // console.log("entered");
      // console.log(user);
      fetchUserDocuments(user.email);
    }
  }, [user]);

  // Login function
  async function Login(email, password) {
    try {
      setLoader(true);
      await account.createEmailSession(email, password);
      setUser(await account.get());
      // console.log("Login");
      setAuthenticationState("Login Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      setAuthenticationState("login failed");
    }
    setLoader(false);
    // console.log("login", user);
  }

  // SignUp
  async function Signup(email, password, name) {
    try {
      setLoader(true);
      await account.create(ID.unique(), email, password, name);
      // console.log("SignUp");
      setAuthenticationState("SignUp Successfully");
      navigate("/login");
    } catch (error) {
      setAuthenticationState("Failed to signup");
      console.log(error);
    }
    setLoader(false);
  }

  // Logout function

  async function Logout() {
    await account.deleteSession("current");
    // console.log("Logout");
    setAuthenticationState("Logout  Successfully");
    setUser(null);
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
      setAuthenticationState("Login Successfully");
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    setLoader(true);
    init();
    setLoader(false);
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
        setAuthenticationState,
        isNavbarActive,
        setIsNavbarActive,
        isNavbarHidden,
        setIsNavbarHidden,
        setCategoryPageActive,
        handleScroll,
        profile,
        setProfile,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
