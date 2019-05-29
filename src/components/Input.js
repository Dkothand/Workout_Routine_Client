import React from 'react'

class Input extends React.Component {
    render() {
        return(
            <>
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <input
                    id={this.props.name}
                    name={this.props.name}
                    type={this.props.type}
                    value={this.props.value}
                    placeholder={this.props.placeholder}/>
            </>
        );
    }
}

export default Input