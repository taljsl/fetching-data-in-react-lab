import { useState } from "react";

const StarshipSearch = ({ handleSearch }) => {
  const [targetShip, setTargetShip] = useState("");
  const handleSubmit = (event) => {
    console.log(targetShip)
    event.preventDefault();
    handleSearch(targetShip);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Search: <input type="text" value={targetShip} onChange={(event) => setTargetShip(event.target.value)}/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default StarshipSearch;
