import { css } from 'styled-components'

export const wrapperStyle = css`
  font-family: inherit;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 24px;

  font-size: 24px;
  font-weight: 500;
  color: #fff;

  background-color: #444;

  @media (orientation: landscape) {
    @media (max-height: 830px) or (max-width: 1520px) {
      font-size: 23px;
    }

    @media (max-height: 750px) or (max-width: 1355px) {
      font-size: 21px;
      padding: 4px 12px;
    }

    @media (max-height: 670px) or (max-width: 1195px) {
      font-size: 19px;
    }

    @media (max-height: 560px) or (max-width: 1035px) {
      font-size: 17px;
    }

    @media (max-height: 485px) or (max-width: 875px) {
      font-size: 16px;
    }

    @media (max-height: 395px) or (max-width: 715px) {
      font-size: 15px;
    }

    @media (max-height: 365px) or (max-width: 665px) {
      font-size: 14px;
    }

    @media (max-height: 339px) or (max-width: 600px) {
      font-size: 12px;
    }
  }

  @media (orientation: portrait) {
    padding: 4px 12px;
    @media (max-height: 1665px) or (max-width: 760px) {
      font-size: 23px;
    }

    @media (max-height: 1500px) or (max-width: 675px) {
      font-size: 21px;
    }

    @media (max-height: 1340px) or (max-width: 585px) {
      font-size: 19px;
    }

    @media (max-height: 1175px) or (max-width: 515px) {
      font-size: 17px;
    }

    @media (max-height: 1040px) or (max-width: 420px) {
      font-size: 16px;
    }

    @media (max-height: 880px) or (max-width: 345px) {
      font-size: 14px;
    }

    @media (max-height: 795px) or (max-width: 310px) {
      font-size: 13px;
      padding: 4px 6px;
    }

    @media (max-height: 730px) or (max-width: 280px) {
      font-size: 12px;
    }
  }
`
