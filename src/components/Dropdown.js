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
        .then(jsonData => console.log(jsonData))
        .catch(err => console.error(err))
    }
    render() {
        return(
            <h5>I'm a Dropdown</h5>
        )
    }
}

export default Dropdown