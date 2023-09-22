import Card from '../Card/Card';
import React from 'react';

export default function Cards({ characters, onClose }) {
console.log(characters.location?.name);
  return (
    <div >
      {characters.map((character) => (
        <Card
          image={character.image}
          id={character.id}
          key={character.id}
          name={character.name}
          gender={character.gender}
          status={character.status}
          species={character.species}
          location={character.location?.name}
          origin={character.origin?.name}
          onClose={() => onClose(character.id)}
        />
      ))}
    </div>
  );
}
