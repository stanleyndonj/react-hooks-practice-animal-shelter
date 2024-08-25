import React, { useState } from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';
import data from '../db.json'; 

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: 'all' });

  const handleChangeType = (event) => {
    setFilters({ type: event.target.value });
  };

  const handleFindPetsClick = () => {
    const filteredPets = data.pets.filter(pet =>
      filters.type === 'all' || pet.type === filters.type
    );
    setPets(filteredPets);
  };

  const handleAdoptPet = (id) => {
    setPets(pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    ));
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui grid">
        <div className="four wide column">
          <Filters 
            onChangeType={handleChangeType} 
            onFindPetsClick={handleFindPetsClick} 
          />
        </div>
        <div className="twelve wide column">
          <PetBrowser 
            pets={pets} 
            onAdoptPet={handleAdoptPet} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;