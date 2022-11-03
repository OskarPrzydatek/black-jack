import { GameStatusEnum } from '../constants/gameStatus.enum';

import Button from './Button';
import Text from './Text';

interface ModalProps {
  gameStatus: GameStatusEnum;
  gameScore: number;
  dataTestID?: string;
  resultMessageTestID?: string;
  newGameButtonTestID?: string;
  handleNewGame: () => void;
}

export default function Modal({
  gameStatus,
  gameScore,
  dataTestID,
  resultMessageTestID,
  newGameButtonTestID,
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
      <div data-testid={dataTestID}>
        <Text dataTestID={resultMessageTestID}>
          {gameResultMessage[gameStatus]}
        </Text>
        <Button
          dataTestID={newGameButtonTestID}
          label="New Game"
          onClick={handleNewGame}
        />
      </div>
    );

  return null;
}
