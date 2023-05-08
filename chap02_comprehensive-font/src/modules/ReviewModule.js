import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = {};

/* 액션 */
const GET_REVIEWS = "review/GET_REVIEWS";
const GET_REVIEW = "review/GET_REVIEW";

export const {
  review: { getReviews, getReview },
} = createActions({
  [GET_REVIEWS]: (res) => res.data,
  [GET_REVIEW]: (res) => res.data,
});

/* 리듀서 */
const reviewReducer = handleActions(
  {
    [GET_REVIEWS]: (state, { payload }) => payload,
    [GET_REVIEW]: (state, { payload }) => ({ review: payload }),
  },
  initialState
);

export default reviewReducer;
