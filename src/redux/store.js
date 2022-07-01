import { configureStore } from '@reduxjs/toolkit'
import {combineReducers } from 'redux'
import { persistStore,persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import counterSlice from "./counter";
import userSlice from "./user";

const persistConfig = {
    key: 'music',
    storage
}

const myPersistReducer = persistReducer(persistConfig,combineReducers({
    counter: counterSlice,
    user: userSlice
}))

export const store = configureStore({
    reducer: myPersistReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
    })
})
export const persis = persistStore(store)
