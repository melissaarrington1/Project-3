import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" />
                    <input type="text" nanem="country" />
                    <button> Get Your Weather</button>
                </form>
            </div>
        );
    }
}

export default Form;