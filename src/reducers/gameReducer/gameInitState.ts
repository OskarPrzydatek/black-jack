import { GameStatusEnum } from '../../constants/gameStatus.enum';
import { deck } from '../../data/deck';
import { Card } from '../../models/card.model';
import { GameState } from '../../models/game.model';

const shuffledDeck = deck.sort(() => 0.5 - Math.random());
const firstCard = shuffledDeck[0];
const startDeck = shuffledDeck.filter(
  ({ kind, color }: Card) =>
    kind !== firstCard.kind || color !== firstCard.color
);

export const gameInitState = {
  gameDeck: startDeck,
  playerStack: [shuffledDeck[0]],
  gameScore: shuffledDeck[0].points,
  gameStatus: GameStatusEnum.Play,
} as GameState;
