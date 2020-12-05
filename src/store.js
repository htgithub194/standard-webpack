import { configureStore } from '@reduxjs/toolkit'
import createSocketIoMiddleware from 'redux-socket.io';

import io from 'socket.io-client';
let socket = io('http://localhost:9999');
let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

import counterReducer from 'Component/counter/counterSlice'
import thunkReducer from 'Component/thunk/thunkSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    thunk: thunkReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketIoMiddleware),
})