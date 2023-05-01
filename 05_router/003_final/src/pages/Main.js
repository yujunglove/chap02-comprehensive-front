import { Link } from "react-router-dom";
import { useState } from "react";

function Main() {
  const [activeMenu, setActiveMenu] = useState("");

  const [selectedMenu, setSelectedMenu] = useState('myPage');

  const handleClick = (menuName) => {
    setActiveMenu(menuName);
  };
  

  return (
    <body>
    <div>
      <div className="mainProfil">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="nemo"></div>
        <div className="memberName1">어트랙션-A 석이현</div>
        <div className="memberName2">000-0000-0000</div>
      </div>
      <div className="menu" style={{ marginTop: "-20px"}}>
      <Link to="/movie">
      <div className="myPage">마이페이지</div>
        </Link>
        <Link to="/mail">
          <div className="mail"><img className="menuIcon" src="image/MyPage.png"></img>급여 내역</div>
        </Link>
        <Link to="/">
          <div className="home">일정</div>
        </Link>
        <Link to="/">
          <div className="home"> <img src=""/>게시판</div>
        </Link>
        <Link to="/">
          <div className="home">직원</div>
        </Link>
        <Link to="/">
          <div className="home">장비 & 리프트 관리</div>
        </Link>
        <Link to="/">
          <div className="home" >전자 결재</div>
        </Link>
        <Link to="/">
          <div className="home">직원 교육</div>
        </Link>
      </div>
    </div>

    <div className="menu2">
    <div class="line"></div>
  <img className="circle4" src="image/circle.png"></img>
    </div>
    
      <div class="title1">
      <div class="title2">
          <b>마이페이지</b>
        </div>
        <div
          class={`navbar2 ${activeMenu === "info" ? "active" : ""}`}
          onClick={() => handleClick("info")}
        >
          나의 정보
        </div>
        <div
          class={`navbar2 ${activeMenu === "todo" ? "active" : ""}`}
          onClick={() => handleClick("todo")}
        >
          할 일
        </div>
        <div
          class={`navbar2 ${activeMenu === "ticket" ? "active" : ""}`}
          onClick={() => handleClick("ticket")}
        >
          식권 조회
        </div>
        <div
          class={`navbar2 ${activeMenu === "board" ? "active" : ""}`}
          onClick={() => handleClick("board")}
        >
          부서 게시판
        </div>
          <div class="navbar2"></div>
          <hr></hr>
    </div>

    </body>
  );
}

export default Main;
