import Engine from '../Engine.js';

// Engine is responsible for coordinating the interaction between
// players and the board
describe('Engine', () => {
  it('has a board', () => {
    const engine = new Engine();
    expect(engine.board.length).toBe(9);
  });

  it('can register players (represented as characters)', () => {
    const engine = new Engine();
    engine.registerPlayer('x');
    expect(engine.players.length).toBe(1);
  });
});
