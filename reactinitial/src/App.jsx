import React, { useEffect, useState } from "react"
import Loader from "./components/LoadingMask";
import axios from "axios";
import Laptop from "./components/Laptop";

const App = () => {

 const [isLoading, setisLoading] = useState(true);
 const [laptops, setLaptops] = useState([]);

  const load = () => {
    axios.get("https://demoapi.com/api/laptop")
    .then((response) => {
      setisLoading(false);
      setLaptops(response.data);
    });
  }
  useEffect(()=> {
    load();    
  },[]);

  return (
    <div>
      <h1>Laptops</h1>
      {isLoading && <Loader />}
      {laptops.map(laptop => <Laptop laptop={laptop}/>)}
    </div>
  )
}

export default App
