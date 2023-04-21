/* Link 컴포넌트를 통한 다른 페이지 링크 설정 */
import { Link } from "react-router-dom";

function Main() {
    return (
        <div>
            <h1>메인</h1>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/about">소개</Link>
                <Link to="/menu">메뉴목록</Link>
            </nav>
        </div>
    );
}

export default Main;