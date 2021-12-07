import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

const [pokemonArray, setPokemonArray] = useState( [] )

// this will be the result of filter
const [searchArray, setSearchArray] = useState( [] )


useEffect( () => {
  fetch('http://localhost:3001/pokemon')
  .then(r => r.json())
  .then((fetchedArray => {
    setPokemonArray(fetchedArray)
    setSearchArray(fetchedArray)
  }))

}, [] )

console.log(pokemonArray)


//filter for the search bar and connect to search component below
function functionForSearchBar(searchText){
  
  let searchResults = pokemonArray.filter( (eachObj) => {
    
    // returns an exact match. It's acceptable but not great.
    // return (searchText === eachObj.name) 


    // a dynamic search with .includes
    return ((eachObj.name).includes(searchText.toLowerCase()))
  })

  setSearchArray([...searchResults])

}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search 
      goingUp = {functionForSearchBar}
      />
      <br />
      <PokemonCollection 
      arrayToMap = {searchArray}
      />
    </Container>
  );
}

export default PokemonPage;
