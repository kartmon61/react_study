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

function App() {
  return (
    <div className="App">
      <h1 className={'myStyle'}>안녕하세요</h1>
      <div className={'post'}>
      첫 게시글입니다.

      </div>
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
export default App;
