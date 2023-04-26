import { createActions, handleActions } from 'redux-actions';

/* 초기 값 */
const initialState = {};

/* 액션 타입 */
const GET_MENULIST = 'menu/GET_MENULIST';
const GET_MENU = 'menu/GET_MENU';

/* 액션 함수 */
export const { menu : { getMenulist, getMenu } } = createActions({
    [GET_MENULIST] : (res) => ({ menulist : res }),
    [GET_MENU] : (res) => ({ menu : res })
});

/* 리듀서 함수 */
const menuReducer = handleActions({
    [GET_MENULIST] : (state, { payload }) => {
        return payload;
    },
    [GET_MENU] : (state, { payload }) => {
        return payload;
    }
}, initialState);

export default menuReducer;