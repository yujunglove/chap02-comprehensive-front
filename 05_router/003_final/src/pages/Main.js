import { Link } from "react-router-dom";

function Main() {
  return (
    <body>
    <div>
      <div className="mainProfil">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="nemo"></div>
        <div className="memberName">어트랙션-A 석이현</div>
      </div>
      <div className="menu" style={{ marginTop: "-20px" }}>
        <Link to="/movie">
          <div className="myPage">마이페이지</div>
        </Link>
        <Link to="/mail">
          <div className="mail">메일</div>
        </Link>
        <Link to="/">
          <div className="home">일정</div>
        </Link>
        <Link to="/">
          <div className="home">게시판</div>
        </Link>
        <Link to="/">
          <div className="home">직원 검색</div>
        </Link>
        <Link to="/">
          <div className="home">급여 내역</div>
        </Link>
        <Link to="/">
          <div className="home">전자 결재</div>
        </Link>
        <Link to="/">
          <div className="home">교육 관리</div>
        </Link>
      </div>
    </div>



    <div className="container">

    </div>
    </body>
  );
}

export default Main;
