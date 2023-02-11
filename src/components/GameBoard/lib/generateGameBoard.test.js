import generateGameBoard from './generateGameBoard'

describe('generateGameBoard Function', () => {
  describe('Generates a valid board if parameters are correct', () => {
    let randomMock

    beforeEach(() => {
      randomMock = jest.spyOn(window.Math, 'random')
    })

    test('Without no mines', () => {
      const generatedBoard = generateGameBoard(4, 4, 0)
      const expectedBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]
      expect(randomMock.mock.calls).toHaveLength(0)
      expect(generatedBoard).toStrictEqual(expectedBoard)
    })

    test('Without restrictions passed', () => {
      randomMock
        .mockReturnValueOnce(0.51)
        .mockReturnValueOnce(0.52) // [2, 2]
        .mockReturnValueOnce(0.01)
        .mockReturnValueOnce(0.76) // [0, 3]
        .mockReturnValueOnce(0.26)
        .mockReturnValueOnce(0.27) // [1, 1]

      const generatedBoard = generateGameBoard(4, 4, 3)
      const expectedBoard = [
        [1, 1, 2, 'M'],
        [1, 'M', 3, 2],
        [1, 2, 'M', 1],
        [0, 1, 1, 1],
      ]
      expect(randomMock.mock.calls).toHaveLength(6)
      expect(generatedBoard).toStrictEqual(expectedBoard)
    })

    test('With restrictions passed', () => {
      const randomMock = jest.spyOn(window.Math, 'random')

      randomMock
        .mockReturnValueOnce(0.51)
        .mockReturnValueOnce(0.52) // [2, 2]
        .mockReturnValueOnce(0.01)
        .mockReturnValueOnce(0.76) // [0, 3] should be restricted
        .mockReturnValueOnce(0.53)
        .mockReturnValueOnce(0.77) // [2, 3]
        .mockReturnValueOnce(0.28)
        .mockReturnValueOnce(0.76) // [1, 3] should be restricted
        .mockReturnValueOnce(0.26)
        .mockReturnValueOnce(0.27) // [1, 1]

      const generatedBoard = generateGameBoard(4, 4, 3, [[0, 3]])
      const expectedBoard = [
        [1, 1, 1, 0],
        [1, 'M', 3, 2],
        [1, 2, 'M', 'M'],
        [0, 1, 2, 2],
      ]
      expect(randomMock.mock.calls).toHaveLength(10)
      expect(generatedBoard).toStrictEqual(expectedBoard)
    })

    afterEach(() => {
      randomMock.mockRestore()
    })
  })
})
