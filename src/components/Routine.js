import React from 'react'
import Dropdown from './Dropdown'

class Routine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }
    render() {
        return(
            <div key={this.props.routine.id}>
                <h3>
                    {this.props.routine.name} - {this.props.routine.difficulty}
                </h3>
                <button onClick={this.handleClick}>
                    Add Exercise
                </button>
                {(this.state.listOpen)
                ? <Dropdown 
                routine={this.props.routine}
                handleClick={this.props.handleClick}/>
                : null}
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