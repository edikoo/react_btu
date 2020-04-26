import React from 'react';
import './App.css';
import Blog from './containers/Blog/Blog';



function title(string)
{
  return string.raw[0].split('').reverse('').join('');
}

function App() {
  return (

      <div className="App">
        <header className="App-header">

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 title">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            <p>{title`HelloWorld`}</p>
          </div>
        </div>

        <Blog />

        </header>
      </div>

  );
}

export default App;
