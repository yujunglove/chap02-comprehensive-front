function sendMessage() {
    const message = userinput.value;
  
    // 사용자가 입력한 메시지를 화면에 표시
    appendMessage("나", message);
  
    // 사용자가 "상담원" 또는 "고객센터"라는 단어를 입력한 경우, 상담원 연결
    if (message.includes("상담원") || message.includes("고객센터")) {
      connectToOperator();
    } else {
      // 챗봇이 응답하는 메시지를 화면에 표시 (임시로 "안녕하세요"라는 메시지로 대신합니다)
      appendMessage("챗봇", "안녕하세요");
  
      // 사용자 입력창을 초기화
      userinput.value = "";
    }
  }
  
  function connectToOperator() {
    // 상담원 연결 메시지를 화면에 표시
    appendMessage("챗봇", "상담원 연결 중입니다. 잠시만 기다려주세요...");
  
    // 5초 후에 상담원과 연결된 것으로 가정하고, 채팅 내용을 초기화
    setTimeout(() => {
      appendMessage("상담원", "안녕하세요. 무엇을 도와드릴까요?");
      chatlog.innerHTML = "";
    }, 5000);
  }
  