// import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo'
import RenderInput from './component/RenderInput'
// import List from './component/List'
import Hello from './component/Hello'
import User from './component/User'
function App() {
  return (
  <>
    <Todo></Todo>
    <RenderInput></RenderInput>
    <hr/>
    <br/>
    <Hello />
    <br/>
    <User id="123" />
    {/* <List></List> */}
  </>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
