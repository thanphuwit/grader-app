import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from '../component/slice'

const store = configureStore({
  reducer: {
    reducer: sliceReducer,
  },
})

export default store