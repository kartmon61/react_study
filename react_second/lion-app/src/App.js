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
class WorldClock extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false
    }

    //this.setState
    //절대 안됨! this.state.minute += 1;



    console.log('(child) 시작합니다.')
  }

  componentDidMount(){
    console.log('(child) 마운트 시작합니다.')
    this.timer = setInterval(()=>{
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
    },5000)
  }

  componentDidUpdate(){
    console.log('child 업데이트' )
  }

  componentWillUnmount(){
    console.log('(child) 언마운트!')
    clearInterval(this.timer)

  }

  handlingClick = (event) => {
    console.log(event.target)
    this.setState({stop: event.target.value})
    clearInterval(this.timer)

  }
  
//render 미리 약속된 함수

  render(){
    //console.log('(child) 렌더링')
    return (
      <div className={"WorldClock"}>
        <h2>
          🏙도시: {this.props.city}
        </h2>
        <p>
          🕐시간: {this.state.hour}시 {this.state.minute} 분
        </p>
        <button value = {true} onClick={this.handlingClick}>멈춰!</button>
      </div>
    )
  }
  
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.cityTimeData= [
      ['서울', 10],
      ['베이징', 9],
      ['시드니', 12],
      ['LA', 17],
      ['부산', 10]
    ]
    this.state = {
      content : '',
      show : true
    }
    console.log('(parent) 시작합니다.')
  }

  componentDidMount(){
    console.log('(parent) 마운트 시작합니다.')
  }

  componentDidUpdate(){
    console.log('(parent) 업데이트 시작합니다.')
  }



  handlingChange = (event) => {
    this.setState({content : event.target.value})
  }

  handlingClick = (event) => {
    this.setState((prevState)=>({show : !prevState.show}))
  }


  
  render(){
    console.log('(parent) 렌더링')
    return (
      <div className="App">
        <h1 className={'myStyle'}>안녕하세요</h1>
        <div className={'post'}>
        첫 게시글입니다.
        <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
  
        </div>
        <button onClick={this.handlingClick}>손가락 튕기기</button>

        {
          this.state.show && 
          this.cityTimeData.map((citytime, index)=>
      <WorldClock city={citytime[0]} time={citytime[1]} key={index}/>)}
      </div>
    );
  }
  
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
