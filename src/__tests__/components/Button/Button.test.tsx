import renderer from 'react-test-renderer';

import Button from '../../../components/Button';

const mockOnClick = jest.fn();

describe('Button', () => {
  test('component snapshot', () => {
    const tree = renderer
      .create(<Button label="Button" onClick={mockOnClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
