import Layout from '../../UI/Layout'
import { MenuWrapper, MenuHeader, MenuNav, MenuBody } from './MenuPage.styled'
import Menu from '../../modules/Menu'

const MenuPage = () => {
  return (
    <Layout>
      <MenuWrapper>
        <MenuHeader>
          <MenuNav>
            <MenuNav.Link to='../leaderboard'>Таблица лидеров</MenuNav.Link>
          </MenuNav>
        </MenuHeader>
        <MenuBody>
          <Menu />
        </MenuBody>
      </MenuWrapper>
    </Layout>
  )
}

export default MenuPage
