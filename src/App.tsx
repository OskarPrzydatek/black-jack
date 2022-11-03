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
import * as S from './styles/App.style';
import { GlobalStyle } from './styles/GlobalStyle';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<GameState, GameActions>
  >(gameReducer, gameInitState);

  const isNotGameStatusPlay = state.gameStatus !== GameStatusEnum.Play;

  const handleNewGame = () => dispatch({ type: GameActionsEnum.NEW_GAME });

  const handleTakingCard = () => dispatch({ type: GameActionsEnum.GET_A_CARD });

  const handlePass = () => dispatch({ type: GameActionsEnum.PASS });

  return (
    <>
      <S.Main>
        <Header title="Black Jack" />

        <S.GameTabel>
          <CardList dataTestID="player-cards-stack">
            {state.playerStack.map(({ kind, color }) => (
              <CardBox key={`${kind}-${color}`} color={color} kind={kind} />
            ))}
          </CardList>

          <S.GameButtons>
            <Button
              dataTestID="take-card-button"
              isDisabled={isNotGameStatusPlay}
              label="Take Card"
              onClick={handleTakingCard}
            />
            <Button
              dataTestID="pass-button"
              isDisabled={isNotGameStatusPlay}
              label="Pass"
              onClick={handlePass}
            />
          </S.GameButtons>
        </S.GameTabel>

        <Text>Score: {state.gameScore}</Text>

        <Modal
          dataTestID="game-result-modal"
          gameScore={state.gameScore}
          gameStatus={state.gameStatus}
          handleNewGame={handleNewGame}
          newGameButtonTestID="new-game-button"
          resultMessageTestID="game-result-message"
        />
      </S.Main>
      <GlobalStyle />
    </>
  );
};

export default App;
