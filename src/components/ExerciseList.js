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
        this.deleteExercise = this.deleteExercise.bind(this)
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
        // fetch request to /exercises create route
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
    deleteExercise(id) {
        // console.log(id)
        fetch(`/exercises/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            }
          })
        .then(json => {
          this.setState(prevState => {
            const exercises = prevState.exercises.filter((exercise, index) => exercise.id !== id)
            return {
              exercises
            }
          })
        })
        .catch(error => console.log(error))
    }
    render() {
        return(
            <div className="exercise-list">
                <h2>Exercise List</h2>
                <Form handleSubmit={this.addExercise}/>
                {this.state.exercises.map(exercise => {
                    return <Exercise 
                    key={exercise.id} 
                    exercise={exercise}
                    handleDelete={this.deleteExercise}/>
                })}
            </div>
        );
    }
}

export default ExerciseList