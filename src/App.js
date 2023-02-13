import { Routes, Route, Navigate } from 'react-router-dom'
import MenuPage from './pages/MenuPage'
import GamePage from './pages/GamePage/'
import LeaderboardPage from './pages/LeaderboardPage'

const App = () => {
  return (
    <Routes>
      <Route path='game' element={<MenuPage />} />
      <Route path='game/*' element={<GamePage />} />
      <Route path='leaderboard' element={<LeaderboardPage />} />
      <Route path='*' element={<Navigate to='game' replace />} />
    </Routes>
  )
}

export default App
