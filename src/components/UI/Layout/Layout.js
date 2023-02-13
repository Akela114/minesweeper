import PropTypes from 'prop-types'
import { LayoutWrapper } from './Layout.styled'

const Layout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
