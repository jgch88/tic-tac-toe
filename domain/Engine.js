import Board from './Board.js';

export default class Engine {
  constructor() {
    this._board = new Board();
    this._players = [];
    this._whoseTurn;
  }

  get board() {
    return this._board.tiles;
  }

  registerPlayer(symbol) {
    if (typeof symbol !== 'string') {
      throw new Error('Players must be represented by strings.');
    }
    if (new Set(this._players).has(symbol)) {
      throw new Error(`'${symbol}' is already registered.`);
    }
    this._players.push(symbol);
  }

  get players() {
    return new Set(this._players);
  }

  get whoseTurn() {
    if (!(this.players.size > 0)) {
      throw new Error('There are no players!');
    }

    if (!this._whoseTurn) {
      this._whoseTurn = 0;
    }
    
    return this._players[this._whoseTurn];
  }

  play(symbol, position) {
    if (!this.players.has(symbol)) {
      throw new Error(`Player '${symbol}' is not registered.`);
    }
    
    if (symbol !== this.whoseTurn) {
      throw new Error(`It is not Player '${symbol}''s turn!`);
    }

    this._board.placeSymbol(symbol, position);
    this._whoseTurn += 1;
  }
}
