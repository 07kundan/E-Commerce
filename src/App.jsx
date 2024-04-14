import { useEffect, useState } from "react";
import { fetchAllProductsData, fetchCategoryData } from "./Components/API";
import "./App.css";

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
      <h1 className="bg-slate-600">hello</h1>
    </>
  );
}

export default App;
