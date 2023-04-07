import React from "react";
import PlantCard from "./PlantCard";

function PlantList({
  plants
}) {


  return (
    <ul className="cards">
      {plants.map((plant) => (
      <PlantCard 
          plants={plants}
          key={plant.id}
          id={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;
