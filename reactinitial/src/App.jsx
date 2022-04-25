import React, { useEffect, useState } from "react"
import Loader from "./components/LoadingMask";
import axios from "axios";
import Laptop from "./components/Laptop";
import { TextField, Button } from "@mui/material";


const App = () => {

 const [isLoading, setisLoading] = useState(true);
 const [laptops, setLaptops] = useState([]);

 const [inputValue, setInputValue] = useState("");
 const [isLowest, setIsLowest] = useState(true);

  const load = () => {
    setisLoading(true);
    axios.get("https://demoapi.com/api/laptop")
    .then((response) => {
      setLaptops(response.data);
      setisLoading(true);
    });
  }

    useEffect(()=> {
      load();    
    },[]);

    const sort = () =>{
      if (isLowest) {
      let newSort = laptops.sort((a,b) => (a.weigth > b.weigth ? 1 : -1));
      setLaptops (newSort);
      setIsLowest(false);
      }
      else {
      let newSort = laptops.sort((a,b) => (b.weigth > a.weigth ? 1 : -1));
      setLaptops (newSort);
      setIsLowest(true);
      }
    };
  

  return (
    <div>
      <h1>Laptops</h1>
      <header>
      <Button variant ="contained" onClick={sort}>Sort </Button><br></br>
        <TextField 
        type="text" 
        value ={inputValue}
        onChange={(e) => {setInputValue(e.target.value)}} />
      </header>
      {isLoading && <Loader />}
      {laptops
      .filter((data) => data.name.slice(0, inputValue.length).toLowerCase() === inputValue.toLowerCase())
      .map((data,i) => 
      <div key = {i}>
        <Laptop key={i} laptop={data}/>
      </div>)}
    </div>
  )
}

export default App
