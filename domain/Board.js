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
    if (typeof symbol !== 'string') {
      throw new Error('Use a string for a symbol.');
    }

    if (!Number.isInteger(position)) {
      throw new Error('Position must be an integer.');
    }

    if (position < 0 || position >= boardSize) {
      throw new Error('You can only place symbols at positions 0 to 8.');
    }
    if (this._tiles[position]) {
      throw new Error(`Position ${position} already contains the symbol '${symbol}'.`);
    }

    this._tiles[position] = symbol;
  }

  isWinner(symbol) {
    if (this._tiles[0] === symbol && this._tiles[1] === symbol && this._tiles[2] === symbol) {
      return true;
    }
    if (this._tiles[3] === symbol && this._tiles[4] === symbol && this._tiles[5] === symbol) {
      return true;
    }
    if (this._tiles[6] === symbol && this._tiles[7] === symbol && this._tiles[8] === symbol) {
      return true;
    }
    if (this._tiles[0] === symbol && this._tiles[3] === symbol && this._tiles[6] === symbol) {
      return true;
    }
    if (this._tiles[1] === symbol && this._tiles[4] === symbol && this._tiles[7] === symbol) {
      return true;
    }
    if (this._tiles[2] === symbol && this._tiles[5] === symbol && this._tiles[8] === symbol) {
      return true;
    }
    if (this._tiles[2] === symbol && this._tiles[4] === symbol && this._tiles[6] === symbol) {
      return true;
    }
    if (this._tiles[0] === symbol && this._tiles[4] === symbol && this._tiles[8] === symbol) {
      return true;
    }
    return false;
  }
}
