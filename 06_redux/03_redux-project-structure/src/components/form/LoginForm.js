import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { callLoginAPI } from "../../api/UserAPICalls";
import { useNavigate } from 'react-router-dom';

function LoginForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.userReducer);
    const isLogin = !!localStorage.getItem('isLogin');

    /* input 태그 입력 값 state 관리 */
    const [loginInfo, setLoginInfo] = useState({
        id : '',
        password : ''
    });

    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {
        setLoginInfo(
            {
                ...loginInfo,
                [e.target.name] : e.target.value
            }
        );
    }

    /* 로그인 버튼 클릭 시 동작 */
    const onClickHandler = () => {
        dispatch(callLoginAPI(loginInfo));
    }

    /* 로그인 후 성공/실패 동작 */
    useEffect(
        () => {
            if(isLogin) {
                navigate('/');
            } else if(result?.message) {
                alert('아이디와 비밀번호를 확인해주세요');
                setLoginInfo({
                    id : '',
                    password : ''
                });
            }
        },
        [result]
    );

    return (
        <div>
            <label>ID : </label>
            <input
                type="text"
                name="id"
                onChange={ onChangeHandler }
                value={ loginInfo.id }
            />
            <label>PASSWORD : </label>
            <input
                type="password"
                name="password"
                onChange={ onChangeHandler }
                value={ loginInfo.password }
            />
            <button onClick={ onClickHandler }>로그인</button>
        </div>
    );

}

export default LoginForm;