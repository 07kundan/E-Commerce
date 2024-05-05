import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { UserProvider, useUser } from "./store/contextApis";
import { useEffect, useState } from "react";
import PopUp from "./Components/PopUp";
import Wishlist from "./Components/MenuListComponents/Wishlist";
import AllCategoriesList from "./Components/Home/HomeComponents/AllCategoriesList";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#a2b5e8] via-[#426ee8] via-70% to-[#3365f1] h-screen fixed top-0 w-full -z-50 "></div>

      <UserProvider>
        <Wrapper>
          <PopUp />
          <NavBar />
          <Outlet />
        </Wrapper>
      </UserProvider>
    </>
  );
}

function Wrapper({ children }) {
  const { handleScroll } = useUser();
  return (
    <div
      onScroll={handleScroll}
      className="text-[#edef51] min-h-screen overflow-auto overflow-x-hidden scroll-smooth"
    >
      {children}
    </div>
  );
}

export default App;
