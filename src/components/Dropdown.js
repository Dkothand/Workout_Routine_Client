import React from 'react'

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        fetch('/exercises')
        .then(res => res.json())
        .then(jsonData => this.setState({
            exercises: jsonData
        }))
        .catch(err => console.error(err))
    }
    handleClick(id) {
        // console.log(`exercise id ${id}, routine id, ${this.props.routine.id}`)
        // call function to pass exercise id and routine id up
        this.props.handleClick(id, this.props.routine.id)
    }
    render() {
        return(
            <>
                <h5>Exercises</h5>
                <ol>
                	{this.state.exercises.map(exercise => {
                	    return (
                            <>
                                <li 
                                key={exercise.id}>
                                    {exercise.name}
                                <button onClick={() => this.handleClick(exercise.id)}>Add</button>
                                </li>
                            </>
                	    )
                	})}
                </ol>
            </>
        )
    }
}

export default Dropdown