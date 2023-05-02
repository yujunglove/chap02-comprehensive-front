import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/form/LoginForm";
import LoginCSS from './Login.module.css';

function Login() {
    
    const navigate = useNavigate;

    //회원 가입 버튼 클릭 시 회원가입 페이지로 이동
    const onClickRegisterHandler = () => {
        navigate('/register');
    }

    return (
        <div className={ LoginCSS.backgroundDiv }>
            <div className={ LoginCSS.loginDiv }>
                <LoginForm/>
                <button
                    style={ { border: 'none', margin: 0, fontSize: '10px', height: '10px'} }
                    onClick={ onClickRegisterHandler }
                >
                    회원가입
                </button>
            </div>
        </div>
    );

}

export default Login;