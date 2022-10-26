import React from 'react';

import { GameActionsEnum } from './constants/gameActions.enum';
import { GameStatusEnum } from './constants/gameStatus.enum';
import { GameActions, GameState } from './models/game.model';
import { gameInitState } from './reducers/gameReducer/gameInitState';
import gameReducer from './reducers/gameReducer/gameReducer';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<GameState, GameActions>
  >(gameReducer, gameInitState);

  const isNotGameStatusPlay = state.gameStatus !== GameStatusEnum.Play;

  const handleNewGame = () => dispatch({ type: GameActionsEnum.NEW_GAME });

  const handleTakingCard = () => dispatch({ type: GameActionsEnum.GET_A_CARD });

  const handlePass = () => dispatch({ type: GameActionsEnum.PASS });

  return (
    <div className="App">
      <h1>Black Jack</h1>

      {/* Cards */}
      <ul>
        {state.playerStack.map(({ kind, color }) => (
          <li key={`${kind}-${color}`}>
            <span>{kind}</span>
            &nbsp;
            <span>{color}</span>
          </li>
        ))}
      </ul>

      <button disabled={isNotGameStatusPlay} onClick={handleTakingCard}>
        Take Card
      </button>
      <button disabled={isNotGameStatusPlay} onClick={handlePass}>
        Pass
      </button>

      <div>
        <p>Score: {state.gameScore}</p>
      </div>

      {state.gameStatus === GameStatusEnum.Lose && (
        <div>
          <p>Game Over</p>
          <button onClick={handleNewGame}>New Game</button>
        </div>
      )}
      {state.gameStatus === GameStatusEnum.PersianEye && (
        <div>
          <p>!!! PERSIAN EYE !!!</p>
          <button onClick={handleNewGame}>New Game</button>
        </div>
      )}
      {state.gameStatus === GameStatusEnum.Win && (
        <div>
          <p>Win with score: {state.gameScore}</p>
          <button onClick={handleNewGame}>New Game</button>
        </div>
      )}
      {state.gameStatus === GameStatusEnum.Pass && (
        <div>
          <p>End with score: {state.gameScore}</p>
          <button onClick={handleNewGame}>New Game</button>
        </div>
      )}
    </div>
  );
};

export default App;
