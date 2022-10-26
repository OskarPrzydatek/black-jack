import { GameActionsEnum } from '../constants/gameActions.enum';
import { GameStatusEnum } from '../constants/gameStatus.enum';

import { Card } from './card.model';

type GameActionsType = GameActionsEnum;

export interface GameState {
  gameDeck: Card[];
  playerStack: Card[];
  gameScore: number;
  gameStatus: GameStatusEnum;
}

export interface GameActions {
  type: GameActionsType;
}
