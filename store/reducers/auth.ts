import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types/auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

type AuthCaseReducer<T = void> = CaseReducer<AuthState, PayloadAction<T>>;

type AuthCaseReducers = {
    login: AuthCaseReducer<AuthState>;
    logout: AuthCaseReducer;
};

const initialState = {};

const extraReducers = {};

export const { actions, ...slice } = createSlice<AuthState, AuthCaseReducers, 'auth', typeof extraReducers>({
    name: "auth",
    initialState,
    reducers: {
      login(state, { payload }) {
        return payload;
      },
      logout() {
        return initialState;
      },
    },
  });

const reducer = persistReducer(
    {
        key: "green-eshop-auth",
        version: 1,
        storage
    },
    slice.reducer,
);
export default reducer;