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
    }
    render() {
        return (
            <form>
                <Input
                    name={'name'}
                    placeholder={'Exercise name'}
                    type={'text'}
                    id={'name'}
                    value={this.state.name}/>
                <Input
                    name={'target_area'}
                    placeholder={'Target Area'}
                    type={'text'}
                    id={'target_area'}
                    value={this.state.target_area}/>
                <Input
                    name={'sets'}
                    placeholder={'Sets'}
                    type={'number'}
                    id={'sets'}
                    value={this.state.sets}/>
                <Input
                    name={'reps'}
                    placeholder={'Reps'}
                    type={'number'}
                    id={'reps'}
                    value={this.state.reps}/>
                <input type="submit" value="Create Exercise"/>
            </form>
        );
    }
}

export default Form