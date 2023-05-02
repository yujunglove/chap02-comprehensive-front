import { postRegister } from "../modules/MemberModule";

const SERVER_IP = `${process.env.REACT_APP_RESTAPI_SERVER_IP}`;
const SERVER_PORT = `${process.env.REACT_APP_RESTAPI_SERVER_PORT}`;
const PRE_URL = `http://${SERVER_IP}:${SERVER_PORT}`;

/* 회원 가입 API 호출 */
export const callRegisterAPI = (form) => {

    const requestURL = `${PRE_URL}/auth/signup`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(form)
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI result : ', result);
        dispatch(postRegister(result));
    }
}

/* 로그인 API 호출 */
export const callLoginAPI = (form) => {

    const requestURL = `${PRE_URL}/auth/login`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(form)
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callLoginAPI result : ', result);
        
    }
}
























