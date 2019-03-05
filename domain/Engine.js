import Board from './Board.js';

export default class Engine {
  constructor() {
    this._board = new Board();
    this._players = new Set([]);
  }

  get board() {
    return this._board.tiles;
  }

  registerPlayer(symbol) {
    this._players.add(symbol);
  }

  get players() {
    return this._players;
  }
}
