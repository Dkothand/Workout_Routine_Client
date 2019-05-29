import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
    render() {
        return (
            <form>
                <Input/>
                <input type="submit" value="Create Exercise"/>
            </form>
        );
    }
}

export default Form