import Layout from '../../components/UI/Layout'
import Leaderboard from '../../components/Leaderboard'
import {
  PageWrapper,
  PageHeader,
  PageNav,
  PageBody,
} from './LeaderboardPage.styled'

const PagePage = () => {
  return (
    <Layout>
      <PageWrapper>
        <PageHeader>
          <PageNav>
            <PageNav.Link to='../game'>Меню</PageNav.Link>
          </PageNav>
        </PageHeader>
        <PageBody>
          <Leaderboard />
        </PageBody>
      </PageWrapper>
    </Layout>
  )
}

export default PagePage
