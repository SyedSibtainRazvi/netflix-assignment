import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import baseURL from "../../Api/baseURL";
import Requests from "../../requests";


export const fetchNetflixOriginals = createAsyncThunk(
  "randomposter/fetchTrending",
  async () => {
    const response = await baseURL.get(`${Requests.requestTrending}`);
    return response.data.results[
      Math.floor(Math.random() * response.data.results.length - 1)
    ];
  }
);

const initialState = {
  NetflixOriginals: [],
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNetflixOriginals.fulfilled]: (state, { payload }) => {
      state.NetflixOriginals = payload;
    },
  },
});

// const moviesSlice = createSlice({
//   name: 'movies',
//   initialState,
//   extraReducers: builder => {
//     builder.addCase(fetchNetflixOriginals.pending, state => {
//       state.loading = true
//     })
//     builder.addCase(fetchNetflixOriginals.fulfilled, (state, action) => {
//       state.loading = false
//       state.NetflixOriginals = action.payload
//     })
//   }
// })
  

export default moviesSlice.reducer;

export const NetflixOriginals = (state) => state.movie.NetflixOriginals;