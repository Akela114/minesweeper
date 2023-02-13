import { createSlice } from '@reduxjs/toolkit'

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    results: {
      simple: [],
      medium: [],
      hard: [],
    },
  },
  reducers: {
    addResult(state, { payload: { difficulty, date, time } }) {
      const arrayToPush = state.results[difficulty]

      if (!arrayToPush) {
        return state
      }

      if (arrayToPush.length < 10) {
        arrayToPush.push({ date, time })
        arrayToPush.sort((a, b) => a.time - b.time)
      } else if (time < arrayToPush.at(-1).time) {
        arrayToPush.push({ date, time })
        arrayToPush.sort((a, b) => a.time - b.time).pop()
      }
    },
  },
})

export default leaderboardSlice
