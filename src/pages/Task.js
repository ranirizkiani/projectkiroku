import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Task extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Task List
                                    <Link to={'add-task'} className="btn btn-primary btn-sm float-end"> Add Task</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Number of Line</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={1}>
                                            <td><Link to={'/task/result/1'}>{1000}</Link></td>
                                            <td>{'2022/2/2 19:00'}</td>
                                        </tr>
                                        <tr key={2}>
                                            <td><Link to={'/task/result/2'}>{500}</Link></td>
                                            <td>{'2022/1/3 18:00'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


export default Task;