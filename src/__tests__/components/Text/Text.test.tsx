import renderer from 'react-test-renderer';

import Text from '../../../components/Text';

describe('Text', () => {
  test('component snapshot', () => {
    const tree = renderer.create(<Text>Lorem Ipsum</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
