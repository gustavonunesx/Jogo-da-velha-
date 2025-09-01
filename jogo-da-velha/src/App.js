import './App.css';
import { useState } from 'react';

function Square({ valor, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {valor}
    </button>
  );
}

// Mova a função Board para ser o componente padrão exportado no final
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState(true);

  function handleClick(i) {
    // Impede o clique se o quadrado já estiver preenchido OU se o jogo já tiver um vencedor
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsNext(!xIsNext);
  }

  // ---- LÓGICA DE VITÓRIA ----
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Vencedor: " + winner + " 🏆"; // Exibe o vencedor
  } else {
    status = "Próximo jogador: " + (xIsNext ? "X" : "O"); // Exibe de quem é a vez
  }
  // -------------------------

  return (
    // Usamos <> (Fragment) para agrupar os elementos
    <>
      {/* Adicionamos um div para exibir o status do jogo */}
      <div className="status">{status}</div>
      
      <div className="board-row">
        <Square valor={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square valor={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square valor={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square valor={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square valor={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square valor={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square valor={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square valor={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square valor={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// ---- FUNÇÃO AUXILIAR PARA CALCULAR O VENCEDOR ----
function calculateWinner(squares) {
  // Lista com todas as combinações de vitória possíveis
  const lines = [
    [0, 1, 2], // Linha 1
    [3, 4, 5], // Linha 2
    [6, 7, 8], // Linha 3
    [0, 3, 6], // Coluna 1
    [1, 4, 7], // Coluna 2
    [2, 5, 8], // Coluna 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
  ];

  // Itera sobre cada combinação de vitória
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // Verifica se os 3 quadrados da combinação são do mesmo jogador ('X' ou 'O')
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Retorna 'X' ou 'O'
    }
  }
  return null; // Retorna null se não houver vencedor
}

export default Board;