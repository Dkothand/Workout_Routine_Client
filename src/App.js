import React from 'react';
import ExerciseList from './components/ExerciseList.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <ExerciseList/>
      </div>
    );
  }
}

export default App;