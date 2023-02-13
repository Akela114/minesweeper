const createGameBoardMask = (width, height) => {
  const boardMask = new Array(height)
    .fill(null)
    .map(() =>
      new Array(width).fill({
        isVisible: false,
        isHighlighted: false,
        status: 'none',
      }),
    )

  return boardMask
}

export default createGameBoardMask
