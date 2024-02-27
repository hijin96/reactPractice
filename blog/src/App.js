import './App.css';
import React, { useState } from 'react';
function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따따봉] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title,setTitle] = useState(0);
  let [입력값,입력값변경]  = useState('');
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
      }}> 수정1</button>
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
      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}> 가나다순 정렬</button>
      {
        글제목.map(function (a, i) {
          return (<div className='list' key={i}>
            {/* 생각생각생각생각
            아 만약에 자바스크립트였으면 
            i 클릭하면 i 번째 배열 +1 해주면 되는거아냐?
            */}
            <h4 onClick={()=>{setModal(true); setTitle(i)}}>{글제목[i]}<span onClick={(e) => {e.stopPropagation();
              let copy = [...따봉]
              copy[i] = copy[i] + 1;
              따따봉(copy);
            }}>👍</span>{따봉[i]}</h4>
            <button onClick={()=>{
              //pop 으로 선택한 요소 빼오기 해야함 --------------------------------------------------------------------------------------------->
             let copy = [...글제목];
             copy.splice(i,1);
             글제목변경(copy);
            }}>삭제</button>
            <p> 2월 17일 발행</p>
          </div>
          )
        })
      }
      <input onChange={(e)=>{입력값변경(e.target.value);}}></input><button onClick={()=>{
         let inputArray = [];
         inputArray.push(입력값);
         글제목.map(function(a,i){
          inputArray.push(글제목[i])
          글제목변경(inputArray); 
         });
      }}>글발행</button>
     <input onChange={(e)=>{입력값변경(e.target.value);}}></input>
     <button onClick={()=>{
       let copy = [...글제목];
       copy.unshift(입력값);
       글제목변경(copy);
     }}>이렇게도 됨</button>

      {/* e는 이벤트 객체 이벤트에 관한 여러 기능이 담겨있음. 
      e.타겟 input 태그 e.target.value 하면 이벤트에 발생한 html 태그에 입력한 값 
      이벤트 버블링은 클릭하면 상위요소까지 움직임 되는것 버블링 막고 싶으면 e.stopPropagation()
      입력한 값을 저장하고 싶으면 state 변경함수를 통해서
       */}
      { modal == true ? <Modal 글제목변경={글제목변경} title={title}  글제목 ={글제목} /> : null}
      {
       
        /* 중괄호 안에서는 map 을 통해 반복문을 쓴다.  
        why?  map 을 쓰고나면 앞에 있는 개수 길이만큼 빈배열이 생긴다.  

        */
        /* 실제 글 데이터 개수만큼 반복 하고 싶으면 어떻게 할까? 
        파라미터 a를 넣어주면 됨 a는 반복문이 돌때마다 만들어지는 하나하나의 데이터!
        파라미터 2개를 넣으면 반복문이 돌때마다 1씩 증가하는 정수 .
        map 은 왼쪽 array 자료 만큼 내부코드 실행해줌. return 오른쪽에 있는걸 array 로 담아줌.
        유용한 파라미터 2 개 됨.  
        */
        //props 는 문자만 가능 
      }
    </div>
  );
}
function Modal(props){
  /* 이렇게 만드는 컴포넌트 */
  return (<div className='modal' style={{background : props.color}}>
    <h4>{props.글제목[props.title]} </h4>
    <p>날짜</p>
    <p>상세내용22</p>
    <button onClick={()=>{props.글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학'])}}> 글수정  </button>
  </div>
  )
}

export default App;
