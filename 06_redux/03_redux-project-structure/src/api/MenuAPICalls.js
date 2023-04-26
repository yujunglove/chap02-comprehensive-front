import { getMenu, getMenulist } from "../modules/MenuModules";
import { request } from "../api/API";

export function callGetMenuListAPI() {

    console.log('getMenuList api calls...');

    /* 반환 되는 비동기 처리 함수가 dispatch의 매개변수로 전달되게 되면 redux-thunk라는 미들웨어에서 호출 되게 된다. */
    
    return async (dispatch, getState) => {

        /* axios 라이브러리를 이용한 데이터 요청 */
         //1. 어떤 메소드로 요청할것인지 2. 도메인 뒤에 들어갈 요청 주소값,3. 넘기고 싶은 데이터 값
        const result = await request('GET', '/menu');
        console.log('getMenuList result : ', result);

        /* dispatch의 매개변수로 action 객체를 전달하여 store에 state를 저장하게 한다. (리듀서 함수 호출 됨) */
        dispatch(getMenulist(result));
    }
}

export function callGetMenuAPI(id) {

    console.log('getMenu api calls...');

    return async (dispatch, getState) => {
        
        const result = await request('GET', `/menu/${id}`);
        console.log('getMenu result : ', result);

        dispatch(getMenu(result));
    }

}
/*
useEffect 내에서 dispatch(func) 
-> middleware (redux-thunk)  : func 호출 
-> dispatch(action)
-> middleware(redux-thunk) : action 객체 넘기기 
-> middleware(redux-logger)
-> reducer 호출 
-> 반환 된 state가 store에 저장
*/