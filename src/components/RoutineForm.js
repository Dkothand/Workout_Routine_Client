import React from 'react'
import Input from './Input.js'

class RoutineForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            difficulty: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log({
            name: this.state.name,
            difficulty: this.state.difficulty
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <Input
                    name={'name'}
                    placeholder={'Routine name'}
                    type={'text'}
                    id={'name'}
                    value={this.state.name}
                    handleChange={this.handleChange}/>
                <Input
                    name={'difficulty'}
                    placeholder={'Difficulty'}
                    type={'text'}
                    id={'difficulty'}
                    value={this.state.difficulty}
                    handleChange={this.handleChange}/>
                <input type="submit" value="Create Routine"/>
            </form>
        )
    }
}

export default RoutineForm