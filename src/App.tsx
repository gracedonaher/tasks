import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <p>
                Grace Donaher
            </p>
            <p>
                Hello World
                <ul>
                    <li>Bonjour</li>
                    <li>Hola</li>
                    <li>Ciao</li>
                </ul>
            </p>
            <p>
                <img src="computerSetup.jpeg" alt="Pink LED computer setup"/>
                <Button onClick={ () => { console.log("Hello World") } }>Log Hello World</Button>
            </p>
        </div>
    );
}

export default App;
