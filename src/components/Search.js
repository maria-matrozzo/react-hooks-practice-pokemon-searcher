import React, {useState} from "react";



function Search(props) {

  const [inSearchBar, setInSearchBar] = useState ('')
  console.log(inSearchBar)

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt" 
        placeholder="Search for Pokemon" 
        value={inSearchBar}
        onChange={ (synthEvent) => {
          console.log('...typing')
          props.goingUp(synthEvent.target.value) //sending the search bar value up to Pokemon Page
          setInSearchBar(synthEvent.target.value) //updating the search bar
         
        }}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
