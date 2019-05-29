import React from 'react'
import Exercise from './Exercise.js'
import Form from './Form.js'

class ExerciseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: []
        }
    }
    componentDidMount() {
        this.getExercises()
    }
    getExercises() {
        fetch('/exercises')
        .then(res => res.json())
        .then(jsonData => this.setState({
            exercises: jsonData
        }))
        .catch(err => console.error(err))
    }
    render() {
        return(
            <div className="exercise-list">
                <h2>Exercise List</h2>
                <Form/>
                {this.state.exercises.map(exercise => {
                    return <Exercise key={exercise.id} exercise={exercise}/>
                })}
            </div>
        );
    }
}

export default ExerciseList