const updateGameBoardMask = (prevMask, board, ceils) => {
  const height = board.length
  const width = board[0].length

  if (ceils.find(([y, x]) => board[y][x] === 'M')) {
    return new Array(board.length)
      .fill(null)
      .map(() =>
        new Array(board[0].length).fill({ isVisible: true, status: 'none' }),
      )
  }

  const newMask = prevMask.map((row) => row.map((ceil) => ({ ...ceil })))
  const pointsToUpdate = []

  for (let i = 0; i < ceils.length; i++) {
    const [y, x] = ceils[i]
    newMask[y][x].isVisible = true
    if (board[y][x] === 0) {
      for (let yAdj = -1; yAdj < 2; yAdj++) {
        if (y + yAdj < 0 || y + yAdj >= height) {
          continue
        }
        for (let xAdj = -1; xAdj < 2; xAdj++) {
          if (x + xAdj < 0 || x + xAdj >= width || (xAdj === 0 && yAdj === 0)) {
            continue
          }
          if (!newMask[y + yAdj][x + xAdj].isVisible) {
            pointsToUpdate.push([y + yAdj, x + xAdj])
          }
        }
      }
    }
  }

  if (pointsToUpdate.length > 0)
    return updateGameBoardMask(newMask, board, pointsToUpdate)

  return newMask
}

export default updateGameBoardMask
