An exercise in OOP to see how extensible we can make tic-tac-toe

Flexibility
1. Multiple UIs (console, web browser)
2. Multiple Players (3 players?)
3. Board shape (m x n, m x n x o 3D?)
4. Winning pattern (length k, polyomino)
5. The turn rotation (alternate turns, roll a coin to decide who gets to play (luck based))


Domain Interfaces
- Board
  - setShape(shape = 3x3)
  - addPlayer(symbol)
  - placeSymbol(symbol, position)
  - defineWinningFormations(listOfFormations)
  - hasWinner() // union-find?
  - getAllSymbolPositions()
  - getSymbolPositions(symbol)
- Symbol: character
- Player
  - get Id()
  - play(position)

View
- render(board.getAllSymbolPositions())

App (Game Engine)
- Initialises Board: new Board()
- Add Player to list of players: [new Player()]
- Lets players play if it is a valid turn
