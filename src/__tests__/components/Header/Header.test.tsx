import renderer from 'react-test-renderer';

import Header from '../../../components/Header';

describe('Header', () => {
  test('component snapshot', () => {
    const tree = renderer.create(<Header title="Header" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
