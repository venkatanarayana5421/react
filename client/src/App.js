import logo from './logo.svg';
import './App.css';
import Register from './components/Register'
import Show from './components/Show'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import AppBar  from './components/Appbar';

function App({store}) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counseling and Visitor Management System</p>
      </header>

      <div className="App-body">
        <AppBar store={store}/>
        <Page store={store}/>
      </div>

    </div>
  );
}

export default App;
