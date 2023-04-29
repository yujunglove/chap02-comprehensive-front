import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
const GET_PRODUCTS = 'product/GET_PRODUCTS';

export const { product : { getProducts } } = createActions({
    [GET_PRODUCTS] : (res) => res.data
}); 

/* 리듀서 저장되게 되는거 */
const productReducer = handleActions(
    {
        [GET_PRODUCTS] : (state, {payload}) => payload
    }
, initialState);

export default productReducer;