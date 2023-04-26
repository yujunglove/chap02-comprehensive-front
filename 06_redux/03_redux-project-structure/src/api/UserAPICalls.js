import { login } from "../modules/UserModule";
import { request } from "./API";

//로그인 정보 전달 받는 함수
export function callLoginAPI(loginInfo) {
    console.log('login api calls...');

    return async (dispatch, getState) => {

        const userList = await request('GET', '/user');

        //id와 password 일치 여부 확인
        //서버에서 이루어져야 하는 로직이지만 여기에서는 코드로 처리
        const result = await userList.find(
            user => user.id === loginInfo.id && user.password === loginInfo.password
    
            );
            console.log('login result : '. result);
            //반환을 잘 하면 액션 객체를 넘겨준다.
            dispatch(login(result));
    }
} 