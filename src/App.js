// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navigation />
        <switch>
          <Route path="/" exact component={Login} />
          <Route path="/tweets" exact component={Signup} />
        </switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
