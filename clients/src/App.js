
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Nav/Nabar';
import Home from './components/Home'
import { Provider } from './context/authContext';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />

        </Switch>
      </Router>

    </div>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};
