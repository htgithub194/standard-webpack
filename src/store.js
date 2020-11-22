import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../component/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})