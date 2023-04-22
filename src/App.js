import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      <div className="Meta">
        <div>
          <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 14 21" role="presentation"><path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" fill="currentColor"></path></svg>
          <div>
            <h3>React UI Component</h3>
            <p>Created with Framer Motion. </p>
          </div>
        </div>
        <div>
          <div className="inspired">
            <p>Inspired by</p>
            <a className="btn" href="https://dribbble.com/shots/5687260-Stepper-XXII?utm_source=Clipboard_Shot&utm_campaign=Volorf&utm_content=Stepper%20XXII&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Volorf&utm_content=Stepper%20XXII&utm_medium=Social_Share">Stepper XXII</a>
          </div>
        </div>
      </div>
      <div className="App">
        <div className="ellipsion"><a href="https://github.com/Ellipsion">Ellipsion.</a></div>
        <Counter />
      </div>
    </>
  );
}

export default App;
