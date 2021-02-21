import React , { useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';
import NewPetModal from './NewPetModal'
import EditPetModal from './EditPetModal'
import { listPets , createPet , updatePet , deletePet } from './api';
import './index.css';

//dialog
// X state
// api call

const App = () =>{
   const [name , setName] = useState('')
   const [kind , setKind] = useState('')
  const[pets , setPets] = useState([]);
  const [isNewPetOpen , setNewPetOpen] = useState(false)
  const [currentPet , setCurrentPet] = useState(null)
  const[isLoading , setLoading] = useState(false)

  useEffect(() => {
  //  async function getData() {
     setLoading(true);
  //    try {
  //   const res = await fetch(
  //     'http://localhost:3001/pets'
  //     );
  //     const pets = await res.json();
  //     setPets(pets);
  //     setLoading(false);
  //   } catch(e) {
  //     setLoading(false);
  //   }
  // }
  // getData();
// it will wait till that fetch return
  listPets()
 .then(pets => setPets(pets))
 .finally( () => setLoading(false))
  },[])
  
  const addPet = async (pet) =>{
    return createPet(pet)
    .then(newPet => {
      setPets([
       ...pets ,
       newPet 
      ])
      setNewPetOpen(false)
    });
      };

const savePet = async pet => {
    return updatePet(pet).then(updatedPet =>{
      setPets(pets => 
      pets.map(pet =>
       pet.id === updatedPet.id ? updatedPet : pet
        )  
        )
        setCurrentPet(null)
    })
}

 const removePet = byePet =>{
  const result = window.confirm(`Are you sure you want to adopt ${byePet.name} ?`)
  if(result){
    deletePet(byePet).then(()=>{
      setPets(pets => 
       pets.filter(pet => pet.id !== byePet.id)
        )
    })
  }
 }

  return (
    <main>
    <h1>Adopt-a-Pet</h1>
    {isLoading ? (
      <div className="loading">Loading ...</div>
    ) : (
      <>
    <ul className="img-container">
    {pets.map(pet => (
      <li key={pet.id}>
      <Pet pet = {pet} 
      onRemove = {() => removePet(pet) }
      onEdit={() => setCurrentPet(pet)}
      />
      </li>
    ))}
    </ul>
    <button className="add-a-pet" onClick = {() => setNewPetOpen(true)}> Add a pet </button>
    </>
    )}
  { isNewPetOpen && (<NewPetModal 
   onCancel = {() => setNewPetOpen(false)}
   onSave = {addPet}
    /> )}
    { currentPet && (
      <EditPetModal 
      pet = {currentPet}
      onCancel = {() => setCurrentPet(null)}
      onSave={savePet} />
    )}
    </main>
  )
}

ReactDOM.render(
   <App />,
  document.getElementById('root')
);

