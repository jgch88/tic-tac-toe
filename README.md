An exercise in OOP to see how extensible we can make tic-tac-toe

Flexibility
1. Multiple UIs (console, web browser)
2. Multiple Players (3 players?)
3. Board shape (m x n, m x n x o 3D?)
4. Winning pattern (length k, polyomino)
5. The turn rotation (alternate turns, roll a coin to decide who gets to play (luck based))


Domain Interfaces
- Board
  - DONE - get tiles()
  - DONE - placeSymbol(symbol, position)
  - DONE - isWinner(symbol) // union - find? use a strategy pattern and optimize the algorithms to be more scalable later
  - addPlayer(symbol)
  - defineWinningFormations(listOfFormations)
  - setShape(shape = 3x3)
  - gameInProgress()
- GameEngine
  - has ONE board
  - coordinates turns, valid plays, win conditions
  - create/restart board only when !gameInProgress()
  - register(symbol) // We don't need to complicate it with Player class, at the end of the day the player's identity/"primary key" IS the symbol
  - whoseTurn() // pointer to the current symbol's turn
  - play(symbol, position) // checks it is the correct player's turn

View
- render(board.getAllSymbolPositions())


App (Game Engine)
- Initialises (multiple?) GameEngines
- Allows players to join/observe various game engines
