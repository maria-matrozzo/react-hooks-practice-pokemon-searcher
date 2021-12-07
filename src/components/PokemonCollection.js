import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection(props) {


  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
   


      {props.arrayToMap.map( (eachPokemon) => {
        return (
          <PokemonCard 
          key = {eachPokemon.id}
          pokeObj = {eachPokemon}
          />
        )
      })
      }


    </Card.Group>
  );
}

export default PokemonCollection;
