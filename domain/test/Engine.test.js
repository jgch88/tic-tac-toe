import Engine from '../Engine.js';

// Engine is responsible for coordinating the interaction between
// players and the board
describe('Engine', () => {
  describe('constructor', () => {
    it('has a board', () => {
      const engine = new Engine();
      expect(engine.board.length).toBe(9);
    });
  });

  describe('player registration', () => {
    it('can register players (represented as characters)', () => {
      const engine = new Engine();
      engine.registerPlayer('x');
      expect(engine.players).toEqual(new Set(['x']));
    });

    it('does not register duplicate symbols', () => {
      const engine = new Engine();
      engine.registerPlayer('x');
      engine.registerPlayer('x');
      expect(engine.players).toEqual(new Set(['x']));
    });

    it('only allows strings to be registered', () => {
      const engine = new Engine();
      expect(() => {
        engine.registerPlayer(123);
      }).toThrow('Players must be represented by strings.');
    });
  });

  describe('game in progress', () => {
    describe('checking whose turn it is', () => {
      it('cannot show whose turn it is if no players are registered', () => {
        const engine = new Engine();
        expect(() => {
          engine.whoseTurn;
        }).toThrow('There are no players!');
      });
      
      it('sets the first player to register as the first turn', () => {
        const engine = new Engine();
        engine.registerPlayer('o');
        expect(engine.whoseTurn).toBe('o');
      });
    });

    describe('playing', () => {
      it('only registered players can play', () => {
        const engine = new Engine();
        engine.registerPlayer('o');
        expect(() => {
          engine.play('x', 0);
        }).toThrow(`Player 'x' is not registered.`);
      });

      it('players can only play when it is their turn', () => {
        const engine = new Engine();
        engine.registerPlayer('o');
        engine.registerPlayer('x');
        expect(() => {
          engine.play('x', 0);
        }).toThrow(`It is not Player 'x''s turn!`);
        expect(() => {
          engine.play('o', 0);
        }).not.toThrow();
      });

      it('board updates after player plays', () => {
        const engine = new Engine();
        engine.registerPlayer('o');
        engine.play('o', 0);
        expect(engine.board[0]).toBe('o');
      });

      it('after playing, turn moves to the next player', () => {
        const engine = new Engine();
        engine.registerPlayer('o');
        engine.registerPlayer('x');
        engine.play('o', 0);
        expect(engine.whoseTurn).toBe('x');
      });
    });
  });
});
