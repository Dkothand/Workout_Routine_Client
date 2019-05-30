import React from 'react'
import Dropdown from './Dropdown'

class Routine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.removeRoutine = this.removeRoutine.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
    }
    handleClick() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }
    closeDropdown() {
        this.setState({
            listOpen: false
        })
    }
    removeRoutine(id) {
        this.props.deleteRoutine(id)
    }
    render() {
        return(
            <div className="routine" key={this.props.routine.id}>
                <h3>
                    {this.props.routine.name} - {this.props.routine.difficulty}
                </h3>
                <button onClick={this.handleClick}>
                    Add Exercise
                </button>
                <button onClick={() => this.removeRoutine(this.props.routine.id)}>
                    Delete Routine
                </button>
                {(this.state.listOpen)
                ? <Dropdown 
                routine={this.props.routine}
                handleClick={this.props.handleClick}
                closeDropdown={this.closeDropdown}/>
                : null}
                <ul>
                    {(this.props.routine.exercises.length)
                    ? this.props.routine.exercises.map(exercise => {
                        return(
                            <li key={exercise.id}>{exercise.name}
                            </li>
                        )
                    })
                    : <li>No exercises!</li>}
                </ul>
            </div>
        )
    }
}

export default Routine