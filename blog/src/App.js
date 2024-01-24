import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  let post ='강남우동맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉,따따봉] = useState(0);
  return (
    <div className="App">
      <div className="App-black-nav">
        <h4> ReactBlog</h4>
      </div>
      <button onClick={()=>{글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학'])}}> 글수정</button>
      {/* // 수정을 할 때 원본을 두고 수정하는게 좋음. 
      let copy = 글제목;
      글제목 */}
      {/* 일부만 바꾸도록 수정하는 법 */}
      <button onClick={()=>{글제목[0] = '여자코트 추천';
      글제목변경(글제목);}} 수정1></button>
      <button onClick={()=>{let copy =글제목;
     copy[0]='여자코트추천';
     글제목변경(copy)}} 수정안됨></button>
     {/* 수정안되는 이유. staty 는 소괄호 안에 있는 걸로 기존에 있는 걸 새롭게 바꿔줌
     바꿀때는 기존 state ==신규 state의 경우 변경이 안됨. 때문에 copy 를 한다고 하면 동일하기때문에
     안됨 
     arry/object 특징  
     변수 1 변수 2 의 화살표가 같으면 변수 1== 변수 2 는 true 가 나옴  */}
     {/* let copy = 글제목; 
     copy[0] = '여자코트 추천';
     console.log(copy == 글제목) 이 두개는 같은 것. */}
     <button onClick={()=>{let copy =[...글제목];
    copy[0] = '여자코트 추천';
    글제목변경(copy)}}>수정3</button>
    {/* ...을 넣으면 화살표를 새롭게 바꿔달란 뜻으로 새로운 state로 인식하게 됨. 
    기존의 state가 array 혹은 object 타입이라면  ...을 통해 새로운copy deep copy 가 되기 때문에 가능해짐.*/}
     <button onClick={()=>{
      let copy = [...글제목];
      copy.sort();
      글제목변경(copy);
     }}> 가나다순 정렬</button>
      <div className="list">
          <h4> {글제목[0]}<span onClick={()=>{따따봉(따봉 + 1 )}}>👍</span>{따봉}</h4> 
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4> {글제목[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4> {글제목[2]}</h4>
          <p>2월 17일 발행</p>
        </div>
    </div>
  );
}

export default App;
