import { Post } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PostsState {
  posts: Post[] | null;
  viewingPost: Post | null;
}

const initialState: PostsState = {
  posts: null,
  viewingPost: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[] | null>) => {
      state.posts = action.payload;
    },
    setViewingPost: (state, action: PayloadAction<Post | null>) => {
      state.viewingPost = action.payload;
    },
  },
});

export const { setPosts, setViewingPost } = postsSlice.actions;

export default postsSlice.reducer;
