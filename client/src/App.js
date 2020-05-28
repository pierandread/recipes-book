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
      //md only value changed, previously 900, if 900 is good you can delete all the theme and ThemeProvider
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {

  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <NavBar/>
      <Search recipes={recipes} setRecipes={setRecipes} setLoading={setLoading}/>
      <ThemeProvider theme={theme}>
       <Recipes recipes={recipes} loading={loading}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
