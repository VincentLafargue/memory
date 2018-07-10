import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <form method="" action="">
          <p><label>E-Mail <input type="mail" name="email" required autofocus value="voila email" /></label></p>
          {/*le commentaire doit être entre {} et les expression jsx ne sont encore rien*/}
          <p><button type="submit" value="Connexion" /></p>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
