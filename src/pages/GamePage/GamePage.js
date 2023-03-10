import { Routes, Route, Navigate } from 'react-router-dom'
import Game from '../../modules/Game'
import Layout from '../../components/UI/Layout'

const simpleOptions = {
  difficulty: 'simple',
  width: 8,
  height: 8,
  numOfMines: 10,
}
const mediumOptions = {
  difficulty: 'medium',
  width: 16,
  height: 16,
  numOfMines: 40,
}
const hardOptions = {
  difficulty: 'hard',
  width: 32,
  height: 16,
  numOfMines: 100,
}

const GamePage = () => {
  return (
    <Layout>
      <Routes>
        <Route path='simple' element={<Game options={simpleOptions} />} />
        <Route path='medium' element={<Game options={mediumOptions} />} />
        <Route path='hard' element={<Game options={hardOptions} />} />
        <Route path='*' element={<Navigate to='' replace />} />
      </Routes>
    </Layout>
  )
}

export default GamePage
