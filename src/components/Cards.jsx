import Card from './Card'
import React from 'react';

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map((character) => (
        <Card   
          image={character.image}
          id={character.id}
          key={character.id}
          name={character.name}
          onClose={() => onClose(character.id)}
        />
      ))}
    </div>
  );
}
   