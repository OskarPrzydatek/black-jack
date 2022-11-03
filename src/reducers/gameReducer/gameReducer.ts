import { CardFiguresEnum } from '../../constants/cardFigures.enum';
import { GameActionsEnum } from '../../constants/gameActions.enum';
import { GameStatusEnum } from '../../constants/gameStatus.enum';
import { deck } from '../../data/deck';
import { Card } from '../../models/card.model';
import { GameActions, GameState } from '../../models/game.model';

export default function gameReducer(state: GameState, action: GameActions) {
  switch (action.type) {
    case GameActionsEnum.NEW_GAME: {
      const shuffledDeck = deck.sort(() => 0.5 - Math.random());
      const firstCard = shuffledDeck[0];
      const startDeck = shuffledDeck.filter(
        ({ kind, color }: Card) =>
          kind !== firstCard.kind || color !== firstCard.color
      );

      return {
        gameDeck: startDeck,
        playerStack: [shuffledDeck[0]],
        gameScore: shuffledDeck[0].points,
        gameStatus: GameStatusEnum.Play,
      };
    }
    case GameActionsEnum.GET_A_CARD: {
      const gamePointBorder = 21;
      const { gameDeck, playerStack, gameScore } = state;
      const newCard = gameDeck[0];
      const updatedPalyerStack = [...playerStack, newCard];
      const expectedScore = gameScore + newCard.points;
      const updateDeckAfterCardTake = gameDeck.filter(
        ({ kind, color }: Card) =>
          kind !== newCard.kind || color !== newCard.color
      );

      const checkIsPlayerCardAsByIndex = (index: number) =>
        updatedPalyerStack[index].kind === CardFiguresEnum.As;

      const isPersianEye =
        checkIsPlayerCardAsByIndex(0) && checkIsPlayerCardAsByIndex(1);

      const handleCurrentGameStatus = () => {
        if (isPersianEye) return GameStatusEnum.PersianEye;
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
      throw new Error('Invalid game reducer action');
  }
}
