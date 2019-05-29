import React from 'react'

class Exercise extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        // call delete method from ExerciseList.js
        this.props.handleDelete(this.props.exercise.id)
    }
    render() {
        return (
            <div className="exercise">
                <h5>{this.props.exercise.name}</h5>
                <h5>Targets: {this.props.exercise.target_area}</h5>
                <h5>
                    Sets/Reps: {this.props.exercise.sets} x {this.props.exercise.reps}
                </h5>
                <button onClick={this.handleClick}>Delete</button>
                <button>Edit</button>

            </div>
        );
    }
}

export default Exercise