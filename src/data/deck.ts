import { Card } from '../models/card.model';

export const deck = [
  // 9
  { kind: 9, color: 'Hearts', points: 0 },
  { kind: 9, color: 'Tiles', points: 0 },
  { kind: 9, color: 'Clovers', points: 0 },
  { kind: 9, color: 'Pikers', points: 0 },

  // 10
  { kind: 10, color: 'Hearts', points: 10 },
  { kind: 10, color: 'Tiles', points: 10 },
  { kind: 10, color: 'Clovers', points: 10 },
  { kind: 10, color: 'Pikers', points: 10 },

  // Jack
  { kind: 'Jack', color: 'Hearts', points: 2 },
  { kind: 'Jack', color: 'Tiles', points: 2 },
  { kind: 'Jack', color: 'Clovers', points: 2 },
  { kind: 'Jack', color: 'Pikers', points: 2 },

  // Queen
  { kind: 'Queen', color: 'Hearts', points: 3 },
  { kind: 'Queen', color: 'Tiles', points: 3 },
  { kind: 'Queen', color: 'Clovers', points: 3 },
  { kind: 'Queen', color: 'Pikers', points: 3 },

  // King
  { kind: 'King', color: 'Hearts', points: 4 },
  { kind: 'King', color: 'Tiles', points: 4 },
  { kind: 'King', color: 'Clovers', points: 4 },
  { kind: 'King', color: 'Pikers', points: 4 },

  // Ass
  { kind: 'As', color: 'Hearts', points: 11 },
  { kind: 'As', color: 'Tiles', points: 11 },
  { kind: 'As', color: 'Clovers', points: 11 },
  { kind: 'As', color: 'Pikers', points: 11 },
] as Card[];
