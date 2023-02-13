import { configureStore } from '@reduxjs/toolkit'
import { leaderboardReducer } from './slices/leaderboard'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistLeaderboardConfig = {
  key: 'leaderBoard',
  storage,
}

const persistedLeaderBoardReducer = persistReducer(
  persistLeaderboardConfig,
  leaderboardReducer,
)

const store = configureStore({
  reducer: persistedLeaderBoardReducer,
})

export const persistor = persistStore(store)
export default store
