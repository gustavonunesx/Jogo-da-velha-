import './App.css';
import { useState } from 'react'; 

function Square({ valor, onSquareClick }) { 
  return (
    <button className="square" onClick={onSquareClick}> 
      {valor}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState(true); 
  
  function handleClick(i) { 
    if(squares[i]){ // se squares[i] for null nao executa return
      return;
    }

    const nextSquares = squares.slice(); 

    if(xIsNext){
      nextSquares[i] = "X";
    }else{
    nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsNext(!xIsNext);
  }

  return (
    <div> 
      <div>
        <Square valor={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square valor={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square valor={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square valor={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square valor={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square valor={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square valor={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square valor={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square valor={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
