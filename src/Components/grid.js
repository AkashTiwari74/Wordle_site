import Row from "./row";

const Grid = ({guesses,turn,currentGuess}) =>{
    return (
        <div className="grid">
            {
            guesses.map((guess,index)=>{
                if(index===turn){
                    return <Row currentGuess={currentGuess} key = {index}/>;
                }
            return <Row guess={guess} key={index}/>;
            })
            }
        </div>
    );
};

export default Grid;
