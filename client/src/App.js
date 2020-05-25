import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import Recipe from './components/Recipe/Recipe'

function App() {

  const [recipes, setRecipes] = useState(null);

  return (
    <div>
      <NavBar/>
      <Search setRecipes={setRecipes}/>
      <Recipe recipes={recipes} />
    </div>
  );
}

export default App;
