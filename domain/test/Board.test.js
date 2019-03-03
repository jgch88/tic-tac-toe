describe('board can be initialised to m x n', () => {
  it('has 9 tiles on a 3 x 3 board', () => {
    const board = new Board();
    expect(board.tiles.length).toBe(9);
  });
});
