import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  let post = '강남우동맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따따봉] = useState(0);
  let [modal, setModal] = useState(false);
  // 현재 ui 의 상태를 담아내는 자료형임.
  return (
    <div className="App">
      <div className="App-black-nav">
        <h4> ReactBlog</h4>
      </div>
      <button onClick={() => { 글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학']) }}> 글수정</button>
      {/* // 수정을 할 때 원본을 두고 수정하는게 좋음. 
      let copy = 글제목;
      글제목 */}
      {/* 일부만 바꾸도록 수정하는 법 */}
      <button onClick={() => {
        글제목[0] = '여자코트 추천';
        글제목변경(글제목);
      }} 수정1></button>
      <button onClick={() => {
        let copy = 글제목;
        copy[0] = '여자코트추천';
        글제목변경(copy)
      }} >수정안됨</button>
      {/* 수정안되는 이유. staty 는 소괄호 안에 있는 걸로 기존에 있는 걸 새롭게 바꿔줌
     바꿀때는 기존 state ==신규 state의 경우 변경이 안됨. 때문에 copy 를 한다고 하면 동일하기때문에
     안됨 
     arry/object 특징  
     변수 1 변수 2 의 화살표가 같으면 변수 1== 변수 2 는 true 가 나옴  */}
      {/* let copy = 글제목; 
     copy[0] = '여자코트 추천';
     console.log(copy == 글제목) 이 두개는 같은 것. */}
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy)
      }}>수정3</button>
      {/* ...을 넣으면 화살표를 새롭게 바꿔달란 뜻으로 새로운 state로 인식하게 됨. 
    기존의 state가 array 혹은 object 타입이라면  ...을 통해 새로운copy deep copy 가 되기 때문에 가능해짐.*/}
      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}> 가나다순 정렬</button>
      <div className="list">
        <h4> {글제목[0]}<span onClick={() => { 따따봉(따봉 + 1) }}>👍</span>{따봉}</h4>
        <p>2월 17일 발행임</p>
      </div>
      <div className="list">
        <h4> {글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(!modal)
        }}> {글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      { modal == true ? <Modal /> : null} 
      {/* 컴포넌트 modal 역할을 하는 컴포넌트 역할을함 
          1. function 작명(){}
          function 은 다른 함수 밖에 만들어야 함.
          작명은 대문자 
          2. funtion  안에 return() 만들기
          return 안에는 하나의 태그로 시작해서 하나의 태그로 끝나야함 두개 div 병렬은 Nooooo
         참고 1. div 를 여러개 넣고 싶으면 큰 div안에 넣으면 됨. 이때 의미없는 div가 되기때문에 <> </> 로 해도 됨.
         컴포넌트 언제쓰면 좋을까?
         - 반복적으로 사용하는 html 을 축약할때 
         - 큰 페이지들을 하나의 컴포넌트로
         - 자주 변경되는 html ui 등을 컴포넌트로 만들면 성능상 좋을 수도 있음.
         
         컴포넌트 단점.
         - state 가져다 쓸때 문제 생김
        

        */}
      
      {/* 동적인 UI만들기 3단계
          1. HTML , CSS 사용하여 미리 디자인 완성
          2. UI 의 현재 상태를 STATE로 저장 -> 어떻게 하나?
          3. STATE 에 따라 UI가 어떻게 보일지 작성
        2. 는 let [modal, setModal] = useState(); 방식으로 미리 지정하면 됨. 
        모달창의 경우는 보이고 안보이고의 상태기 때문에 ()안에 조건문 false로 줌.
        let [modal, setModal] = useState(false);
        state 가 fasle 면 안보이게 true 면 보이게 
        if(){} 특정경우에만 코드 실행하고 싶으면 if만 if를 쓸 수 없음 때문에 삼항연산자로 사용함.

        조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드 1== 1 ? '맞음' : '틀림'  과 같은 식으로 
        state가 TRUE 면 보여주고 NULL 은 아무것도 안남김. 
        스위치와 기걔를 만들어 준당므 스위치를 건드리면  떧
        3번째 제목을 누르면 모달창이 뜸.  

        */}
        {/*  */}
    </div>
  );
}
let Modal = () => {
  /* 이렇게 만드는 컴포넌트 */
  return (<div className='modal'>
    <h4>제목 </h4>
    <p>날짜</p>
    <p>상세내용22</p>
  </div>
  )
}


export default App;
