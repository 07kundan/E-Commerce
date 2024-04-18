import { useEffect, useState } from "react";
import { fetchAllProductsData, fetchCategoryData } from "./Components/API";
import NavBar from "./Components/Home/NavBar";
import Home from "./Components/Home/Home";

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
      <div className="bg-[#453C67] h-screen w-screen m-0 p-0 box-border">
        <Home />
      </div>
    </>
  );
}

export default App;
