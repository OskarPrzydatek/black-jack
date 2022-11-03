import renderer from 'react-test-renderer';
import Modal from '../../../components/Modal';
import { GameStatusEnum } from '../../../constants/gameStatus.enum';

const mockHandleNewGame = jest.fn();

describe('Modal', () => {
  test('component snapshot', () => {
    const tree = renderer
      .create(
        <Modal
          gameStatus={GameStatusEnum.Win}
          gameScore={21}
          handleNewGame={mockHandleNewGame}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
