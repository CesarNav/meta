import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Footer from './components/footer';
import Home from './pages/home';
import Login from './pages/login';
import Projects from './pages/projects';

function App() {
  return (
    <>
    <Projects/>
    </>
  );
}

export default App;
