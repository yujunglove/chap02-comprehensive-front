import { NavLink, useNavigate } from "react-router-dom";
import HeaderCSS from './Header.module.css';
import { useState } from "react";

function Header() {

    /* 로그인 로직 작성 후 변경할 예정 */
    const isLogin = false;
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    /* 로고 클릭 시 메인 페이지로 이동  */
    const onClickLogoHandler = () => {
        navigate("/");
    }
    
    /* 검색어 입력 값 상태 저장 */
    const onSearchChangeHandler = (e) => {
        setSearch(e.target.value);
    }




    function BeforeLogin() {
        return (
            <div>
                <NavLink to="/login">로그인</NavLink> | <NavLink to="register">회원가입</NavLink>
            </div>
        );
    }

    function AfterLogin() {
        return (
            <div>
                <button>마이페이지</button> | <button>로그아웃</button>
            </div>
        );
    }

    return (
        <>
            <div className={HeaderCSS.HeaderDiv}>
                <button 
                    className={ HeaderCSS.LogoBtn }
                    onClick={ onClickLogoHandler }
                >
                    GREEDY
                </button>
                <input 
                    className={ HeaderCSS.InputStyle } 
                    type="text" 
                    placeholder="검색"
                    onChange={onSearchChangeHandler}
                />
                { !isLogin ? <BeforeLogin/> : <AfterLogin/> }
            </div>
        </>
    );

}

export default Header;