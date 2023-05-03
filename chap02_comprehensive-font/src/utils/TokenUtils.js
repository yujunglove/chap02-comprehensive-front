import jwt_decode from "jwt-decode";

export function decodeJwt() {
    const accessToken = window.localStorage.getItem('accessToken');
    return accessToken && jwt_decode(accessToken);
    
    //accessToken이 존재할 경우 디코딩 한다.
}

export function isLogin() {
    //로그인 여부 판단
    const token = decodeJwt();
    console.log('token : ', token);
    //유효시간보다 현재 시간이 크면 더이상 로그인 상태로 두면 안된다.
    return !(token === undefined || token === null || token.exp * 1000 < Date.now());
}

export function isAdmin() {
    const token = decodeJwt();
    return (token && token.exp * 1000 > Date.now() && token.auth[0] === 'ROLE_ADMIN');
}