import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import logo from './logo.svg';
import './App.css';

const MainMenu = () =>
  <div>
    <Link to="/">
      <button>home</button>
    </Link>
    <Link to="/about">
      <button>About</button>
    </Link>
    <Link to="/code">
      <button>code</button>
    </Link>
    <Link to="/code">
      <button>contact</button>
    </Link>
    <Link to="/info">
      <button>info</button>
    </Link>
  </div>

const Home = () => (
  <div>
    Home
  </div>
)

const About = () => (
  <div>
    About
  </div>
)

const Code = () => (
  <div>
    Code
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const info = () => (
  <div>
    info
  </div>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              <h1 className="App-title">Welcome to React</h1>
              <MainMenu/>
            </header>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/code" component={Code} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/presence" component={info} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
