const boardSize = 9;

export default class Board {
  constructor() {
    this._tiles = [];
    for (let i = 0; i < boardSize; i++) {
      this._tiles.push(null);
    }
  }

  get tiles() {
    return this._tiles;
  }

  placeSymbol(symbol, position) {
    // preconditions:
    // symbol is a string
    // position is between 0 and 8
    if (typeof symbol !== 'string') {
      throw new Error('Use a string for a symbol.');
    }
    if (position < 0 || position >= boardSize) {
      throw new Error('You can only place symbols at positions 0 to 8.');
    }
    this._tiles[position] = symbol;
  }
}
