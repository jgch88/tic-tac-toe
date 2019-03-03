import Board from '../Board.js';

describe('board can be initialised to m x n', () => {
  it('has 9 tiles on a 3 x 3 board', () => {
    const board = new Board();
    expect(board.tiles.length).toBe(9);
  });

  it('can place symbols on tiles', () => {
    // Model implementation:
    // Board positions are like this
    // 0 | 1 | 2
    // 3 | 4 | 5
    // 6 | 7 | 8
    const board = new Board();
    board.placeSymbol('x', 0);
    expect(board.tiles[0]).toBe('x');
  });
});

describe('placeSymbol() preconditions', () => {
  it('symbol must be a string', () => {
    const board = new Board();
    expect(() => {
      board.placeSymbol(1, 0)
    }).toThrow('Use a string for a symbol.');
  })

  it('position must be between 0 and 8 inclusive (for a 3x3 board)', () => {
    const board = new Board();
    expect(() => {
      board.placeSymbol('x', -1);
    }).toThrow('You can only place symbols at positions 0 to 8.');
    expect(() => {
      board.placeSymbol('x', 9);
    }).toThrow('You can only place symbols at positions 0 to 8.');
    expect(() => {
      board.placeSymbol('o', 1);
    }).not.toThrow();
  });
})
