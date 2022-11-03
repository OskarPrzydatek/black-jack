import renderer from 'react-test-renderer';

import Icon from '../../../components/Icon';
import { CardColorsEnum } from '../../../constants/cardColors.enum';

describe('Icon', () => {
  test('component snapshot', () => {
    const cloversIconTree = renderer
      .create(<Icon cardColor={CardColorsEnum.Clovers} />)
      .toJSON();
    const heartsIconTree = renderer
      .create(<Icon cardColor={CardColorsEnum.Hearts} />)
      .toJSON();
    const pikersIconTree = renderer
      .create(<Icon cardColor={CardColorsEnum.Pikes} />)
      .toJSON();
    const tilesIconTree = renderer
      .create(<Icon cardColor={CardColorsEnum.Tiles} />)
      .toJSON();
    expect(cloversIconTree).toMatchSnapshot('clovers');
    expect(heartsIconTree).toMatchSnapshot('hearts');
    expect(pikersIconTree).toMatchSnapshot('pikers');
    expect(tilesIconTree).toMatchSnapshot('tiles');
  });
});

export {};
