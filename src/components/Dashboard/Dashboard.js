import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            Month: "Mar",
            Investment: 100000,
            Sell: 241,
            Revenue: 10401
        },
        {
            Month: "Apr",
            Investment: 200000,
            Sell: 423,
            Revenue: 24500
        },
        {
            Month: "May",
            Investment: 500000,
            Sell: 726,
            Revenue: 67010
        },
        {
            Month: "Jun",
            Investment: 500000,
            Sell: 529,
            Revenue: 40405
        },
        {
            Month: "Jul",
            Investment: 600000,
            Sell: 601,
            Revenue: 50900
        },
        {
            Month: "Aug",
            Investment: 700000,
            Sell: 670,
            Revenue: 61000
        }
    ]
    return (

        <div className='main-div'>
            <h1>Bar Chart and Line Chart</h1>
            <div className='child-div'>
                <BarChart width={500} height={400} data={data}>
                    <Bar dataKey={"Investment"} fill="#8884d8" />
                    <Bar dataKey={"Sell"} fill="#0088FE" />
                    <XAxis dataKey={"Month"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>

                <LineChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Investment" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;