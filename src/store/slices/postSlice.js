import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    viewType: "list",
    loading: false,
    currentPage: 1,
    postsPerPage: 6,
  },
  reducers: {
    toggleView: (state) => {
      state.viewType = state.viewType === "list" ? "grid" : "list";
    },
    nextPage: (state) => {
      state.currentPage++;
    },
    prevPage: (state) => {
      if (state.currentPage > 1) state.currentPage--;
    },
    removePost: (state, action) => {
      state.list = state.list.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export const { toggleView, nextPage, prevPage, removePost } = postSlice.actions;
export default postSlice.reducer;
