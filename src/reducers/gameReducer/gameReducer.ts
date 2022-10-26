import { CardFiguresEnum } from '../../constants/cardFigures.enum';
import { GameActionsEnum } from '../../constants/gameActions.enum';
import { GameStatusEnum } from '../../constants/gameStatus.enum';
import { Card } from '../../models/card.model';
import { GameActions, GameState } from '../../models/game.model';

import { gameInitState } from './gameInitState';

export default function gameReducer(state: GameState, action: GameActions) {
  switch (action.type) {
    case GameActionsEnum.NEW_GAME: {
      return gameInitState;
    }
    case GameActionsEnum.GET_A_CARD: {
      const { gameDeck, playerStack, gameScore } = state;
      const newCardIndex = playerStack.length;
      const newCard = gameDeck[newCardIndex];
      const expectedScore = gameScore + newCard.points;
      const gamePointBorder = 21;
      const updateDeckAfterCardTake = gameDeck.filter(
        ({ kind, color }: Card) =>
          kind !== newCard.kind || color !== newCard.color
      );

      const checkIsPlayerCardAsByIndex = (index: number) =>
        playerStack[index].kind === CardFiguresEnum.As;

      const isPersianEye =
        checkIsPlayerCardAsByIndex(0) && checkIsPlayerCardAsByIndex(1);

      const handleCurrentGameStatus = () => {
        if (isPersianEye) {
          return GameStatusEnum.PersianEye;
        }

        if (expectedScore === gamePointBorder) return GameStatusEnum.Win;

        if (expectedScore > gamePointBorder) return GameStatusEnum.Lose;

        return GameStatusEnum.Play;
      };

      return {
        gameDeck: updateDeckAfterCardTake,
        playerStack: [...playerStack, newCard],
        gameScore: gameScore + newCard.points,
        gameStatus: handleCurrentGameStatus(),
      };
    }
    case GameActionsEnum.PASS: {
      return {
        ...state,
        gameStatus: GameStatusEnum.Pass,
      };
    }
    default:
      return state;
  }
}
