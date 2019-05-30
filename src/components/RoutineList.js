import React from 'react'
import NewRoutine from './NewRoutine';

class RoutineList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            routines: []
        }
    }
    componentDidMount() {
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
            <NewRoutine/>
            {this.state.routines.map(routine => {
                return(
                    <div key={routine.id}>
                        <h3>{routine.name}</h3>
                        <ul>
                            {routine.exercises.map(exercise => {
                                return(
                                    <li key={exercise.id}>{exercise.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
            </>
        );
    }
}

export default RoutineList