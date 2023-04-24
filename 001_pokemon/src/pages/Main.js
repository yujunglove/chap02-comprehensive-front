import { Link } from "react-router-dom";

function Main() {

    return (
        <Link to="/pokemon">
            <div className="content-row">
                <h1>포켓몬들 선택하러 가기</h1>
            </div>
        </Link>
    );
}

export default Main;