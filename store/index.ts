import { configureStore } from "@reduxjs/toolkit";
import { search, ISearchReducer } from "../reducers/search.reducer";

export interface IRootReducer {
  search: ISearchReducer;
}

export const store = configureStore({
  reducer: { search }
});
