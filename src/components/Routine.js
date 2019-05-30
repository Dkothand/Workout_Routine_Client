import React from 'react'

class Routine extends React.Component {
    render() {
        return(
            <div key={this.props.routine.id}>
                <h3>
                    {this.props.routine.name} - {this.props.routine.difficulty}
                </h3>
                <ul>
                    {(this.props.routine.exercises.length)
                    ? this.props.routine.exercises.map(exercise => {
                        return(
                            <li key={exercise.id}>{exercise.name}</li>
                        )
                    })
                    : <li>No exercises!</li>}
                </ul>
            </div>
        )
    }
}

export default Routine