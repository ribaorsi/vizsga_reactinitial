import React from "react";
import { useState } from "react";

const Laptop = ({laptop}) => {
  const [isShown, setIsShown] = useState(false);
  const toggle= () => {
    if(isShown===false) {setIsShown(true)}
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