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
_|_|_|
_|_|_|
_|_|_|
`
    )
  });
  it('renders board positions correctly', () => {
    let consoleLog = "";
    console['log'] = jest.fn((input) => consoleLog = input);

    const engine = new Engine();
    const consoleView = new ConsoleView();
    consoleView.render([0,1,2,3,4,5,6,7,8]);
    expect(consoleLog).toBe(
`
0|1|2|
3|4|5|
6|7|8|
`
    )
  });
  it('renders a game in progress correctly', () => {
    let consoleLog = "";
    console['log'] = jest.fn((input) => consoleLog = input);

    const engine = new Engine();
    const consoleView = new ConsoleView();
    engine.registerPlayer('o');
    engine.registerPlayer('x');
    engine.play('o', 0);
    engine.play('x', 1);
    engine.play('o', 2);
    engine.play('x', 3);
    consoleView.render(engine.board);
    expect(consoleLog).toBe(
`
o|x|o|
x|_|_|
_|_|_|
`
    )
  });
});
