import React from 'react';
import GameContext from './GameContext';

function Provider({children}) {
  const initialState = {
    activePlayer: 1,
    gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  return (
    <GameContext.Provider value={initialState}>
      {children}
    </GameContext.Provider>
  );
}

export default Provider;
