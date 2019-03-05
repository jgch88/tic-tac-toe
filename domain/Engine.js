import Board from './Board.js';

export default class Engine {
  constructor() {
    this._board = new Board();
    this._players = new Set([]);
    this._whoseTurn;
  }

  get board() {
    return this._board.tiles;
  }

  registerPlayer(symbol) {
    if (typeof symbol !== 'string') {
      throw new Error('Players must be represented by strings.');
    }
    this._players.add(symbol);
  }

  get players() {
    return this._players;
  }

  whoseTurn() {
    if (!(this._players.size > 0)) {
      throw new Error('There are no players!');
    }

    if (!this._whoseTurn) {
      this._whoseTurn = this._players.values().next().value;
    }
    
    return this._whoseTurn;
  }

  play(symbol, position) {
    if (!this._players.has(symbol)) {
      throw new Error(`Player '${symbol}' is not registered.`);
    }
  }
}
