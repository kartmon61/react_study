import React from 'react';
import logo from './logo.svg';
import './App.css';



//컴포넌트 
// const myStyle = {
//   color: 'red',
//   fontWeight: 900,
// }

//JSX -> HTML 태그 작성 가능
//JSX -> style을 통해 css (jsx)
//JSX -> className을 통해 css (css->App.css)
// function WorldClock(props){
//   return (
//     <div className={"WorldClock"}>
//       <h2>
//         🏙도시: {props.city}
//       </h2>
//       <p>
//         🕐시간: {props.time}시
//       </p>
//     </div>
//   )
// }


// 요구사항 1. 시간과 분이 변화하는 것을 보고 싶다.
// 요구사항 2. 동적으로 보고싶다.
class WorldClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hour: this.props.time,
      minute: 0
    }

    //this.setState
    //절대 안됨! this.state.minute += 1;

    setInterval(()=>{
      this.setState((state) => {
        let l_hour = state.hour
        let l_minute = state.minute
        l_minute += 1

        if(state.minute === 60){
          l_hour= state.hour+1 
          l_minute= 0 
        }

        if (state.hour === 25) {
            l_hour = 0
        } 
          return { hour: l_hour, minute: l_minute }
        })
    },1000)
  }
  
//render 미리 약속된 함수

  render(){
    return (
      <div className={"WorldClock"}>
        <h2>
          🏙도시: {this.props.city}
        </h2>
        <p>
          🕐시간: {this.state.hour}시 {this.state.minute} 분
        </p>
      </div>
    )
  }
  
}

function App() {
  const cityTimeData  = [
    ['서울', 10],
    ['베이징', 9],
    ['시드니', 12],
    ['LA', 17],
    ['부산', 10]
  ]

  const WorldClockList = cityTimeData.map((citytime, index)=>
    <WorldClock city={citytime[0]} time={citytime[1]} key={index}/>
  )

  return (
    <div className="App">
      <h1 className={'myStyle'}>안녕하세요</h1>
      <div className={'post'}>
      첫 게시글입니다.

      </div>
      {WorldClockList}
    </div>
  );
}

function App2(){
  return (
    <div className="App">
      <h1>안녕히가세요</h1>
      <table>
        <tr><td>1</td></tr>
        <tr><td>2</td></tr>
      </table>
    </div>
  );
}

//컴포넌트 수출 이파일은 default (기본적으로 , 하나만) export
export default App ;
