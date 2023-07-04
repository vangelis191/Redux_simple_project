import { configureStore } from '@reduxjs/toolkit';
import countersReducer from './counter';

export default configureStore({
  reducer: {
    counter: countersReducer,
  },
});
