import { combineReducers } from '@reduxjs/toolkit';
import { phoneReducer } from './phoneBook/phoneReducer';

import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './rootReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsReducerConfig = {
  key: 'data',
  storage,
  blacklist: ['filter'],
};

export const rootReducer = combineReducers({
  phonebook: persistReducer(contactsReducerConfig, phoneReducer),
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
