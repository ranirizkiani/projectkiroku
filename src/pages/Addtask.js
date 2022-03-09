import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Addtask extends Component {

    state = {
        name: '',
        timestart: '',
        timeend: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    saveTask = async (e) => {
        e.preventDefault();

        const res = await axios.post('/api/add-task', this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Task
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end"> Back</Link>
                                </h4>
                            </div>
                            <div className="card-body"></div>

                            <form onSubmit={this.saveTask}>
                                <div className="form-group mb-3">
                                    <label>Task Name</label>
                                    <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Input Time</label>
                                    <input type="text" name="timestart" onChange={this.handleInput} value={this.state.timestart} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>End Time</label>
                                    <input type="text" name="timeend" onChange={this.handleInput} value={this.state.timeend} className="form-control" />
                                </div>

                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary">Save Task</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


export default Addtask;