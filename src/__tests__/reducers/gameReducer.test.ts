import { GameActionsEnum } from '../../constants/gameActions.enum';
import { GameStatusEnum } from '../../constants/gameStatus.enum';
import { GameState } from '../../models/game.model';
import gameReducer from '../../reducers/gameReducer/gameReducer';

describe('gameReducer Actions', () => {
  test('ensure NEW_GAME action works correctly', () => {
    const gameCurrentState = {
      gameDeck: [],
      playerStack: [],
      gameScore: 21,
      gameStatus: GameStatusEnum.Win,
    } as GameState;
    const newGameAction = gameReducer(gameCurrentState, {
      type: GameActionsEnum.NEW_GAME,
    });
    expect(newGameAction.gameDeck).toHaveLength(23);
    expect(newGameAction.playerStack).toHaveLength(1);
    expect(newGameAction.gameScore).toBeLessThanOrEqual(11);
    expect(newGameAction.gameStatus).toBe(GameStatusEnum.Play);
  });

  test('ensure GET_A_CARD action works correctly', () => {
    const gameCurrentState = {
      gameDeck: [
        { kind: 'Queen', color: 'Hearts', points: 3 },
        { kind: 'King', color: 'Clovers', points: 4 },
      ],
      playerStack: [{ kind: 'Jack', color: 'Hearts', points: 2 }],
      gameScore: 2,
      gameStatus: GameStatusEnum.Play,
    } as GameState;
    const getACardAction = gameReducer(gameCurrentState, {
      type: GameActionsEnum.GET_A_CARD,
    });
    expect(getACardAction).toEqual({
      gameDeck: [{ kind: 'King', color: 'Clovers', points: 4 }],
      playerStack: [
        { kind: 'Jack', color: 'Hearts', points: 2 },
        { kind: 'Queen', color: 'Hearts', points: 3 },
      ],
      gameScore: 5,
      gameStatus: GameStatusEnum.Play,
    });
  });

  test('ensure PASS action works correctly', () => {
    const gameCurrentState = {
      gameDeck: [
        { kind: 'Queen', color: 'Hearts', points: 3 },
        { kind: 'King', color: 'Clovers', points: 4 },
      ],
      playerStack: [{ kind: 'Jack', color: 'Hearts', points: 2 }],
      gameScore: 2,
      gameStatus: GameStatusEnum.Play,
    } as GameState;
    const passAction = gameReducer(gameCurrentState, {
      type: GameActionsEnum.PASS,
    });
    expect(passAction).toEqual({
      ...gameCurrentState,
      gameStatus: GameStatusEnum.Pass,
    });
  });

  test('ensure error handling works correctly', () => {
    const gameCurrentState = {
      gameDeck: [
        { kind: 'Queen', color: 'Hearts', points: 3 },
        { kind: 'King', color: 'Clovers', points: 4 },
      ],
      playerStack: [{ kind: 'Jack', color: 'Hearts', points: 2 }],
      gameScore: 2,
      gameStatus: GameStatusEnum.Play,
    } as GameState;
    const unknownAction = () =>
      gameReducer(gameCurrentState, {
        type: 'UNKNOWN' as GameActionsEnum,
      });
    expect(unknownAction).toThrow('Invalid game reducer action');
  });
});

describe('Game results', () => {
  test('ensure persian eye result works correctly', () => {
    const gameCurrentState = {
      gameDeck: [{ kind: 'As', color: 'Hearts', points: 11 }],
      playerStack: [{ kind: 'As', color: 'Tiles', points: 11 }],
      gameScore: 11,
      gameStatus: GameStatusEnum.Play,
    } as GameState;
    const getACardAction = gameReducer(gameCurrentState, {
      type: GameActionsEnum.GET_A_CARD,
    });
    expect(getACardAction).toEqual({
      gameDeck: [],
      playerStack: [
        { kind: 'As', color: 'Tiles', points: 11 },
        { kind: 'As', color: 'Hearts', points: 11 },
      ],
      gameScore: 22,
      gameStatus: GameStatusEnum.PersianEye,
    });
  });

  test('ensure win result works correctly', () => {
    const gameCurrentState = {
      gameDeck: [{ kind: 10, color: 'Hearts', points: 10 }],
      playerStack: [{ kind: 'As', color: 'Hearts', points: 11 }],
      gameScore: 11,
      gameStatus: GameStatusEnum.Play,
    } as GameState;
    const getACardAction = gameReducer(gameCurrentState, {
      type: GameActionsEnum.GET_A_CARD,
    });
    expect(getACardAction).toEqual({
      gameDeck: [],
      playerStack: [
        { kind: 'As', color: 'Hearts', points: 11 },
        { kind: 10, color: 'Hearts', points: 10 },
      ],
      gameScore: 21,
      gameStatus: GameStatusEnum.Win,
    });
  });

  test('ensure lose result works correctly', () => {
    const gameCurrentState = {
      gameDeck: [{ kind: 'As', color: 'Hearts', points: 11 }],
      playerStack: [
        { kind: 10, color: 'Tiles', points: 10 },
        { kind: 10, color: 'Hearts', points: 10 },
      ],
      gameScore: 20,
      gameStatus: GameStatusEnum.Play,
    } as GameState;
    const getACardAction = gameReducer(gameCurrentState, {
      type: GameActionsEnum.GET_A_CARD,
    });
    expect(getACardAction).toEqual({
      gameDeck: [],
      playerStack: [
        { kind: 10, color: 'Tiles', points: 10 },
        { kind: 10, color: 'Hearts', points: 10 },
        { kind: 'As', color: 'Hearts', points: 11 },
      ],
      gameScore: 31,
      gameStatus: GameStatusEnum.Lose,
    });
  });
});

export {};
