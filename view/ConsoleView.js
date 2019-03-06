const height = 3;
const length = 3;

export default class ConsoleView {
  constructor() {
  }

  render(board) {
    let outputString = "\n";
    let heightCounter = 0;
    let lengthCounter = 0;
    for (let tile of board) {

      if (tile || tile === 0) {
        outputString += tile;
      } else {
        outputString += `_`;
      }
      lengthCounter += 1;
      outputString += `|`;
      if (lengthCounter === length) {
        lengthCounter = 0;
        outputString += `\n`;
      }
    }
    console.log(outputString);
  }


}
