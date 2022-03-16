import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
  import axios from 'axios';

function Task() {

    let params = useParams();

    console.log(params)
    
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/get-task-by-id/" + params['id'])
            .then((res) => {
                setData(res.data)
            })
    }, [])

    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Task</h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Meshcode</th>
                                        <th>Coordinate</th>
                                        <th>Kijunfusoku</th>
                                        <th>Sekisetsu</th>
                                        <th>Akiyouryou</th>
                                        <th>Task List Id</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(row => {
                                        return (
                                            <tr key={row['id']}>
                                                <td>{row['id']}</td>
                                                <td>{row['meshcode']}</td>
                                                <td>{row['coordinate']}</td>
                                                <td>{row['kijunfusoku']}</td>
                                                <td>{row['sekisetsu']}</td>
                                                <td>{row['akiyouryou']}</td>
                                                <td>{row['task_list_id']}</td>
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


export default Task;