import { AppWrapper } from './App.styled'
import Game from './modules/Game/Game'

const App = () => {
  const boardOptions = {
    width: 16,
    height: 16,
    numOfMines: 40,
  }

  return (
    <AppWrapper>
      <Game options={boardOptions} />
    </AppWrapper>
  )
}

export default App
