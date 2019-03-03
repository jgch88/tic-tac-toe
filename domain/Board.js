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
}
