import Game from '../../modules/Game'
import Layout from '../../UI/Layout'

const GamePage = () => {
  const boardOptions = {
    width: 8,
    height: 8,
    numOfMines: 10,
  }

  return (
    <Layout>
      <Game options={boardOptions} />
    </Layout>
  )
}

export default GamePage
