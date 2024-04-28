import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "../reducers";

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
