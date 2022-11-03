import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CardBox from '../../../components/CardBox';
import { CardColorsEnum } from '../../../constants/cardColors.enum';
import { FigureType } from '../../../types/figure.type';

describe('CardBox', () => {
  test('component snapshot', () => {
    const tree = renderer
      .create(<CardBox color={CardColorsEnum.Hearts} kind={9} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure card coloring labels correctly', () => {
    const { rerender } = render(
      <CardBox color={CardColorsEnum.Hearts} kind={9} />
    );
    const label = screen.getByTestId('card-box-label');
    expect(label).toHaveStyle({ color: '#D91828' });
    rerender(<CardBox color={CardColorsEnum.Pikes} kind={9} />);
    expect(label).toHaveStyle({ color: '#2F2F2F' });
  });

  test('ensure card labels works correctly', () => {
    const { rerender } = render(
      <CardBox color={CardColorsEnum.Hearts} kind={9} />
    );
    expect(screen.getByTestId('card-box-label')).toHaveTextContent('9');
    rerender(<CardBox color={CardColorsEnum.Hearts} kind={10} />);
    expect(screen.getByTestId('card-box-label')).toHaveTextContent('10');
    rerender(
      <CardBox color={CardColorsEnum.Hearts} kind={'Jack' as FigureType} />
    );
    expect(screen.getByTestId('card-box-label')).toHaveTextContent('J');
    rerender(
      <CardBox color={CardColorsEnum.Hearts} kind={'Queen' as FigureType} />
    );
    expect(screen.getByTestId('card-box-label')).toHaveTextContent('Q');
    rerender(
      <CardBox color={CardColorsEnum.Hearts} kind={'King' as FigureType} />
    );
    expect(screen.getByTestId('card-box-label')).toHaveTextContent('K');
    rerender(
      <CardBox color={CardColorsEnum.Hearts} kind={'As' as FigureType} />
    );
    expect(screen.getByTestId('card-box-label')).toHaveTextContent('A');
  });
});

export {};
