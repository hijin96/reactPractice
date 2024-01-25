import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  let post = '강남우동맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따따봉] = useState([0, 1, 2]);
  let [modal, setModal] = useState(false);
  // 현재 ui 의 상태를 담아내는 자료형임.
  // [1, 2, 3].map(function () { console.log(1) });
  /* map 함수 안에는 콜백 함수를 만든다.map의 괄호에 넣는것. 
  array 의 개수만큼 반복한다.
  파라미터를 하나 새롭게 만들
  return 을 새롭게 만들어 return 하면 array 의 자료를 담아줌 . 그리고 array 의 개수만큼 반복함. 
   */


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
    기존의 state가 array 혹은 object 타입이라면  ...을 통해 새로운copy deep copy 가 되기 때문에 가능해짐.
    두 개의 파라미터를 반복하고 싶을 때는 반복문이 돌때마다 1씩 증가하는 함수. 
     {

      글제목.map(function()){return (<div className = "list"> </div>)}
     }
    
    */}


      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}> 가나다순 정렬</button>
      {/* <div className="list">
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
      </div> */}
      {
        글제목.map(function (a, i) {

          return (<div className='list' key={i}>
            {/* 생각생각생각생각
            아 만약에 자바스크립트였으면 
            i 클릭하면 i 번째 배열 +1 해주면 되는거아냐?
            */}
            <h4>{글제목[i]}<span onClick={() => {
              let copy = [...따봉]
              copy[i] = copy[i] + 1;
              따따봉(copy);
            }}>👍</span>{따봉[i]}</h4>
            <p> 2월 17일 발행</p>
          </div>
          )
        })
      }
      {modal == true ? <Modal /> : null}
      {
        [1, 2, 3].map(function () {
          return <div>'안녕' </div>
        })
        /* 중괄호 안에서는 map 을 통해 반복문을 쓴다.  
        why?  map 을 쓰고나면 앞에 있는 개수 길이만큼 빈배열이 생긴다.  

        */
        /* 실제 글 데이터 개수만큼 반복 하고 싶으면 어떻게 할까? 
        파라미터 a를 넣어주면 됨 a는 반복문이 돌때마다 만들어지는 하나하나의 데이터!
        파라미터 2개를 넣으면 반복문이 돌때마다 1씩 증가하는 정수 .
        map 은 왼쪽 array 자료 만큼 내부코드 실행해줌. return 오른쪽에 있는걸 array 로 담아줌.
        유용한 파라미터 2 개 됨.  
        */

      }
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
