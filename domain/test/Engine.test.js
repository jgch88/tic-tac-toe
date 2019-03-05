import Engine from '../Engine.js';

// Engine is responsible for coordinating the interaction between
// players and the board
describe('Engine', () => {
  it('has a board', () => {
    const engine = new Engine();
    expect(engine.board.length).toBe(9);
  })
})
