import styled from 'styled-components'
import StyledLink from '../../components/UI/StyledLink'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  align-self: stretch;
  flex: 1;
`

export const PageHeader = styled.header`
  align-self: stretch;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 24px;

  padding: 10px 12px;

  background-color: #64e3;

  @media (max-height: 750px) or (max-width: 1355px) {
    font-size: 21px;
    padding: 4px;
  }
`

export const PageNav = styled.nav`
  flex: 1;
  align-self: stretch;

  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  gap: 6px;
`

PageNav.Link = styled(StyledLink)``

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  align-self: stretch;
  flex: 1;
`
