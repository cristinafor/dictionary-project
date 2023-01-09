import logo from "./logo-cri.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Cristina Fornasier and is open-sourced on
            GitHub
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
