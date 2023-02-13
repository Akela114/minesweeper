import { configureStore } from '@reduxjs/toolkit'
import { leaderboardReducer } from './slices/leaderboard'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store
