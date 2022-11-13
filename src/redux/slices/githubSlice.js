import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    isLoading: false,
    reposInfo: [],
    error: null,
}

export const githubSlice  = createSlice({
    name: "githubSlice",
    initialState,
    reducers: {
      setIsLoading: (state, { payload }) => {
        state.isLoading = payload;
      },
      addRepoInfo: (state, { payload }) => {
          state.reposInfo = payload;
      },
      addError: (state, { payload }) => {
        state.error = payload;
      },
    }
})



export const {
    setIsLoading,
    addRepoInfo,
    addError
  } = githubSlice.actions;
  export default githubSlice.reducer;