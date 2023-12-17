import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Family Wellness</h1>
        <h4>MASSAGE THERAPY</h4>
        <div class="navbar" id="myNavbar">
          <a href="#home" class="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </header>
    </div>
  );
}

export default App;
