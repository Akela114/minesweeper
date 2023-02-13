import toggleGameBoardMaskFlag from './toggleGameBoardMaskFlag'

describe('toggleGameBoardMaskFlag Function', () => {
  const exampleMask = new Array(4)
    .fill(null)
    .map(() =>
      new Array(4).fill({
        isVisible: false,
        status: 'none',
        isHighlighted: false,
      }),
    )

  test('Correctly toggles status if parameters are correct', () => {
    const updatedMask1 = toggleGameBoardMaskFlag(exampleMask, [0, 0])
    expect(updatedMask1[0][0].status).toBe('flag')
    const updatedMask2 = toggleGameBoardMaskFlag(updatedMask1, [0, 0])
    expect(updatedMask2[0][0].status).toBe('question')
    const updatedMask3 = toggleGameBoardMaskFlag(updatedMask2, [0, 0])
    expect(updatedMask3[0][0].status).toBe('none')
  })
})
