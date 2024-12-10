import React from 'react'
import StarshipCard from './StarshipCard'
const StarshipList = ({starships}) => {
    // console.log(starships)
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap: 'wrap'}}>
      
        {starships.map((starship) => (
          <div key = {starship.name}>
                <StarshipCard starship={starship}/>
          </div>
        
            ))}
      
    </div>
  )
}

export default StarshipList
