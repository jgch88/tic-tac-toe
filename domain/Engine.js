import Board from './Board.js';

export default class Engine {
  constructor() {
    this._board = new Board();
    this._players = [];
    this._whoseTurnIndex = null;
    this._gameOver = false;
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

    if (!this._whoseTurnIndex) {
      this._whoseTurnIndex = 0;
    }
    
    return this._players[this._whoseTurnIndex];
  }

  get gameOver() {
    return this._gameOver;
  }

  play(symbol, position) {
    if (!this.players.has(symbol)) {
      throw new Error(`Player '${symbol}' is not registered.`);
    }
    
    if (symbol !== this.whoseTurn) {
      throw new Error(`It is not Player '${symbol}''s turn!`);
    }

    if (this.gameOver) {
      throw new Error(`Can't play when the game is over!`);
    }

    this._board.placeSymbol(symbol, position);
    this._whoseTurnIndex = this._getNextPlayerIndex();

    if (this._board.isWinner(symbol)) {
      this._gameOver = true;
    }
  }

  hardReset() {
    this._board = new Board();
    this._players = [];
    this._whoseTurnIndex = null;
    this._gameOver = false;
  }

  _getNextPlayerIndex() {
    if (this._whoseTurnIndex + 1 >= this._players.length) {
      return 0;
    }

    return this._whoseTurnIndex + 1;
  }
}
