import toggleGameBoardMaskHighlight from './toggleGameBoardMaskHighlight'
import updateGameBoardMask from './updateGameBoardMask'

const updateGameBoardMaskAdjacent = (prevMask, board, ceil) => {
  const [y, x] = ceil

  if (!prevMask[y][x].isVisible) return prevMask

  const height = prevMask.length
  const width = prevMask[0].length

  const numOfAdjacentMines = board[y][x]
  let numOfAdjacentFlags = 0
  const ceilsToUpdate = []

  for (let yAdj = -1; yAdj < 2; yAdj++) {
    if (y + yAdj < 0 || y + yAdj >= height) {
      continue
    }
    for (let xAdj = -1; xAdj < 2; xAdj++) {
      if (
        x + xAdj < 0 ||
        x + xAdj >= width ||
        prevMask[y + yAdj][x + xAdj].isVisible
      ) {
        continue
      }
      if (prevMask[y + yAdj][x + xAdj].status === 'flag') {
        numOfAdjacentFlags++
      } else {
        ceilsToUpdate.push([y + yAdj, x + xAdj])
      }
    }
  }

  if (numOfAdjacentFlags !== numOfAdjacentMines) {
    return toggleGameBoardMaskHighlight(prevMask, ceil)
  }

  return toggleGameBoardMaskHighlight(
    updateGameBoardMask(prevMask, board, ceilsToUpdate),
    ceil,
  )
}

export default updateGameBoardMaskAdjacent
