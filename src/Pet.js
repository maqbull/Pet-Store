import React from 'react'

const Pet = ({pet , onEdit, onRemove}) => {
   return (
       <div className="pet">
        {pet.photo ? (
        <img className = "img"
         src = {pet.photo}
          alt="Animals" />
   ): (
     <div className="no-photo">?</div>
   )}
   <div className="kind">{pet.kind}</div>
      <button className="pet-name" onClick={onEdit}>
      {pet.name}
      </button>
      
      <button className="adopt-btn" onClick={onRemove}>
      <span role="img" aria-label = "adopt this pet">
     <img className="adopt-img" src="https://www.buttonmuseum.org/sites/default/files/CA-adopt-a-pet-button-busy-beaver-button-museum.png" alt="Adopt"/>
      </span>
      </button>
         </div>
    )
}
export default Pet