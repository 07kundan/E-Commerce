import { Outlet } from "react-router-dom";
import NavBar from "./Components/Home/NavBar";
import { UserProvider, useUser } from "./store/contextApis";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    setIsNavbarActive(false);
    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (currentScrollPos >= scrollValue && !isNavbarActive) {
      setIsNavbarHidden(true);
    } else {
      // setIsNavbarActive(false);
      setIsNavbarHidden(false);
    }
    setScrollValue(currentScrollPos);
  };

  // Add event listener for scrolling when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (!isNavbarActive) {
      const interval = setTimeout(() => {
        setIsNavbarHidden(true);
      }, 4000);
      return () => clearInterval(interval);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollValue, isNavbarActive]);

  return (
    <>
      <div className="bg-gradient-to-b from-[#a2b5e8] via-[#426ee8] via-70% to-[#3365f1] h-screen fixed top-0 w-full -z-50 "></div>
      <div
        onScroll={handleScroll}
        className="text-[#edef51] min-h-screen overflow-auto overflow-x-hidden scroll-smooth"
      >
        <UserProvider>
          <NavBar ishidden={isNavbarHidden} setIsActive={setIsNavbarActive} />
          <Outlet />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
