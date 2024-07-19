import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slice';


const store = configureStore({
  reducer: {
    form: userReducer,
  },
});

export default store;
