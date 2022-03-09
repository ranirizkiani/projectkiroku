import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Result extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Result</h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Col A</th>
                                            <th>Col B</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={1}>
                                            <td>a1</td>
                                            <td>b1</td>
                                        </tr>
                                        <tr key={2}>
                                            <td>a2</td>
                                            <td>b2</td>
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


export default Result;