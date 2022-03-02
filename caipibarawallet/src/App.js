import logo from './assets/logo.svg';
import './App.css';
import Layout from './components/gera/layout/layout';
import FetchDemo from './services/Dbrecords/FetchDemo';


function App() {
  return (
    <div className="App">
      <Layout/>
      <FetchDemo/>
    </div>
  );
}

export default App;
