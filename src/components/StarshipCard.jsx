

const StarshipCard = ({starship}) => {
  return (
    
      <div>
        <h2>{starship.name}</h2>
        <p>{starship.manufacturer}</p>
        <p>{starship.starship_class}</p> 
        <p>{starship.model}</p>       
      </div>
    
  )
}

export default StarshipCard
