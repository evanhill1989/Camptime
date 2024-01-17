import { COMMENTS } from "../../app/shared/COMMENTS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentsAray: COMMENTS,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
});

export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
  return state.comments.commentsAray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
