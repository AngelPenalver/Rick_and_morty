    import Card from './Card'
    import React from 'react';
    import characters from '../data';
    export default function Cards(props) {
      // const namesAndImages = characters.map(({name, image}) => ({name, image}))
      // const {name,status,species,gender,origin,image,onClose} = props;
      return (
        <div className="container">
           {characters.map(({id, name, status, species, gender, origin, image}) => (
              <Card
                 key={id}
                 name={name}
                 status={status}
                 species={species}
                 gender={gender}
                 origin={origin.name}
                 image={image}
                 onClose={() => window.alert('Emulamos que se cierra la card')}
              />
           ))}
        </div>
     );
  
    }
