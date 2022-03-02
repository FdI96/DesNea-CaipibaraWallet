import * as React from 'react'
import logo from './assets/logo.svg';
import "./App.css";
import Layout from "./components/dario/layout/layout";
import Body from "./components/dario/body/body";


function App() {
  return (
    <div className="App">
        <Layout>
            <Body />
        </Layout>
    </div>
  );
}

export default App;
