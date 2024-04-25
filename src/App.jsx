import { useEffect, useState } from "react";
import { fetchAllProductsData, fetchCategoryData } from "./store/API";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/Home/NavBar";
import { UserProvider, useUser } from "./store/contextApis";

function App() {
  const [category, setCategory] = useState("");
  useEffect(() => {
    try {
      const responseData = fetchAllProductsData();

      // console.log(responseData);
    } catch (error) {
      console.log(error);
    }

    try {
      const responseData = fetchCategoryData(category);
      // console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="bg-indigo-950 h-screen fixed top-0 w-full -z-50"></div>
      <UserProvider>
        <NavBar />
        <Outlet />
      </UserProvider>
    </>
  );
}

export default App;
