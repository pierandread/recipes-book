import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';



function Search() {

  const [searchInput, setSearchInput] = useState(null);

  return(
    <div>
      <TextField 
        id="search-input" 
        label="Search" 
        variant="outlined" 
        autocomplete="off"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        >
        
      </TextField>
    </div>
  )
}

export default Search;