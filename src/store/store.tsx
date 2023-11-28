import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from '../component/Slice'

const store = configureStore({
  reducer: {
    data: SliceReducer,
  },
})

export default store