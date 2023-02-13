import toggleGameBoardMaskHighlight from './toggleGameBoardMaskHighlight'

describe('toggleGameBoardMaskHighlight Function', () => {
  const exampleMask = [
    [
      {
        isVisible: true,
        status: 'none',
        isHighlighted: false,
      },
      {
        isVisible: true,
        status: 'none',
        isHighlighted: false,
      },
    ],
    [
      {
        isVisible: false,
        status: 'flag',
        isHighlighted: false,
      },
      {
        isVisible: false,
        status: 'none',
        isHighlighted: false,
      },
    ],
  ]

  test('Correctly toggles isHighlighted property if parameters are correct', () => {
    const expectedMask = [
      [
        {
          isVisible: true,
          status: 'none',
          isHighlighted: false,
        },
        {
          isVisible: true,
          status: 'none',
          isHighlighted: false,
        },
      ],
      [
        {
          isVisible: false,
          status: 'flag',
          isHighlighted: true,
        },
        {
          isVisible: false,
          status: 'none',
          isHighlighted: true,
        },
      ],
    ]

    const updatedMask1 = toggleGameBoardMaskHighlight(exampleMask, [0, 0])
    expect(updatedMask1).toStrictEqual(expectedMask)
    const updatedMask2 = toggleGameBoardMaskHighlight(updatedMask1, [0, 0])
    expect(updatedMask2).toStrictEqual(exampleMask)
  })
})
