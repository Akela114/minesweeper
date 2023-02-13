const toggleGameBoardMaskHighlight = (prevMask, ceil) => {
  const [y, x] = ceil

  if (!prevMask[y][x].isVisible) return prevMask

  const newMask = prevMask.map((row) => row.map((ceil) => ({ ...ceil })))

  const height = newMask.length
  const width = newMask[0].length
  for (let yAdj = -1; yAdj < 2; yAdj++) {
    if (y + yAdj < 0 || y + yAdj >= height) {
      continue
    }
    for (let xAdj = -1; xAdj < 2; xAdj++) {
      if (x + xAdj < 0 || x + xAdj >= width) {
        continue
      }
      if (!newMask[y + yAdj][x + xAdj].isVisible) {
        newMask[y + yAdj][x + xAdj].isHighlighted =
          !newMask[y + yAdj][x + xAdj].isHighlighted
      }
    }
  }

  return newMask
}

export default toggleGameBoardMaskHighlight
