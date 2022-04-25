import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

const Laptop = ({laptop}) => {
  const [isShown, setIsShown] = useState(false);
  const toggle= () => {
    if(isShown===false) {setIsShown(true)}
  
  else {setIsShown(false)}
}
    return (
      <div>
        <p>{laptop.name}</p>
        {isShown && <p>Product: {laptop.brand} <br></br>
        Weight: {laptop.weigth}</p>}
        {<Button variant = "contained" onClick={toggle}>{isShown ? "Show Less" : "Show more"}</Button>}
    </div>
  );
  }
  export default Laptop;