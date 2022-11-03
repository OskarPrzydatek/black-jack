import renderer from 'react-test-renderer';

import CardBox from '../../../components/CardBox';
import CardList from '../../../components/CardList';
import { CardColorsEnum } from '../../../constants/cardColors.enum';

describe('CardList', () => {
  test('component snapshot', () => {
    const tree = renderer
      .create(
        <CardList>
          <CardBox color={CardColorsEnum.Clovers} kind={9} />
        </CardList>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export {};
