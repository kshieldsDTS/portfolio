import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Redirect } from 'react-router-dom'
import Nav from './Components/Nav'
import Welcome from './Components/Welcome'

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route path='/' element={<Welcome />}/>
            
        </Routes>
    </div>
  );
}

export default App;
