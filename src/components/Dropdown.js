import React from 'react'

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: []
        }
    }
    componentDidMount() {
        fetch('/exercises')
        .then(res => res.json())
        .then(jsonData => this.setState({
            exercises: jsonData
        }))
        .catch(err => console.error(err))
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
                            <button>Add</button>
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