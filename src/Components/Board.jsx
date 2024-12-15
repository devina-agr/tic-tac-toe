import React, {useState} from "react";
import Squares from "./Squares";


const Board=()=>{

     const [state, setState]= useState(Array(9).fill(null));
     const [isXTurn, setIsXTurn]= useState(true);

     const checkWinner=()=>{

         const winnerLogic=[
             [0,1,2],
             [3,4,5],
             [6,7,8],
             [0,3,6],
             [1,4,7],
             [2,5,8],
             [0,4,8],
             [2,4,6]
         ];
       for(let logic of winnerLogic){
           const[a,b,c]=logic;
           if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
               return state[a];
           }
       }
       return false;

     };

    const isWinner= checkWinner();

    const handleClick=(index)=>{
       const copyState=[...state];
       if(!copyState[index]) {
           if (isXTurn) {
               copyState[index] = "X";
           } else {
               copyState[index] = "O";
           }
       }
        setState(copyState);
       setIsXTurn(!isXTurn);
    };
    const handleReset=()=>{
      setState(Array(9).fill(null));
    };
    return(
        <div>
         <div className="box">
            {isWinner? <div className="win">
                          <h2 >{isWinner} Won the game!</h2>
                          <button onClick={()=>handleReset()}>Play again</button>
                       </div>:
                <div>
                    <div className="row">
                        <Squares onClick={()=> handleClick(0)} value={state[0]} />
                        <Squares onClick={()=> handleClick(1)} value={state[1]}/>
                        <Squares onClick={()=> handleClick(2)} value={state[2]}/>
                     </div>
                    <div className="row">
                        <Squares onClick={()=> handleClick(3)} value={state[3]}/>
                        <Squares onClick={()=> handleClick(4)} value={state[4]}/>
                        <Squares onClick={()=> handleClick(5)} value={state[5]}/>
                      </div>
                    <div className="row">
                        <Squares onClick={()=> handleClick(6)} value={state[6]}/>
                        <Squares onClick={()=> handleClick(7)} value={state[7]}/>
                        <Squares onClick={()=> handleClick(8)} value={state[8]}/>
                    </div>
                </div>
            }
         </div>
            <button className="reset" onClick={()=>handleReset()}>Reset</button>
        </div>
    );
};
export default Board;
