import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import {getRecipies} from '../../services/recepypuppyCall';
import './search.css';


function Search({recipes, setRecipes, setLoading}) {

  const [searchInput, setSearchInput] = useState(null);

  const setInputs = (event) => {
    event.preventDefault(); 
    setSearchInput(event.target.value);
  };

  const callingApi = async function (inputs) {
    setLoading(true)
    let res = await getRecipies(inputs);
    setLoading(false)
    res? setRecipes(res.results) : setRecipes(recipes);
  }

  return(
    <div className="search">
      <TextField 
        id="search-input" 
        label="Search" 
        variant="outlined" 
        autoComplete="off"
        data-testid="input-text"
        helperText="Search at least 3 characters"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon data-testid="icon" onClick={() => callingApi(searchInput)}/>
            </InputAdornment>
          ),
        }}
        onChange = {event => setInputs(event)}
        onKeyDown={(event) => {event.keyCode===13 && callingApi(searchInput)}} 
        >        
      </TextField>
    </div>
  )
}

export default Search;