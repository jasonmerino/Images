import { createAction } from "@reduxjs/toolkit";
import Config from "react-native-config";
import axios from "axios";

let timeout: number;

export const setImages = createAction<{ hits: any[]; searchText: string }>(
  "SET_IMAGES"
);

export function getImages(searchText: string) {
  return function(dispatch) {
    // set a debounce for requesting new image search
    // delay 400 ms
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(async function() {
      const url = `https://pixabay.com/api/?key=${Config.PIXABAY_KEY}&safesearch=true&q=${searchText}`;
      const response = await axios.get(url);
      dispatch(
        setImages({
          hits: response.data.hits,
          searchText
        })
      );
    }, 400);
  };
}
