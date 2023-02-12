import { Routes, Route, Navigate } from 'react-router-dom'
import GamePage from './pages/GamePage/'

const App = () => {
  return (
    <Routes>
      <Route path='game/*' element={<GamePage />} />
      <Route path='*' element={<Navigate to='/game' replace />} />
    </Routes>
  )
}

export default App
