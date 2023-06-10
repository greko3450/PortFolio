import React from "react";
import portStyle from "./PortFolio.module.css";
function PortFolio(props) {
  let {name, image, summary} = props;
  return(
    <div className={portStyle.portContainer}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{summary}</p>
      {/* {list.map((l, index) =>  {return(<div key={index}><h3 >{l}</h3></div>)})} */}
   
    </div>
  )
}

export default PortFolio;

