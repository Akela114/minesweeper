import Layout from '../../components/UI/Layout'
import { PageWrapper, PageHeader, PageNav, PageBody } from './MenuPage.styled'
import Menu from '../../components/Menu'

const MenuPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <PageHeader>
          <PageNav>
            <PageNav.Link to='../leaderboard'>Таблица лидеров</PageNav.Link>
          </PageNav>
        </PageHeader>
        <PageBody>
          <Menu />
        </PageBody>
      </PageWrapper>
    </Layout>
  )
}

export default MenuPage
