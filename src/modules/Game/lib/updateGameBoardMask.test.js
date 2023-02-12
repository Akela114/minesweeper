import updateGameBoardMask from './updateGameBoardMask'

describe('updateGameBoardMask Function', () => {
  const exampleMask = new Array(4)
    .fill(null)
    .map(() => new Array(4).fill({ isVisible: false, status: 'none' }))

  const exampleBoard = [
    [1, 1, 2, 'M'],
    [1, 'M', 3, 2],
    [1, 2, 'M', 1],
    [0, 1, 1, 1],
  ]

  describe('Correctly updates mask if parameters are correct', () => {
    test('If passed ceil is a mine', () => {
      const updatedMask = updateGameBoardMask(exampleMask, exampleBoard, [
        [0, 3],
      ])
      const expectedMask = new Array(4)
        .fill(null)
        .map(() => new Array(4).fill({ isVisible: true, status: 'none' }))
      expect(updatedMask).toStrictEqual(expectedMask)
    })

    test('If passed ceil equals to number > 0', () => {
      const updatedMask = updateGameBoardMask(exampleMask, exampleBoard, [
        [0, 0],
      ])
      const expectedMask = exampleMask.map((row, y) =>
        row.map((ceil, x) =>
          y !== 0 || x !== 0 ? { ...ceil } : { ...ceil, isVisible: true },
        ),
      )
      expect(updatedMask).toStrictEqual(expectedMask)
    })

    test('If passed ceil equals to 0', () => {
      const updatedMask = updateGameBoardMask(exampleMask, exampleBoard, [
        [3, 0],
      ])
      const expectedToBeVisible = [
        [2, 0],
        [2, 1],
        [3, 0],
        [3, 1],
      ]
      const expectedMask = exampleMask.map((row, y) =>
        row.map((ceil, x) =>
          !expectedToBeVisible.find(([yF, xF]) => yF === y && xF === x)
            ? { ...ceil }
            : { ...ceil, isVisible: true },
        ),
      )
      expect(updatedMask).toStrictEqual(expectedMask)
    })
  })
})
