import './App.css';
import {useState} from 'react';
import words from"./data/db.json"
import Wordle from './Components/Wordle';
function App() {
  const [solution,setSolution] = useState(words[Math.floor(Math.random()*words.length)]);
  return (
    <div className="App">
      <header>
        <h1> * Wordle *</h1>
        <Wordle solution = {solution}/><br></br>
        
      </header>
    </div>
  );

}

export default App;
