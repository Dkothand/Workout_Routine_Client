import React from 'react'
import NewRoutine from './NewRoutine.js'
import Routine from './Routine.js'

class RoutineList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            routines: []
        }
        this.createRoutine = this.createRoutine.bind(this)
        this.addExercise = this.addExercise.bind(this)
        this.getExercises = this.getExercises.bind(this)
        this.deleteRoutine = this.deleteRoutine.bind(this)
    }
    componentDidMount() {
        // Get all routines from database
        this.getExercises()
        
    }
    addExercise(exerciseId, routineId) {
        console.log(`exercise: ${exerciseId}, routine: ${routineId}`)
        // send POST request to workouts to add relation for this exercise and routine
        fetch('/workouts', {
            body: JSON.stringify({
                exercise_id: exerciseId,
                routine_id: routineId
            }),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(jsonData => {
            // Reload this.state.routines to render added exercise, not ideal, look into moving states so the added exercise renders in the specific Routine component
            this.getExercises()
        })
        .catch(err => console.error(err))
    }
    deleteRoutine(routineId) {
        // destroys association between exercise and routine in database, rerenders state to update browser
        console.log(routineId)
        fetch(`/routines/${routineId}`, {
            body: JSON.stringify({
                routine_id: routineId
            }),
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            this.getExercises()
        })
        .catch(err => console.error(err))
    }
    createRoutine(formData) {
        // Add routine to database and render on success
        fetch('/routines', {
            body: JSON.stringify(formData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdRoutine => createdRoutine.json())
        .then(jsonRoutine => 
            this.setState({
            routines: [jsonRoutine, ...this.state.routines]
        })).catch(err => console.error(err))
    }
    getExercises() {
        fetch('/routines')
        .then(res => res.json())
        .then(jsonData => this.setState({
            routines: jsonData
        }))
    }
    render() {
        return(
            <>
            <h1>Routine List</h1>
            <NewRoutine handleSubmit={this.createRoutine}/>
            {this.state.routines.map(routine => {
                return(
                    <Routine 
                    key={routine.id}
                    routine={routine}
                    handleClick={this.addExercise}
                    deleteRoutine={this.deleteRoutine}/>
                )
            })}
            </>
        );
    }
}

export default RoutineList