import React from "react"
import lista from "./cards.js"
import PortFolio from "./PortFolio.jsx";
import cardStyle from "./PortFolio.module.css";

function Card() {
  return(
    <div className={cardStyle.cardContainer}>
      {
        lista?.map((data, index)=> {
         let {name, image, summary, list} = data
         return (
          <PortFolio
            key={index}
            name={name}
            image={image}
            summary={summary}
            list={list}
          />

        )})
      }
    </div>
  )
}

export default Card;
      
      