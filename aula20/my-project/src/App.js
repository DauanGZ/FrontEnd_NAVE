import { useEffect, useState } from "react";
import Button from './button';
import logo from './logo.svg';
import './App.css';

function App() {

  const [subconteudo, setSubConteudo] = useState("subdescrição");
  const [topconteudo, setTopConteudo] = useState();
  const [primeiraVez, setPrimeiraVez] = useState(true);

  const handleClickMostrar = () => {
    setTopConteudo("M O S T R A D O ;D");
  };

  const handleClickCaps = () => {
    setSubConteudo("SUBDESCRIÇÃO");
  };

  useEffect(() => {
    if(!primeiraVez)
      console.log("Texto do anchor mudou!");
    setPrimeiraVez(false);
  }, [subconteudo]);

  return (
    <div className="App">
      <header className="App-header">

        <Button func={handleClickMostrar} text="M O S T R A R" />
        <h1> {topconteudo} </h1>

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a href="http:\\www.google.com"> {subconteudo} </a>
        <Button func={handleClickCaps} text="CAPS" />

      </header>
    </div>
  );
}

export default App;