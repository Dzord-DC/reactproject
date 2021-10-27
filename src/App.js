import './App.css';
import { Message } from './component/Message/Messege';

const text = "prop"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message message={text}/>
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
    </div>
  );
}

export default App;
