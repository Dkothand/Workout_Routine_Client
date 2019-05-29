import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            target_area: '',
            sets: 0,
            reps: 0
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
        // call handleSubmit from ExerciseList
        this.props.handleSubmit({
            name: this.state.name,
            target_area: this.state.target_area,
            sets: this.state.sets,
            reps: this.state.reps
        })
        // clear input states
        this.setState({
            name: '',
            target_area: '',
            sets: 0,
            reps: 0
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    name={'name'}
                    placeholder={'Exercise name'}
                    type={'text'}
                    id={'name'}
                    value={this.state.name}
                    handleChange={this.handleChange}/>
                <Input
                    name={'target_area'}
                    placeholder={'Target Area'}
                    type={'text'}
                    id={'target_area'}
                    value={this.state.target_area}
                    handleChange={this.handleChange}/>
                <Input
                    name={'sets'}
                    placeholder={'Sets'}
                    type={'number'}
                    id={'sets'}
                    value={this.state.sets}
                    handleChange={this.handleChange}/>
                <Input
                    name={'reps'}
                    placeholder={'Reps'}
                    type={'number'}
                    id={'reps'}
                    value={this.state.reps}
                    handleChange={this.handleChange}/>
                <input type="submit" value="Create Exercise"/>
            </form>
        );
    }
}

export default Form