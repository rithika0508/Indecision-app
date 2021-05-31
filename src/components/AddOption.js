import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    AddOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))
        e.target.elements.option.value = ''
    }
    render = () => {
        return (
            <div>
                {this.state.error && <p className="addoptionError">{this.state.error}</p>}
                <form className="addoption" onSubmit={this.AddOption}>
                    <input className="addoption__input" type="text" name="option"></input>
                    <button className="button" onSubmit={this.AddOption} type="submit">Add</button>
                </form>
            </div>
        );
    };
};