import { useState } from "react";
const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  //{[letter : 'a' , color : ' ']}
  const [history, setHistory] = useState([]);
  const [isCorrect, setisCorrect] = useState(false);

  const formatGuess =() =>{
    const solutionArray = [...(solution.word)];
    const formatedArray = [...currentGuess].map((letter)=>{
        return {key:letter,color:"grey"};
    });
    //Mark characyer with green color
    formatedArray.forEach((value,index)=>{
        if(value.key === solutionArray[index]){
            value.color = "green";
            solutionArray[index]=null;
        }
    });
    //Mark character with yellow color
    formatedArray.forEach((value)=>{
        if(solutionArray.includes(value.key) && value.color !== "green"){
            value.color = "yellow";
        }
    });
    // console.log(formatedArray);
    return formatedArray;
  };

  const addNewGuess =(formattedGuess) =>{
    if(turn <= 5){
        setGuesses((prev)=>{
            const newGuesses = [...prev];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });
    }
    setTurn(turn+1);
    setHistory([...history,currentGuess]);
    if(currentGuess === solution.word){
        setisCorrect(true);
    }
    setCurrentGuess("");
  }

  const handlekeys = ({ key }) => {
    // on keypress add letters to currentguess
    //Whenever a user presses a key we need to store in the current guess , it can only be upto length 5
    // user can delete a character
    // submit upon clicking enter

    console.log(key);
    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        console.log("The word is not of 5 characters");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("The word is already used !");
        return;
      }
      if (turn > 5) {
        console.log("The no of turns are used up !");
        return;
      }
      console.log("Formatting !");
      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }
    if (key === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(currentGuess + key);
      }
    }
  };
  return { handlekeys, currentGuess , guesses ,isCorrect,turn};
  // return turn;
};
export default useWordle;

