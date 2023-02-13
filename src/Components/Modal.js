const Modal =({isCorrect , solution , turn}) =>{
    if(isCorrect){
        return (
            <div className="modal">
                <div className="modal2">
                <h1>Hurray ! You won :) </h1>
                <p className="solution">{solution}</p>
                <p><b>You Won in {turn} guess</b> </p>
                </div>
            </div>
        );
    }
    return(
    <div className="modal">
        <div className="modal2">
        <h1>Nevermind !</h1>
        <p className="solution">{solution}</p>
        <p>Better Luck next time :-| </ p>
        </div>
    </div>
    );
};

export default Modal;
