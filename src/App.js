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
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/cristinafornasier/"
              target="_blank"
              rel="noreferrer"
            >
              Cristina Fornasier
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/cristinafor/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
