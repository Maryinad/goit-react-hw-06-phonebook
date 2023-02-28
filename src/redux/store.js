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
import { rootReducer } from './rootReducer';

const contactsReducerConfig = {
  key: 'data',
  storage,
  blacklist: ['filter'],
};

// export const rootReducer = combineReducers({
//   phonebook: persistReducer(contactsReducerConfig, phoneReducer),
// });

export const store = configureStore({
  reducer: persistReducer(contactsReducerConfig, rootReducer),

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
