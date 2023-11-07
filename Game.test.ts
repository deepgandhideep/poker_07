import { Game } from './Game';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  test('playerAction function', () => {
    // Initialize a new Game instance and call the playerAction function
    game.playerAction('bet', 10);

    // Assert that the game state is updated correctly
    expect(game.state.currentBet).toEqual(10);
  });

  // Add more unit tests for other functions and scenarios as needed
});