import Engine from '../domain/Engine.js';
import ConsoleView from '../view/ConsoleView.js';
import input from '../view/input.js';

export default class ConsoleApp {
  constructor() {
    this._engine = new Engine();
    this._view = new ConsoleView(this);

    this.getPlayers();
  }

  async getPlayers() {
    const symbol = await input(`Type in a letter to register a player (e.g.: x), or press enter if all players are registered:\n`);
    if (symbol) {
      try {
        this._engine.registerPlayer(symbol);
      } catch (e) {
        console.log(e);
      } finally {
        this.getPlayers(); // recursively keep getting players
      }
    } else {
      this.displayPlayers();
    }
  }

  displayPlayers() {
    console.log('\nLet the game begin.');
    console.log(`\nPlayers:`);
    this._engine.players.forEach(player => {
      console.log(player);
    })

    console.log(`\nPositions: `);
    this._view.render([0,1,2,3,4,5,6,7,8]);

    this.play();
  }

  async play() {
    if (!this._engine.players.size > 0) {
      this.end();
    }

    if (!this._engine.gameOver) {
      const player = this._engine.whoseTurn;
      const position = await input(`Place ${player} at which position? \n`);
      if (position) {
        try {
          this._engine.play(player, Number(position));
        } catch (e) {
          console.log(e);
        } finally {
          this._view.render(this._engine.board);
          if (this._engine.gameOver) {
            console.log(`Player ${player} wins!`);
          }
          this.play();
        }
      }
    } else {
      this.end();
    }

  }

  end() {
    console.log('Thanks for playing.');
  }

}
