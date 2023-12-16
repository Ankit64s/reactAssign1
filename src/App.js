import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    <h1>Learn web development</h1>
    <div className="first">
      <p>
        Welcome to the MDN learning area. This set of articles aims to guide complete <br/> beginners to web development with all that they need to start coding websites.
      </p>
    </div>
    <div className="second">
      <p>
      The aim of this area of MDN is not to take you from "beginner" to "expert" but to <br/>take you from "beginner" to "comfortable." From there, you should be able to start <br/>making your way, learning from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">the rest of MDN</a>, and other intermediate to <br/>advanced resources that assume a lot of previous knowledge.
      </p>
    </div>
    <div className="third">
      <p>
      If you are a complete beginner, web development can be challenging — we will hold <br/>your hand and provide enough detail for you to feel comfortable and learn the topics <br/>properly. You should feel at home whether you are a student learning web <br/>development (on your own or as part of a class), a teacher looking for class <br/>materials, a hobbyist, or someone who just wants to understand more about how <br/>web technologies work.
      </p>
    </div>
    </div>


  );
}

export default App;
