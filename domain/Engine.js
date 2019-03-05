import Board from './Board.js';

export default class Engine {
  constructor() {
    this._board = new Board();
  }

  get board() {
    return this._board.tiles;
  }
}
