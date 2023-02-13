const Row =({guess,currentGuess}) =>{
    if(guess){
        return (
            <div className="row past">
                {
                    guess.map((letter,index)=>{
                        return(
                        <div className={letter.color} key={index}>{letter.key}</div>
                        );
                    })
                }
            </div>
        );
    }
    if(currentGuess){
        const chars =[...currentGuess];
        return(
            <div className="row current">
                {chars.map((char)=>{
                   return <div className="filled">{char}</div>
                })}
                {
                    [...Array(5-chars.length)].map(()=>{
                       return<div></div> 
                    })
                }
            </div>
        );
    }
    return (
    <div className="row">
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
    </div>
    );
}
export default Row;



