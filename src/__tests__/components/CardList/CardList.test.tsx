import renderer from 'react-test-renderer';
import CardBox from '../../../components/CardBox';

import CardList from '../../../components/CardList';
import { CardColorsEnum } from '../../../constants/cardColors.enum';

describe('CardList', () => {
  test('component snapshot', () => {
    const tree = renderer
      .create(
        <CardList>
          <CardBox kind={9} color={CardColorsEnum.Clovers} />
        </CardList>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
