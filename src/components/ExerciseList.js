import React from 'react'
import Exercise from './Exercise.js'
import Form from './Form.js'

class ExerciseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: []
        }
        this.addExercise = this.addExercise.bind(this)
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
    addExercise(formInputs) {
        // fetch request to /exercises create POST
        fetch('/exercises', {
            body: JSON.stringify(formInputs),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdExercise => {
            return createdExercise.json()
        }).then(jsonExercise => {
            this.setState({
                exercises: [jsonExercise, ...this.state.exercises]
            })
        }).catch(err => console.error(err))
    }
    render() {
        return(
            <div className="exercise-list">
                <h2>Exercise List</h2>
                <Form handleSubmit={this.addExercise}/>
                {this.state.exercises.map(exercise => {
                    return <Exercise key={exercise.id} exercise={exercise}/>
                })}
            </div>
        );
    }
}

export default ExerciseList