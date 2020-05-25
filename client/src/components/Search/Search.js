import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import getRecipies from '../../services/recepypuppyCall';



function Search() {

  const [searchInput, setSearchInput] = useState(null);

  const setInputs = (event) => {
    event.preventDefault(); 
    setSearchInput(event.target.value);
  }

  return(
    <div>
      <TextField 
        id="search-input" 
        label="Search" 
        variant="outlined" 
        autoComplete="off"
        helperText="Search at least 3 characters"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange = {event => setInputs(event)}
        onKeyDown={(e) => {e.keyCode===13 && getRecipies(searchInput)}} 
        >
        
      </TextField>
    </div>
  )
}

export default Search;