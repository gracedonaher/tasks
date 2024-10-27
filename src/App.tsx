import React from "react";
import {Button} from 'react-bootstrap';
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App" style={ {width: 2}>
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <Col>
                Grace Donaher
            <p>
                Hello World
                <ul>
                    <li>Bonjour</li>
                    <li>Hola</li>
                    <li>Ciao</li>
                </ul>
            </p>
            </Col>
            <Col
            <p>
                <img src="computerSetup.jpeg" alt="Pink LED computer setup"/>
                <Button onClick={ () => { console.log("Hello World") } }>Log Hello World</Button>
            </p>
            </Col>
        </div>
    );
}

export default App;
