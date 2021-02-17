import React, { useState } from 'react';
import GameBoard from './GameBoard';

function TicTacToe() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const updateState = (cellClicked) => {
    const newGameBoard = [...gameBoard];
    let newActivePlayer = activePlayer;
  
    if (gameBoard[cellClicked] === 0) {
      newGameBoard[cellClicked] = activePlayer;
      newActivePlayer = activePlayer === 1 ? 2 : 1;
    } else newGameBoard[cellClicked] = gameBoard[cellClicked];
  
    setActivePlayer(newActivePlayer);
    setGameBoard(newGameBoard);
  };

  const victoryArchieved = () => {
    return (
      victoryArchivedInLine(gameBoard)
      || victoryArchivedInColumn(gameBoard)
      || victoryArchivedInDiagonals(gameBoard)
    );
  };

  const renderButton = () => {
    return (
      <button
        type="button"
        onClick={() => {
          setActivePlayer(1);
          setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  };

  const victoryArchivedInLine = (gameBoard) => {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gameBoard[i] === gameBoard[i + 1]
        && gameBoard[i + 1] === gameBoard[i + 2]
        && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  };

  const victoryArchivedInColumn = (gameBoard) => {
    for (let i = 0; i <= 2; i += 1) {
      if (
        gameBoard[i] === gameBoard[i + 3]
        && gameBoard[i + 3] === gameBoard[i + 6]
        && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  };

  const victoryArchivedInDiagonals = (gameBoard) => {
    if (gameBoard[4] === 0) return false;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      return gameBoard[0];
    }
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      return gameBoard[2];
    }
    return false;
  };

  const win = victoryArchieved();

  if (!gameBoard.includes(0) && !win) {
    return (
      <div>
        {renderButton()}
        <h1>Empate</h1>
      </div>
    );
  } else {
    return (
      <div>
        {renderButton()}
        {(!win)
          ? (
            <GameBoard
              updateGame={updateState}
              gameState={gameBoard}
            />
          )
          : <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>}
      </div>
    );
  };
}

export default TicTacToe;

// Não conseguia utilizar o hook useContext como pretendia e acabei no final usando o useState como
// foi feito no gabarito.