import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {

  let pokemonFrontImage = props.pokeObj.sprites.front
  let pokemonBackImage = props.pokeObj.sprites.back

  const [image, setImage]= useState(pokemonFrontImage)

  // MARIA QUESTION SAM ON WHY I NEED TO INCLUDE THE === pokemonfrontimage
  function changeImage() {
    return (image === pokemonFrontImage ? pokemonBackImage : pokemonFrontImage)
  }


  return (
    <Card>
      <div onClick={ () => 
        setImage(changeImage)
        }>
        <div className="image">
          <img src={image} alt={props.pokeObj.name}/>
        </div>
        <div className="content">
          <div className="header">{props.pokeObj.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.pokeObj.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
