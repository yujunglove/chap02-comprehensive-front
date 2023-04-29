
// const RESTAPI_SERVER_IP = `${process.env.RESTAPI_SERVER_IP}`;
// const RESTAPI_SERVER_PORT =`${process.env.RESTAPI_SERVER_PORT}`;
// const PRE_URL = `http://${RESTAPI_SERVER_IP}:${RESTAPI_SERVER_PORT}/api/v1`;

import { getProducts } from "../modules/ProductModule";

//안 넘어온다면 1이라는 값을 기본 값으로 쓰겠다.
export const callProductListAPI = ({ currentPage = 1 }) => {
    // const requestURL = `${PRE_URL}/products?page=${currentPage}`;
    const requestURL = `http://localhost:8001/api/v1/products?page=${currentPage}`;

    return async (dispatch, getState) => {

        //비동기적인 호출 바디부분을 가져오기 위해서는 json으로 뽑아내는 것이 중요
        const result = await fetch(requestURL).then(response => response.json());

        if (result.status === 200) {
            console.log('[dProductAPICalls] : callProductListAPI result : ', result);
            dispatch(getProducts(result));
          }
        
            //getProducts호출 result라는 데이터를 전달하면서
        }
    }
