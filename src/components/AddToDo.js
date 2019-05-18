import React, { Component } from 'react';
import uuid from 'uuid';

export default class AddToDo extends Component {

    state = {
        title: ""
    }
    

    handleChange = (e) => {

        this.setState({
            title: e.target.value
        })
    }

    onSubmit = (e) => {
        
        e.preventDefault();

        this.props.addToDo(this.state.title);

        this.setState({ title: "" })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <div>
                    <input type="text" name={this.state.title} value={this.state.title} onChange={this.handleChange} placeholder="Enter task here"/>
                </div>
                <div>
                    <input type="submit" value="submit"/>
                </div>
            </form>
        )
    }
}