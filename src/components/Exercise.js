import React from 'react'

class Exercise extends React.Component {
    render() {
        return (
            <div className="exercise">
                <h5>{this.props.exercise.name}</h5>
                <h5>Targets: {this.props.exercise.target_area}</h5>
                <h5>Sets/Reps: {this.props.exercise.sets} x {this.props.exercise.reps}</h5>
            </div>
        );
    }
}

export default Exercise