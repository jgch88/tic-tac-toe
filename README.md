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
  - defineWinningFormations(listOfFormations)
  - setShape(shape = 3x3)
  - gameInProgress()
- Engine
  - DONE - has ONE board
  - DONE - registerPlayer(symbol) // We don't need to complicate it with Player class, at the end of the day the player's identity/"primary key" IS the symbol. Thoughts: we can only registerPlayers at the beginning?
  - DONE - get whoseTurn() // pointer to the current symbol's turn
  - DONE - get players() // see all registered players
  - DONE - behavior: rotating turns between players
  - DONE - play(symbol, position) // checks it is the correct player's turn
  - DONE - get gameOver() // behavior: win conditions
  - create/restart board only when !gameInProgress()

View
- ConsoleView (using console.log terminal)
  - DONE - render(board.tiles)


App (Game Engine)
- Initialises (multiple?) GameEngines
- Allows players to join/observe various game engines
