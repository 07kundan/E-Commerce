import { Outlet } from "react-router-dom";
import { UserProvider, useUser } from "./store/contextApis";
import NavBar from "./Components/Navbar/NavBar";
import PopUp from "./Components/PopUp/PopUp";
import Loader from "./Components/Loader/Loader";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#180318] via-[#460142] via-70% to-[#180318] h-screen fixed top-0 w-full -z-50 "></div>

      <UserProvider>
        <Wrapper>
          <Loader />
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
      className="text-[#2e5dde] min-h-screen overflow-auto overflow-x-hidden scroll-smooth font-ubuntu font-bold"
    >
      {children}
    </div>
  );
}

export default App;
