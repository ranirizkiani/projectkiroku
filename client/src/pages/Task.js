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

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get("http://localhost:8000/api/get-task-by-id/" + params['id'])
            .then((res) => {
                setIsLoading(false)
                setData(res.data)
            })
            .catch(function (error) {
                setIsLoading(false)
                console.log('ERROR...')
                alert('Error')
                console.log(error)

            });
    }, [])


    if (isLoading == true) {
        return (
            <div className="App">
               <img src="https://thumbs.gfycat.com/CheerfulGreatAmurstarfish.webp" />
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>タスク</h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>メッシュコード</th>
                                        <th>経度緯度</th>
                                        <th>基準不足</th>
                                        <th>積雪量</th>
                                        <th>空き容量</th>
                                        <th>タスクID</th>
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