import React, { useEffect, useState } from "react"
import Loader from "./components/LoadingMask";
import axios from "axios";
import Laptop from "./components/Laptop";

const App = () => {

 const [isLoading, setisLoading] = useState(true);
 const [laptops, setLaptops] = useState([]);

 const [inputValue, setInputValue] = useState("");

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

  const sort = () =>{

  }

  return (
    <div>
      <h1>Laptops</h1>
      <header>
      <button onClick={sort}>Sort</button><br></br>
        <input 
        type="text" 
        value ={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
      </header>
      {isLoading && <Loader />}
      {laptops.map(laptop => <Laptop laptop={laptop}/>)}
    </div>
  )
}

export default App
