import { CardColorType } from '../types/cardColor.type';
import { CardKindType } from '../types/cardKind.type';

export interface Card {
  kind: CardKindType;
  color: CardColorType;
  points: number;
}
