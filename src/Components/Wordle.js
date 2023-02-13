import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./grid";
import Modal from "./Modal";
const Wordle = ({ solution }) => {
  const { handlekeys ,currentGuess,guesses,isCorrect,turn} = useWordle(solution);
  const [showModal ,setshowModal] = useState(false);
  useEffect(() => {
    document.addEventListener("keyup", handlekeys);
    if(isCorrect){
      setshowModal(true);
      document.removeEventListener("keyup",handlekeys);
    }
    if(turn >5 ){
      setshowModal(true);
      document.removeEventListener("keyup",handlekeys);
    }
    return () => {
      document.removeEventListener("keyup", handlekeys);
    };
  }, [handlekeys]);

  useEffect(()=>{
    console.log(guesses,isCorrect,turn);
  },[guesses,isCorrect,turn]);
  return (
    <>
      <p>Solution is : {solution.word}</p>

      <p>Current Guess is :{currentGuess}</p>
      <Grid guesses ={guesses}  turn={turn}  currentGuess={currentGuess}/>

     {showModal && (<Modal isCorrect={isCorrect} solution={solution.word} turn ={turn}/> )}
    </>
  );
}; 

export default Wordle;

 


