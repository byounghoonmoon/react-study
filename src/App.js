import React, {Component} from 'react'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <header>
        <h1>WEB</h1>
        world wide web!
      </header>
      
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>        
      </nav>

      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
      
      </div>
    );    
  }
}

export default App;
