import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  let post = '강남우동맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따따봉] = useState(0);
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
        <h4> {글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='modal'>
        <h4>제목 </h4>
        <p>날짜</p>
        <p>상세내용11</p>
      </div>
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
        <Modal></Modal>
        <ModalSecond></ModalSecond>
    </div>
  );
}
let ModalSecond =()=>{
  /* 이렇게 만드는 컴포넌트 */
  return (<div className='modal'>
  <h4>제목 </h4>
  <p>날짜</p>
  <p>상세내용22</p>
</div>
)
}

function Modal() {
  return (<div className='modal'>
    <h4>제목 </h4>
    <p>날짜</p>
    <p>상세내용33</p>
  </div>
  /*  이렇게 생성된 컴포넌트는 <Modal></Modal> 로 사용 할 수 있음. */
  )
}
export default App;
