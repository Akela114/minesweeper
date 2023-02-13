import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Wrapper,
  ActionsBlock,
  ActionsList,
  TableWrapper,
  ResultsTable,
  ResultsTableHeader,
  ResultsTableBody,
  Message,
} from './LeaderboardBody.styled'

const LeaderboardBody = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('simple')

  const data = useSelector((state) =>
    selectedDifficulty === 'simple'
      ? state.results.simple
      : selectedDifficulty === 'medium'
      ? state.results.medium
      : state.results.hard,
  )

  return (
    <Wrapper>
      <ActionsBlock>
        <ActionsBlock.Title>Уровень</ActionsBlock.Title>
        <ActionsList>
          <ActionsList.Action
            isSelected={selectedDifficulty === 'simple'}
            onClick={() => setSelectedDifficulty('simple')}
          >
            Простой
          </ActionsList.Action>
          <ActionsList.Action
            isSelected={selectedDifficulty === 'medium'}
            onClick={() => setSelectedDifficulty('medium')}
          >
            Средний
          </ActionsList.Action>
          <ActionsList.Action
            isSelected={selectedDifficulty === 'hard'}
            onClick={() => setSelectedDifficulty('hard')}
          >
            Сложный
          </ActionsList.Action>
        </ActionsList>
      </ActionsBlock>
      {data.length === 0 && (
        <Message>
          <Message.Text>
            Записи отсутствуют. Выиграйте игру, что бы попасть в список лидеров.
          </Message.Text>
        </Message>
      )}
      {data.length > 0 && (
        <TableWrapper>
          <ResultsTable>
            <ResultsTableHeader>
              <ResultsTableHeader.Row>
                <ResultsTableHeader.Ceil>№</ResultsTableHeader.Ceil>
                <ResultsTableHeader.Ceil>Дата</ResultsTableHeader.Ceil>
                <ResultsTableHeader.Ceil>Время</ResultsTableHeader.Ceil>
              </ResultsTableHeader.Row>
            </ResultsTableHeader>
            <ResultsTableBody>
              {data.slice(0, 10).map((row, i) => (
                <ResultsTableBody.Row key={i}>
                  <ResultsTableBody.Ceil>{i + 1}</ResultsTableBody.Ceil>
                  <ResultsTableBody.Ceil>{row.date}</ResultsTableBody.Ceil>
                  <ResultsTableBody.Ceil>{row.time}</ResultsTableBody.Ceil>
                </ResultsTableBody.Row>
              ))}
            </ResultsTableBody>
          </ResultsTable>
        </TableWrapper>
      )}
    </Wrapper>
  )
}

export default LeaderboardBody
