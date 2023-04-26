import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { messageAPI } from "./api/ChatGPT";

function App() {
  const [textFromInput, setTextFromInput] = useState();

  const [response, setResponse] = useState();

  const onButtonClick = () => {
    messageAPI
      .getAnswer(textFromInput)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input
            type="text"
            value={textFromInput}
            onChange={(event) => setTextFromInput(event.target.value)}
          ></input>
          <button onClick={onButtonClick}>Push</button>
        </p>
        <h2>{response}</h2>
      </header>
    </div>
  );
}

export default App;
