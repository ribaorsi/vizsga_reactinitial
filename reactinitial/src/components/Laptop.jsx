import React from "react";
import { useState } from "react";

const Laptop = ({laptop}) => {
  const [isShown, setIsShown] = useState(true);
  const toggle= () => {
    if(isShown===true) {setIsShown(false)}
  }
    return (
      <div>
        <p>{laptop.name}</p>
        {isShown && <p>{laptop.brand}</p> && <p>{laptop.weigth}</p>}
        <button onClick={toggle}>{isShown ? "Show Less" : "Show more"}</button>
    </div>
  );
  }
  export default Laptop;