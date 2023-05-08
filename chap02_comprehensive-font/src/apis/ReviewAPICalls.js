import { getReview, getReviews, postReview } from "../modules/ReviewModule";

const SERVER_IP = `${process.env.REACT_APP_RESTAPI_SERVER_IP}`;
const SERVER_PORT = `${process.env.REACT_APP_RESTAPI_SERVER_PORT}`;
const PRE_URL = `http://${SERVER_IP}:${SERVER_PORT}/api/v1`;


export const callReviewWriteAPI = (form) => {
  const requestURL = `${PRE_URL}/reviews`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer" + window.localStorage.getItem("accessToken"),
      },
      body : JSON.stringify(form)
    }).then((response) => response.json());

    if (result.status === 200) {
      console.log("[ReviewAPICalls] callReviewDetailAPI result : ", result);
      dispatch(postReview(result));
    }
  };
};



export const callReviewsAPI = ({ productCode, currentPage }) => {
  const requestURL = `${PRE_URL}/reviews/product/${productCode}?page=${currentPage}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL).then((response) => response.json());

    console.log("[ReviewAPICalls] callReviewsAPI result : ", result);

    if (result.status === 200) {
      dispatch(getReviews(result));
    }
  };
};

export const callReviewDetailAPI = ({ reviewCode }) => {
  const requestURL = `${PRE_URL}/reviews/${reviewCode}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    if (result.status === 200) {
      console.log("[ReviewAPICalls] callReviewDetailAPI result : ", result);
      dispatch(getReview(result));
    }
  };
};

export const callReviewCheckAPI = ({ productCode }) => {
  const requestURL = `${PRE_URL}/reviews/member/product/${productCode}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());

    if (result.status === 200) {
      console.log("[ReviewAPICalls] callReviewCheckAPI result : ", result);
      dispatch(getReview(result));
    }
  };
};
