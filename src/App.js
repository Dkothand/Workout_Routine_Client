import React from 'react';
import RoutineList from './components/RoutineList.js'
import './css/main.css'
// import ExerciseList from './components/ExerciseList.js'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World</h1>
        <RoutineList/>
      </div>
    );
  }
}

export default App;