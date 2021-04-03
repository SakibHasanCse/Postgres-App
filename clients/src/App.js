
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Home from './components/Home'
import { Provider } from './context/authContext';
import { Landing } from './components/Landing/landing';
import SignnUp from './components/Auth/Signnup';
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={SignnUp} />

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
