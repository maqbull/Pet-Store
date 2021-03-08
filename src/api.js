const handleErrors = res => {
    if(!res.ok){
        return res.json().then(error => {
            throw error;
        });
    }
    return res;
}
export const listPets = () =>{
  return fetch('https://rocky-hamlet-86164.herokuapp.com/pets').then(
      res => res.json())
}

export const createPet = (pet) =>{
return fetch('https://rocky-hamlet-86164.herokuapp.com/pets',{
  method: 'POST', 
  headers: {
     'Content-Type': 'application/json' 
  },
  body : JSON.stringify(pet)
})
 .then(handleErrors)
 .then(res => res.json())
};


export const updatePet = (pet) =>{
return fetch(`https://rocky-hamlet-86164.herokuapp.com/pets/${pet.id}`,{
  method: 'PUT', 
  headers: {
     'Content-Type': 'application/json' 
  },
  body : JSON.stringify(pet)
})
 .then(handleErrors)
 .then(res => res.json())
}


export const deletePet = pet =>{
return fetch(`https://rocky-hamlet-86164.herokuapp.com/pets/${pet.id}`,{
  method: 'DELETE', 
  
})
 .then(handleErrors)
 .then(res => res.json())
}