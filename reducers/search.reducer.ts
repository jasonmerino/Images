import { createReducer } from "@reduxjs/toolkit";
import { setImages } from "../actions/search.actions";
import { IPixabayHit } from "../types/pixabay-types";

export interface ISearchReducer {
  searches: {
    [searchTerm: string]: IPixabayHit[];
  };
}

const initialState: ISearchReducer = {
  searches: {}
};

export const search = createReducer(initialState, {
  [setImages.type]: function setResults(state, action) {
    state.searches[action.payload.searchText] = action.payload.hits;
  }
});
