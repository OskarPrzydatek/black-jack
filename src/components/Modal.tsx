import { GameStatusEnum } from '../constants/gameStatus.enum';

import Button from './Button';
import Text from './Text';

interface ModalProps {
  gameStatus: GameStatusEnum;
  gameScore: number;
  handleNewGame: () => void;
}

export default function Modal({
  gameStatus,
  gameScore,
  handleNewGame,
}: ModalProps) {
  const gameResultMessage = {
    PersianEye: '!!! PERSIAN EYE !!!',
    Win: `Win with score: ${gameScore}`,
    Pass: `Pass! End with score: ${gameScore}`,
    Lose: 'Game Over',
    Play: '',
  };

  if (gameStatus !== GameStatusEnum.Play)
    return (
      <div>
        <Text>{gameResultMessage[gameStatus]}</Text>
        <Button label="New Game" onClick={handleNewGame} />
      </div>
    );

  return null;
}
