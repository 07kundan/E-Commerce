import { useEffect, useState } from "react";
import { fetchAllProductsData, fetchCategoryData } from "./Components/API";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/Home/NavBar";

function App() {
  const [category, setCategory] = useState("smartphones");

  useEffect(() => {
    try {
      const responseData = fetchAllProductsData();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }

    try {
      const responseData = fetchCategoryData(category);
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="bg-[#393E46] h-screen absolute top-0 w-full -z-50"></div>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
