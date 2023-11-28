import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from '../component/slice'

const store = configureStore({
  reducer: {
    data: sliceReducer,
  },
})

export default store