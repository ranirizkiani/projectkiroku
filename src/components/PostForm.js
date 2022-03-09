import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './Button.js'

import Table from './Table.js';
// import PostForm from './components/PostForm.jsx'

/*

37.1719383999999,140.0346593,
36.99277,140.77859,
35.9937171,140.5333251,
35.7952537,140.6386735,
35.9022891,139.3134128,
35.5461953,138.9399811,
35.468426,138.751466,
35.1826928,138.5707699,
34.792018,138.118217,
34.88268,135.05066,
34.845717,134.001141,
34.5112827,133.7908678

*/

const dummyData = {
    "result": [
        {
            "hazard_info": {
                "fourth_mesh_code": 533946304,
                "土砂災害危険箇所": 1,
                "土砂災害警戒区域": 0,
                "塩害": 0,
                "津波浸水想定": 0,
                "洪水浸水想定区域": 0,
                "重塩害": 0
            },
            "land_info": {
                "fourth_mesh_code": 644125502,
                "基準風速": 1,
                "積雪量": 0,
                "空き容量": 2
            },
            "meshcode": 644125502
        },
        {
            "hazard_info": {
                "fourth_mesh_code": 644125502,
                "土砂災害危険箇所": 0,
                "土砂災害警戒区域": 0,
                "塩害": 0,
                "津波浸水想定": 0,
                "洪水浸水想定区域": 1,
                "重塩害": 0
            },
            "land_info": {
                "fourth_mesh_code": 533946304,
                "基準風速": 1,
                "積雪量": 0,
                "空き容量": 2
            },
            "meshcode": 533946304
        }
    ],
    "status": 200
}

function PostForm() {
    const url = ""

    // inputs
    const [roleId, setRoleId] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const [address, setAddress] = useState('')

    // table data
    const [data, setData] = useState([])

    function handleApiResponse(responseData) {
        let result = responseData['result']
        let tableData = []

        /*
            0 -> ✕
            1 -> 〇
            2 -> △（空き容量のみ）
            3 -> 情報なし

        */

        for (let x of result) {

            // generate col1 value => meshcode
            let col1Val = x['land_info']['fourth_mesh_code']

            // generate col2 value => coordinate
            let col2Val = x['lat'].toString() + ',' + x['lon'].toString()

            // generate col3 value => kijunfusoku
            let col3Val = ''
            if (x['land_info']['基準風速'] == 0) {
                col3Val = '✕'
            } else if (x['land_info']['基準風速'] == 1) {
                col3Val = '〇'
            } else if (x['land_info']['基準風速'] == 2) {
                col3Val = '△'
            } else if (x['land_info']['基準風速'] == 3) {
                col3Val = '無し'
            }

            // generate col4 value => sekisetsuryou
            let col4Val = ''
            if (x['land_info']['積雪量'] == 0) {
                col4Val = '✕'
            } else if (x['land_info']['積雪量'] == 1) {
                col4Val = '〇'
            } else if (x['land_info']['積雪量'] == 2) {
                col4Val = '△'
            } else if (x['land_info']['積雪量'] == 3) {
                col4Val = '無し'
            }

            // generate col5 value => akiyouryou
            let col5Val = ''
            if (x['land_info']['空き容量'] == 0) {
                col5Val = '✕'
            } else if (x['land_info']['空き容量'] == 1) {
                col5Val = '〇'
            } else if (x['land_info']['空き容量'] == 2) {
                col5Val = '△'
            } else if (x['land_info']['空き容量'] == 3) {
                col5Val = '無し'
            }

            tableData.push({
                'col_1': col1Val,
                'col_2': col2Val,
                'col_3': col3Val,
                'col_4': col4Val,
                'col_5': col5Val
            })
        }

        setData(tableData)
    }

    function submitForm(e) {
        // sample input: 1.12,2.34 5.23,4.43
        e.preventDefault();

        // Process roleId
        let parsedRoleId = parseInt(roleId, 10);

        // Process coordinates
        // sample input: "1.2,4.5 4.3,2.1"
        // sample output: ["1.2,4.5", "4.3,2.1"]
        let parsedCoordinates = []
        if (coordinates.length > 0) {
            let lines = coordinates.split("\n")
            for (let line of lines) {
                if (line.charAt(line.length - 1) == ',') {
                    parsedCoordinates.push(line.slice(0, -1))
                } else {
                    parsedCoordinates.push(line)
                }
            }
        }

        console.log(parsedCoordinates)

        // Process meshcodes
        let parsedAddress = []
        if (address.length > 0) {
            let lines = address.split("\n")
            for (let line of lines) {
                if (line.charAt(line.length - 1) == ',') {
                    parsedAddress.push(line.slice(0, -1))
                } else {
                    parsedAddress.push(line)
                }
            }
        }
        console.log(parsedAddress)

        // Construct api request payload
        let payload = {
            'role_id': 1
        }
        if (parsedCoordinates.length > 0) {
            payload['coordinate'] = parsedCoordinates
        }
        if (parsedAddress.length > 0) {
            payload['address'] = parsedAddress
        }

        console.log(payload)
        // Call API
        axios.post('http://greenmap.afterfit.jp:8003/land_check', payload)
            .then(function (response) {
                // TODO: change dummy data to actual API response data
                let data = response.data // response.data
                handleApiResponse(data)
            })
            .catch(function (error) {
                console.log('ERROR...')
                alert('Error')
                console.log(error)

                // TODO: delete this
                let data = dummyData
                handleApiResponse(data)
            });
    }

    function handleRoleId(e) {
        setRoleId(e.target.value)
    }

    function handleCoordinates(e) {
        setCoordinates(e.target.value)
    }

    function handleMeshCodes(e) {
        setCoordinates(e.target.value)
    }

    function handleAddress(e) {
        setAddress(e.target.value)
    }

    function resetTable() {
        // alert('reset!!')
        setData([])
    }

    // alert(data)

    return (
        <div>
            <div>
                <form onSubmit={(e) => submitForm(e)}>

                    <div className="formInput">
                        <div>
                            <label>住所</label>
                            <br />
                            <textarea
                                onChange={(e) => handleAddress(e)}
                                id="address"
                                placeholder="住所を送信してください"
                                name="address"
                                cols="25"
                                rows="5" />
                        </div>

                        <div>
                            <label>経度緯度</label>
                            <br />
                            <textarea
                                onChange={(e) => handleCoordinates(e)}
                                id="coordinates"
                                placeholder="経度緯度を送信してください"
                                name="coordinates"
                                cols="25"
                                rows="5" />
                        </div>
                    </div>

                    <div>
                        <br /> <Button>送信</Button>

                    </div>

                </form>
            </div >

            <Table data={data} />

            <button onClick={resetTable}>リセット</button>

        </div >
    );
}

export default PostForm;