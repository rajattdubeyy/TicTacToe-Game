import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // Check Winner
  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }

    return null;
  };

  const winner = checkWinner();

  const isDraw =
    !winner &&
    board.every((square) => square !== null);

  const handleClick = (index) => {
    // Stop if square already filled or game finished
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="board-container">

      <h1>Tic Tac Toe</h1>

      {!winner && !isDraw && (
        <p className="status">
          Current Player:
          <strong> {isXTurn ? "X" : "O"}</strong>
        </p>
      )}

      {winner && (
        <h2 className="winner">
          🎉 Player {winner} Wins!
        </h2>
      )}

      {isDraw && (
        <h2 className="winner">
          🤝 It's a Draw!
        </h2>
      )}

      <div className="board-row">
        <Square value={board[0]} onClick={() => handleClick(0)} />
        <Square value={board[1]} onClick={() => handleClick(1)} />
        <Square value={board[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={board[3]} onClick={() => handleClick(3)} />
        <Square value={board[4]} onClick={() => handleClick(4)} />
        <Square value={board[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={board[6]} onClick={() => handleClick(6)} />
        <Square value={board[7]} onClick={() => handleClick(7)} />
        <Square value={board[8]} onClick={() => handleClick(8)} />
      </div>

      <button
        className="reset-btn"
        onClick={handleReset}
      >
        Reset Game
      </button>

    </div>
  );
};

export default Board;