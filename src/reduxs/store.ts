/**
 * src\reduxs\store.ts
 */
import { configureStore } from "@reduxjs/toolkit";
import personSlice from "reduxToolkit/features/userstate/userSlice";

export const store = configureStore({
    reducer: {
        comments:  personSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself;
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
