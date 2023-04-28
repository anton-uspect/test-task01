import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { beerApi } from './services/beer';

export const store = configureStore({
  reducer: {
    [beerApi.reducerPath]: beerApi.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(beerApi.middleware),
});

setupListeners(store.dispatch);
