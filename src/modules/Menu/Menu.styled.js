import styled from 'styled-components'
import Button from '../../UI/Button'

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  align-self: stretch;
  flex: 1;
`

export const MenuHeader = styled.div`
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

export const MenuActions = styled.div`
  flex: 1;
  align-self: stretch;

  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  gap: 6px;
`

MenuActions.Button = styled(Button)``

export const MenuBody = styled.div`
  margin: 20px 60px;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

MenuBody.Title = styled.h1`
  text-align: center;

  font-size: 32px;
  color: #64e;

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

export const MenuList = styled.ul`
  align-self: stretch;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media (orientation: landscape) and (max-height: 680px) {
    flex-direction: row;
  }
`

MenuList.Item = styled.li`
  flex: 1;
  padding: 28px 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: c;

  cursor: pointer;

  border: 6px solid
    ${(props) =>
      props.bgColor === 'green'
        ? '#ABEBC6'
        : props.bgColor === 'blue'
        ? '#AED6F1'
        : props.bgColor === 'red'
        ? '#F5B7B1'
        : 'transparent'};

  background-color: ${(props) =>
    props.bgColor === 'green'
      ? '#28B463'
      : props.bgColor === 'blue'
      ? '#2E86C1'
      : props.bgColor === 'red'
      ? '#CB4335'
      : 'transparent'};

  border-radius: 8px;

  font-size: 20px;
  font-weight: 500;

  color: #fff;

  &:active {
    border-color: transparent;
  }

  @media (orientation: landscape) {
    @media (max-height: 750px) or (max-width: 1355px) {
      font-size: 19px;
    }

    @media (max-height: 670px) or (max-width: 1195px) {
      font-size: 18px;
    }

    @media (max-height: 560px) or (max-width: 1035px) {
      font-size: 17px;
    }

    @media (max-height: 485px) or (max-width: 875px) {
      font-size: 16px;
    }
  }

  @media (orientation: portrait) {
    @media (max-height: 1355px) {
      font-size: 19px;
    }

    @media (max-height: 1195px) {
      font-size: 18px;
    }

    @media (max-height: 1035px) {
      font-size: 17px;
    }

    @media (max-height: 875px) {
      font-size: 16px;
    }
  }
`

MenuList.Item.Title = styled.h2`
  align-self: stretch;

  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 12px;
`

MenuList.Item.Info = styled.div`
  line-height: 100%;

  font-size: 0.9em;
  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 10px;

  margin-left: 12px;

  white-space: nowrap;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`

MenuList.Item.InfoImg = styled.img`
  height: 22px;

  @media (orientation: landscape) {
    @media (max-height: 750px) or (max-width: 1355px) {
      height: 21px;
    }

    @media (max-height: 670px) or (max-width: 1195px) {
      height: 20px;
    }

    @media (max-height: 560px) or (max-width: 1035px) {
      height: 19px;
    }

    @media (max-height: 485px) or (max-width: 875px) {
      height: 18px;
    }
  }

  @media (orientation: portrait) {
    @media (max-height: 1355px) {
      font-size: 21px;
    }

    @media (max-height: 1195px) {
      font-size: 20px;
    }

    @media (max-height: 1035px) {
      font-size: 19px;
    }

    @media (max-height: 875px) {
      font-size: 18px;
    }
  }
`
