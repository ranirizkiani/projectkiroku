import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TaskList() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/get-task-lists")
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Task List
                                <Link to={'/'} className="btn btn-primary btn-sm float-end"> Add Task</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>行数</th>
                                        <th>Timestamp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(row => {
                                        return (
                                            <tr key={row['id']}>
                                                <td><Link to={'/tasklist/task/' + row['id']}>{row['id']}</Link></td>
                                                <td>{row['number_of_line']}</td>
                                                <td>{row['created_at']}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TaskList;