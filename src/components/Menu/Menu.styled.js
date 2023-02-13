import styled from 'styled-components'

export const MenuWrapper = styled.div`
  margin: 20px 60px;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
export const MenuTitle = styled.h1`
  text-align: center;

  font-size: 32px;
  color: #5230da;

  padding: 0 20px 4px;

  border-bottom: 4px solid #64e;
  border-radius: 12px;

  @media (orientation: landscape) {
    @media (max-height: 750px) or (max-width: 1355px) {
      font-size: 28px;
    }

    @media (max-height: 670px) or (max-width: 1195px) {
      font-size: 26px;
    }

    @media (max-height: 560px) or (max-width: 1035px) {
      font-size: 24px;
    }

    @media (max-height: 485px) or (max-width: 875px) {
      font-size: 23px;
    }
  }

  @media (orientation: portrait) {
    @media (max-height: 1550px) or (max-width: 760px) {
      font-size: 28px;
    }

    @media (max-height: 1380px) or (max-width: 675px) {
      font-size: 26px;
    }

    @media (max-height: 1230px) or (max-width: 585px) {
      font-size: 24px;
    }

    @media (max-height: 1050px) or (max-width: 515px) {
      font-size: 23px;
    }

    @media (max-height: 890px) or (max-width: 420px) {
      font-size: 22px;
    }

    @media (max-height: 720px) or (max-width: 345px) {
      font-size: 21px;
    }

    @media (max-height: 655px) or (max-width: 310px) {
      font-size: 20px;
    }
  }
`
