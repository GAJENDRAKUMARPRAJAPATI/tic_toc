
import { useState } from "react";
import Square from "./Square";

export default function Board()
{   
    const[state, setState] =useState(Array(9).fill(null));
    const[XTurn, setXTurn] = useState(true);

    var checkWinner = () =>{
        var winnerLogic = [
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
            var [A,B,C] = logic; 
            if(state[A]!==null && state[A]=== state[B] && state[A]=== state[C]){
                return true;
            }
        }
        return false;
    };

    var Winner = checkWinner();
    
     console.log("state", state);
    var  hanhleClick = (index) => {
        var copyState =[...state];
        copyState [index] = XTurn ? "X" :"O";
        setState(copyState);
        setXTurn(!XTurn)
        
    }

    var handleReset = ()=>{
        setState(Array(9).fill(null));
    }
    return(
        <div className="board-container">
            {Winner ? (
            <> won the Game
               <buuton className="btn btn-dark ms-3" onClick={handleReset}>Play Again</buuton>
            </>
            ) : (
            <>
                <div className="board-row">
                    <Square onClick={()=> hanhleClick(0) } value={state[0]} />
                    <Square onClick={()=> hanhleClick(1)  } value={state[1]} />
                    <Square onClick={()=> hanhleClick(2) } value={state[2]} />
                </div>
                <div className="board-row">
                    <Square onClick={()=> hanhleClick(3) } value={state[3]} />
                    <Square onClick={()=> hanhleClick(4) } value={state[4]} />
                    <Square  onClick={()=> hanhleClick(5) } value={state[5]} />
                </div>
                <div className="board-row">
                    <Square onClick={()=> hanhleClick(6) } value={state[6]} />
                    <Square onClick={()=> hanhleClick(7) } value={state[7]} />
                    <Square onClick={()=> hanhleClick(8) } value={state[8]} />
                </div>
            </>
             )} 
        </div>

    
    )
}