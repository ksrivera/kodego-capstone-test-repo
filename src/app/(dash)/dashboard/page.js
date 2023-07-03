'use client'
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import PieComponent from "src/components/piecomponent/PieComponent";

import CardComponent from "src/components/cardcomponent/CardComponent";


const data = [
  {
    name: "CET",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "CAS",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "CITHM",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "CBA",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "CPA",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Main = () => {
  return (
    /* Dashboard and generate Report Section */
    <div className="mt-24 pt-10 pb-10 px-6 bg-green-400 rounded-3xl">
     
     <h1 className="text-gray-800 text-2xl font-semibold leading-9">
          Welcome Admin!
        </h1>
      <CardComponent />
   
      {/* For the Chart */}

      <div className="flex mt-6 w-full gap-8">
        <div className="basis-[70%] border bg-white shadow-md  rounded-md">
          <div className="bg-gray-100 flex items-center justify-between py-4 px-5 border-b border-gray-300 mb-5">
            <h2>Enrollment Overview</h2>
           
          </div>
          <LineChart
            width={1150}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
            />
          </LineChart>
        </div>
        {/* End of Line Chart */}

        {/* Start of Pie Chart */}
        <div className="basis-[30%] border bg-white shadow-md rounded-md">
          <div className="bg-gray-100 flex items-center justify-between py-4 px-5 border-b border-gray-300 mb-5">
            <h2>Population by Courses</h2>
           
          </div>
          <div className="pl-7">
            <PieComponent />
          </div>
        </div>
      </div>

      {/* End of Pie Chart */}


    </div>
  );
};

export default Main;
