import React, { Component } from 'react';
import PostForm from '../../components/PostForm.js'
import "./LandCheck.css"
import Header from '../../components/Header.js'

class LandCheck extends Component {

    render() {
        return (
            <div className="App">
                <Header></Header>
                <h3>座標を正しく入力し、座標を区切るスペースがないことを確認してください。</h3>
                <h3>
                    複数の座標を配置する場合は、必ずそれらの間に改行を送信てください。</h3>
                <PostForm />
            </div>
        );

    }
}

export default LandCheck;