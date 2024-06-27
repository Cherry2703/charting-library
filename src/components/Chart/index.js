import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import "./index.css"

const Chart =(props)=>{
    const {data,heading}=props
    

    return(
        <div >
        <h1>{heading}</h1>
          <div>
          <LineChart width={600} height={400} data={data}>
            <Line type="monotone" dataKey="value" stroke="#000" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
          </LineChart>
          </div>
        </div>
    )
}

export default Chart