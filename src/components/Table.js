import React, { useEffect, useState } from 'react';

function Table({ data }) {
  /*
  Table columns:
  経度緯度（coordinate）、-> "10.123132, 20.34543"
  空き容量（free substation space）、-> 
  積雪量（snow fall）、->
  基準風速（reference wind speed）->
 
 
  DATA FORMAT:
  [    
    {
      'col_1': '12.34,54.65',
      'col_2': 'aaa',
      'col_3': 'bbb',
      'col_4': 'ccc',
    },
    {
      'col_1': '9.01,2.43',
      'col_2': 'xxx',
      'col_3': 'yyy',
      'col_4': 'zzz',
    },
  ]
  */

  /*
  let dummyData =   [    
    {
      'col_1': '12.34,54.65',
      'col_2': 'aaa',
      'col_3': 'bbb',
      'col_4': 'ccc',
    },
    {
      'col_1': '9.01,2.43',
      'col_2': 'xxx',
      'col_3': 'yyy',
      'col_4': 'zzz',
    },
  ]
  */

  return (
    <div className="card rounded">
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>メッシュコード</th>
              <th>経度緯度</th>
              <th>基準風速</th>
              <th>積雪量</th>
              <th>空き容量</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr>
                <td>{row['col_1']}</td>
                <td>{row['col_2']}</td>
                <td>{row['col_3']}</td>
                <td>{row['col_4']}</td>
                <td>{row['col_5']}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table;