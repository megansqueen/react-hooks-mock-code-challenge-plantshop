import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ setPlants, plants }) {

  function handleSearch(search) {
    const searchedArray = plants.filter((plant) => {
      if(plant.name.toLowerCase().includes(search.toLowerCase())) {
        return plant
      }
    })
    setPlants(searchedArray)
  }

  return (
    <main>
      <NewPlantForm plants={plants}setPlants={setPlants}/>
      <Search onSearch={handleSearch}/>
          <PlantList 
              plants={plants}
              setPlants={setPlants}
            />
    </main>
  );
}

export default PlantPage;
