import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import Recipy from './components/Recipy/Recipy'

function App() {

  const [results, setResults] = useState(null);

  return (
    <div>
      <NavBar/>
      <Search setResults={setResults}/>
      <Recipy results={results} />
    </div>
  );
}

export default App;
