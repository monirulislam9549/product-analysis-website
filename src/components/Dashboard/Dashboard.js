import React from 'react';
import { Bar, BarChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


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

        <div>

            <BarChart width={500} height={400} data={data}>
                <Bar dataKey={"Investment"} fill="#8884d8" />
                <Bar dataKey={"Sell"} fill="#8884d8" />
                <XAxis dataKey={"Month"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>



            <PieChart width={400} height={400} data={data}>
                <Pie dataKey={"Revenue"} fill="#8884d8" />
                <Pie dataKey={"Sell"} fill="#8884d8" />

            </PieChart>
        </div>




    );
};

export default Dashboard;