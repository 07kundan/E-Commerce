import { Outlet } from "react-router-dom";
import NavBar from "./Components/Home/NavBar";
import { UserProvider, useUser } from "./store/contextApis";

function App() {
  return (
    <>
      <div className="bg-indigo-950 h-screen fixed top-0 w-full -z-50 "></div>
      <div className="text-[#E2DFD0] bg-[#32012F]">
        <UserProvider>
          <NavBar />
          <Outlet />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
