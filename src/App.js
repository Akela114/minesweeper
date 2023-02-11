import GameBoard from './components/GameBoard'

const App = () => {
  const boardOptions = {
    width: 8,
    height: 8,
    numOfMines: 10,
  }
  return <GameBoard options={boardOptions} />
}

export default App
