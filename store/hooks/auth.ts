import { useDispatch } from "react-redux";

import { useStoreSelector } from "./common";
import { actions } from "../reducers/auth";
import { AuthState } from "../types/auth";

export function useLogin() {
  const dispatch = useDispatch();
  return (payload: AuthState) => dispatch(actions.login(payload));
}

export function useLogout() {
  const dispatch = useDispatch();
  return () => dispatch(actions.logout());
}

export function useAccessToken() {
  return useStoreSelector(({ auth }) => auth.accessToken);
}
