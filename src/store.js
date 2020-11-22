import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'Component/counter/counterSlice'
import thunkReducer from 'Component/thunk/thunkSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    thunk: thunkReducer
  }
})