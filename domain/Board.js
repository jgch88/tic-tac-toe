export default class Board {
  constructor() {
    this._tiles = [];
    for (let i = 0; i < 9; i++) {
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
    this._tiles[position] = symbol;
  }
}
