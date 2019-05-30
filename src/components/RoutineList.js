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
    }
    componentDidMount() {
        // Get all routines from database
        fetch('/routines')
        .then(res => res.json())
        .then(jsonData => this.setState({
            routines: jsonData
        }))
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
        .then(jsonData => console.log(jsonData))
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
                    handleClick={this.addExercise}/>
                    // <div key={routine.id}>
                    //     <h3>{routine.name} - {routine.difficulty}</h3>
                    //     <ul>
                    //         {(routine.exercises.length)
                    //         ? routine.exercises.map(exercise => {
                    //             return(
                    //                 <li key={exercise.id}>{exercise.name}</li>
                    //             )
                    //         })
                    //         : <li>No exercises!</li>}
                    //     </ul>
                    // </div>
                )
            })}
            </>
        );
    }
}

export default RoutineList