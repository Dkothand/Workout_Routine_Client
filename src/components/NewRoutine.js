import React from 'react'
import RoutineForm from './RoutineForm';

class NewRoutine extends React.Component {
    render() {
        return (
            <>
                <h2>New Routine</h2>
                <RoutineForm handleSubmit={this.props.handleSubmit}/>
            </>
        )
    }
}

export default NewRoutine