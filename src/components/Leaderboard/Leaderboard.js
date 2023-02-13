import { LeaderboardWrapper, LeaderboardTitle } from './Leaderboard.styled'
import LeaderboardBody from './LeaderboardBody'

const Leaderboard = () => {
  return (
    <LeaderboardWrapper>
      <LeaderboardTitle>Таблица лидеров</LeaderboardTitle>
      <LeaderboardBody />
    </LeaderboardWrapper>
  )
}

export default Leaderboard
