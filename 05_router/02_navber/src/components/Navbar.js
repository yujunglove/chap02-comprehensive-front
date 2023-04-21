/* NavLink 활용
Link 컴포넌트와 거의 유사하게 사용할 수 있다.
단, 현재의 Nav의 상태가 active인지에 대한 값을 이용하여 스타일을 조작하거나
클래스 이름을 변경할 수 있다. */

import { NavLink } from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backgroundColor : 'orangered'
    };

    return(
        <div>
            <li><NavLink to="/" style={ ({ isActive }) => isActive ? activeStyle : undefined }>HOME</NavLink></li>
            <li><NavLink to="/about" style={ ({ isActive }) => isActive ? activeStyle : undefined }>소개</NavLink></li>
            <li><NavLink to="/menu" style={ ({ isActive }) => isActive ? activeStyle : undefined }>메뉴목록</NavLink></li>
        </div>
    );
}

export default Navbar;