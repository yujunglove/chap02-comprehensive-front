import { createActions, handleActions } from "redux-actions";

//초긱 ㅏㅄ
const initialState = {};

//액션 타입
const LOGIN = 'user/LOGIN';

//액션 함수
export const { user : { login }} = createActions({
    [LOGIN] : (res) => ({ res }) 
});

//리듀서 함수
const userReducer = handleActions({
    [LOGIN] : (state, {payload : {res}}) => {
        //id password가 일치 할 경우 res에 객체가 반환되지만 불일치할 경우는 undefined가 반환된다.
        if(res)
            localStorage.setItem('isLogin', true);
        else
            res = {message : 'LOGIN_FAIL'}
        return res;
    }
}, initialState);

export default userReducer;