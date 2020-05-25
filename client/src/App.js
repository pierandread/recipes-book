import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import Recipes from './components/Recipes/Recipes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {

  const [recipes, setRecipes] = useState(null);

  return (
    <div>
      <NavBar/>
      <Search setRecipes={setRecipes}/>
      <ThemeProvider theme={theme}>
       <Recipes recipes={recipes} />
      </ThemeProvider>
    </div>
  );
}

export default App;
