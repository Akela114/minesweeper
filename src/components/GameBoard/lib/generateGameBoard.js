const generateGameBoard = (
  width,
  height,
  numOfMines = 0,
  restrictions = [],
) => {
  const board = new Array(height).fill(null).map(() => new Array(width).fill(0))

  if (numOfMines === 0) return board

  for (let i = 0; i < numOfMines; i++) {
    const mineY = Math.trunc(Math.random() * height)
    const mineX = Math.trunc(Math.random() * width)

    const isRestricted = restrictions.find(
      ([restY, restX]) =>
        Math.abs(mineY - restY) < 2 && Math.abs(mineX - restX) < 2,
    )

    if (!isRestricted && board[mineY][mineX] === 0) {
      board[mineY][mineX] = 'M'
    } else {
      i--
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (board[y][x] === 'M') {
        continue
      }
      for (let yAdj = -1; yAdj < 2; yAdj++) {
        if (y + yAdj < 0 || y + yAdj >= height) {
          continue
        }
        for (let xAdj = -1; xAdj < 2; xAdj++) {
          if (x + xAdj < 0 || x + xAdj >= width) {
            continue
          }
          if (board[y + yAdj][x + xAdj] === 'M') {
            board[y][x]++
          }
        }
      }
    }
  }

  return board
}

export default generateGameBoard
