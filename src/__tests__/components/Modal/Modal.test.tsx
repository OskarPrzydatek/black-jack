import renderer from 'react-test-renderer';

import Modal from '../../../components/Modal';
import { GameStatusEnum } from '../../../constants/gameStatus.enum';

const mockHandleNewGame = jest.fn();

describe('Modal', () => {
  test('component snapshot', () => {
    const tree = renderer
      .create(
        <Modal
          gameScore={21}
          gameStatus={GameStatusEnum.Win}
          handleNewGame={mockHandleNewGame}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
