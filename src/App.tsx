import React from 'react';

import Button from './components/Button';
import CardBox from './components/CardBox';
import CardList from './components/CardList';
import Header from './components/Header';
import Modal from './components/Modal';
import Text from './components/Text';
import { GameActionsEnum } from './constants/gameActions.enum';
import { GameStatusEnum } from './constants/gameStatus.enum';
import { GameActions, GameState } from './models/game.model';
import { gameInitState } from './reducers/gameReducer/gameInitState';
import gameReducer from './reducers/gameReducer/gameReducer';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<GameState, GameActions>
  >(gameReducer, gameInitState);

  const gameStatus = state.gameStatus as GameStatusEnum;
  const isNotGameStatusPlay = state.gameStatus !== GameStatusEnum.Play;

  const handleNewGame = () => dispatch({ type: GameActionsEnum.NEW_GAME });

  const handleTakingCard = () => dispatch({ type: GameActionsEnum.GET_A_CARD });

  const handlePass = () => dispatch({ type: GameActionsEnum.PASS });

  return (
    <main className="App">
      <Header title="Black Jack" />

      <CardList>
        {state.playerStack.map(({ kind, color }) => (
          <CardBox key={`${kind}-${color}`} color={color} kind={kind} />
        ))}
      </CardList>

      <Button
        isDisabled={isNotGameStatusPlay}
        label="Take Card"
        onClick={handleTakingCard}
      />
      <Button
        isDisabled={isNotGameStatusPlay}
        label="Pass"
        onClick={handlePass}
      />

      <Text>Score: {state.gameScore}</Text>

      <Modal
        gameScore={state.gameScore}
        gameStatus={gameStatus}
        handleNewGame={handleNewGame}
      />
    </main>
  );
};

export default App;
