import createGameBoardMask from './createGameBoardMask'

describe('createGameBoardMask Function', () => {
  test('Create a valid board masks if parameters are correct', () => {
    const generatedBoard = createGameBoardMask(4, 4)
    const expectedBoard = new Array(4)
      .fill(null)
      .map(() => new Array(4).fill({ isVisible: false, status: 'none' }))
    expect(generatedBoard).toStrictEqual(expectedBoard)
  })
})
