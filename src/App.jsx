// src/App.jsx
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const BASE_URL = `https://swapi.dev/api/starships`;

  // StateVars
  const [starships, setStarships] = useState([]);
  const [search, setSearch] = useState("");
  const[allStarships, setAllStarships]  = useState([])

  const defaultList = async () => {
    let response = await fetch(BASE_URL);
    let JSONdata = await response.json();
    setStarships(JSONdata.results);
    setAllStarships(JSONdata.results)
  };
  // handlefunctions
  const handleSearch = (targetShip) => {
    setSearch(targetShip);
    if (targetShip.trim() === "") {
      setStarships(defaultList);
    } else {
      const filteredShip = allStarships.filter((starship) =>
        starship.name.toLowerCase().includes(targetShip.toLowerCase())
      );
      setStarships(filteredShip);
    }
  };

  // load the results once
  useEffect(() => {
    defaultList();
  }, []);
  // Displayblock
  return (
    <>
      <StarshipSearch handleSearch={handleSearch} />
      <h1>Look at All These Ships</h1>
      <StarshipList starships={starships} />
    </>
  );
};

export default App;
