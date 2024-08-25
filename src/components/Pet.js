import React from 'react';

function Pet({ pet, onAdoptPet }) {
  const { id, name, type, age, weight, gender, isAdopted } = pet;

  const handleAdoptClick = () => {
    onAdoptPet(id);
  };

  return (
    <div className="card">
      <div className="content">
        <div className="header">{name}</div>
        <div className="meta">
          {type} - {gender === 'male' ? '♂' : '♀'}
        </div>
        <div className="description">
          Age: {age} Weight: {weight}
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdoptClick}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
