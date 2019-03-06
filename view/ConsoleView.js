const height = 3;
const length = 3;

export default class ConsoleView {
  constructor() {}

  render(board) {
    // console.log(board);
    let outputString = "\n";
    let heightCounter = 0;
    let lengthCounter = 0;
    for (let tile of board) {

      if (!tile) {
        outputString += `_`;
      } else {
        outputString += tile;
      }
      lengthCounter += 1;
      outputString += `|`;
      if (lengthCounter === 3) {
        lengthCounter = 0;
        outputString += `\n`;
      }
    }
    console.log(outputString);
  }
}
