import { createActions, handleActions } from "redux-actions";


//초기값
const initialState = {};

//액션
const POST_REGISTER = 'member/POST_REGISTER';

export const {member : {postRegister}} = createActions({
    [POST_REGISTER] : res => res
});

//리듀서
const memberReducer = handleActions({
    [POST_REGISTER] : (state, {payload}) => ({ regist : payload})
}, initialState);

export default memberReducer;