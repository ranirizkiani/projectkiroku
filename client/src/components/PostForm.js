import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from './button/Button.js'

import Table from './Table.js';


function PostForm() {
    const url = ""

    // inputs
    const [roleId, setRoleId] = useState('')
    const [coordinates, setCoordinates] = useState('')
    const [address, setAddress] = useState('')

    // table data
    const [data, setData] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    function handleApiResponse(responseData) {
        let result = responseData['result']
        let tableData = []
        let saveData = []

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
            saveData.push({
                'meshcode': col1Val,
                'coordinate': col2Val,
                'kijunfusoku': col3Val,
                'sekisetsu': col4Val,
                'akiyouryou': col5Val
            })
        }

        let payload = {
            'input': saveData
        }
        axios.post('http://localhost:8000/api/save-tasks', payload)
            .then(res => {
                setData(tableData)
            })
            .catch(err => {
                alert(err)
            })
        
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
        setIsLoading(true)
        axios.post('http://greenmap.afterfit.jp:8003/land_check', payload)
            .then(function (response) {
                // TODO: change dummy data to actual API response data
                let data = response.data // response.data
                setIsLoading(false)
                handleApiResponse(data)
            })
            .catch(function (error) {
                setIsLoading(false)
                console.log('ERROR...')
                alert('Error')
                console.log(error)

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

    if (isLoading == true) {
        return (
            <div className="App">
               <img src="https://thumbs.gfycat.com/CheerfulGreatAmurstarfish.webp" />
            </div>
        )
    }

    return (
        <div>
            <div className='card lc-form rounded'>
                <form onSubmit={(e) => submitForm(e)}>

                    <div className="formInput">
                        <div>
                            <label>住所</label>
                            <br />
                            <textarea
                                className='lc-form-textarea'
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
                                className='lc-form-textarea'
                                onChange={(e) => handleCoordinates(e)}
                                id="coordinates"
                                placeholder="経度緯度を送信してください"
                                name="coordinates"
                                cols="25"
                                rows="5" />
                        </div>
                    </div>

                    <div>
                        <Button>送信</Button>

                    </div>

                </form>
            </div >

            <Table data={data} />

            {/* <button onClick={resetTable}>リセット</button> */}

        </div >
    );
}

export default PostForm;