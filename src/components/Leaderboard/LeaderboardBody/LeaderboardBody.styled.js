import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #6644ee;

  padding: 32px;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 40%;

  @media (orientation: landscape) {
    flex-direction: row;

    @media (max-width: 1400px) or (max-height: 750px) {
      padding: 28px;
    }

    @media (max-width: 1200px) or (max-height: 670px) {
      padding: 24px;
    }

    @media (max-width: 420px) {
      padding: 16px;
    }
  }

  @media (orientation: portrait) {
    padding: 20px;

    @media (max-width: 420px) {
      padding: 16px;
    }
  }
`

export const ActionsBlock = styled.div`
  background-color: #ece8fd;

  padding: 20px 24px;
  border-radius: 8px;
`

ActionsBlock.Title = styled.h2`
  padding: 0 4px 4px;
  color: #5230da;
  text-align: center;
  border-bottom: 2px solid #6644ee;

  font-size: 22px;

  @media (orientation: landscape) {
    @media (max-width: 1400px) or (max-height: 750px) {
      font-size: 21px;
    }

    @media (max-width: 1200px) or (max-height: 670px) {
      font-size: 19px;
    }

    @media (max-width: 420px) {
      font-size: 17px;
    }
  }

  @media (orientation: portrait) {
    font-size: 19px;

    @media (max-width: 420px) {
      font-size: 17px;
    }
  }
`

export const ActionsList = styled.div`
  margin-top: 12px;

  display: flex;
  justify-content: space-around;
  gap: 12px;

  @media (orientation: landscape) {
    flex-direction: column;
    @media (max-width: 420px) {
      gap: 8px;
    }
  }

  @media (orientation: portrait) {
    gap: 8px;
  }
`

ActionsList.Action = styled.button`
  flex: 1;

  padding: 6px 10px;

  background-color: ${(props) => (props.isSelected ? '#5230DA' : '#6644ee')};
  color: #fff;

  font-size: 15px;

  border: 0;
  border-radius: 6px;

  @media (orientation: landscape) {
    @media (max-width: 1400px) or (max-height: 750px) {
      font-size: 14px;
    }

    @media (max-width: 1200px) or (max-height: 670px) {
      font-size: 13px;
    }

    @media (max-width: 420px) {
      font-size: 12px;
      padding: 4px 8px;
    }
  }

  @media (orientation: portrait) {
    font-size: 14px;

    @media (max-width: 420px) {
      font-size: 12px;
      padding: 4px 8px;
    }
  }
`

export const TableWrapper = styled.div`
  padding: 20px 24px;

  background-color: #ece8fd;
  border-radius: 8px;

  flex: 1;
`

export const ResultsTable = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
`

export const ResultsTableHeader = styled.thead`
  border-bottom: 2px solid #6644ee;
`

ResultsTableHeader.Row = styled.tr``

ResultsTableHeader.Ceil = styled.th`
  padding: 4px;

  font-size: 16px;
  font-weight: 600;
  color: #5230da;

  @media (orientation: landscape) {
    @media (max-width: 1400px) or (max-height: 750px) {
      font-size: 15px;
    }

    @media (max-width: 1200px) or (max-height: 670px) {
      font-size: 14px;
    }

    @media (max-width: 420px) {
      font-size: 14px;
    }
  }

  @media (orientation: portrait) {
    font-size: 15px;

    @media (max-width: 420px) {
      font-size: 14px;
    }
  }
`

export const ResultsTableBody = styled.tbody``

ResultsTableBody.Row = styled.tr``

ResultsTableBody.Ceil = styled.td`
  padding: 4px 6px;

  font-size: 16px;
  font-weight: 500;
  color: #6644ee;

  &:nth-child(2) {
    max-width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (orientation: landscape) {
    @media (max-width: 1400px) or (max-height: 750px) {
      font-size: 15px;
    }

    @media (max-width: 1200px) or (max-height: 670px) {
      font-size: 14px;
    }

    @media (max-width: 420px) {
      font-size: 13px;
    }
  }

  @media (orientation: portrait) {
    font-size: 15px;

    @media (max-width: 420px) {
      font-size: 14px;
    }
  }
`

export const Message = styled.div`
  padding: 20px 24px;

  background-color: #ece8fd;
  border-radius: 8px;

  flex: 1;

  font-size: 16px;
  font-weight: 500;
  color: #64e;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) {
    @media (max-width: 1400px) or (max-height: 750px) {
      font-size: 15px;
    }

    @media (max-width: 1200px) or (max-height: 670px) {
      font-size: 14px;
    }

    @media (max-width: 420px) {
      font-size: 13px;
    }
  }

  @media (orientation: portrait) {
    font-size: 15px;

    @media (max-width: 420px) {
      font-size: 13px;
    }
  }
`

Message.Text = styled.p`
  text-align: center;
  max-width: 200px;
`
