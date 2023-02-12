const toggleGameBoardMaskFlag = (prevMask, ceil) => {
  const [y, x] = ceil

  if (prevMask[y][x].isVisible) return prevMask

  const newMask = prevMask.map((row) => row.map((ceil) => ({ ...ceil })))
  const currentStatus = newMask[y][x].status
  newMask[y][x].status =
    currentStatus === 'none'
      ? 'flag'
      : currentStatus === 'flag'
      ? 'question'
      : 'none'

  return newMask
}

export default toggleGameBoardMaskFlag
