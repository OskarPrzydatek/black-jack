import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App', () => {
  test('component snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure taking card works correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('take-card-button'));
    const cardStack = screen.getByTestId('player-cards-stack');
    expect(cardStack.childNodes).toHaveLength(2);
  });

  test('ensure pass and new game works correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('pass-button'));
    expect(screen.queryByTestId('game-result-message')).toHaveTextContent(
      'Pass! End with score: '
    );
    fireEvent.click(screen.getByTestId('new-game-button'));
    expect(screen.queryByTestId('game-result-modal')).not.toBeInTheDocument();
  });
});
