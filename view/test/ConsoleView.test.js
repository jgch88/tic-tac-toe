import ConsoleView from '../ConsoleView';
import Engine from '../../domain/Engine.js';

describe('Console View', () => {
  it('renders an empty board correctly', () => {
    let consoleLog = "";
    console['log'] = jest.fn((input) => consoleLog = input);

    const engine = new Engine();
    const consoleView = new ConsoleView();
    consoleView.render(engine.board);
    expect(consoleLog).toBe(
      `
      _|_|_
      _|_|_
       | |
      `
    )
  });
});
