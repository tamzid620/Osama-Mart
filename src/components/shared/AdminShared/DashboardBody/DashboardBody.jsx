'use client' ;
import './DashboardBody.css' ;
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const DashboardBody = () => {

    return (
        <div>
             <div className='dashboardBody'>
      {/* <!--------------------<<<<<<<<< Number status section >>>>>>>>>> --------------------> */}
      <div className="NSD">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10">
          {/* <!-- card one  --> */}
          <div>
            <div className="box-div">
              <h5 className="box-title">Income Today</h5>
              <p className="box-text"> د.إ  6700</p>
            </div>
          </div>
          {/* <!-- card two  --> */}
          <div>
            <div className="box-div0">
              <h5 className="box-title0">Expense Today</h5>
              <p className="box-text"> د.إ  600</p>
            </div>
          </div>
          {/* <!-- card three  --> */}
          <div>
            <div className="box-div">
              <h5 className="box-title">Monthly Income</h5>
              <p className="box-text"> د.إ  6700</p>
            </div>
          </div>
          {/* <!-- card four  --> */}
          <div>
            <div className="box-div0">
              <h5 className="box-title0">Monthly Expense</h5>
              <p className="box-text"> د.إ  6700</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!--------------------<<<<<<<<< Graph section >>>>>>>>>> --------------------> */}
      <div className="graphParentdiv ">
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 80,
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
          <Bar dataKey="pv" fill="#A64D79" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#6A1E55" activeBar={<Rectangle fill="#F26626" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </div>
      {/* <!--------------------<<<<<<<<< Total Calculation section >>>>>>>>>> --------------------> */}
      <div className="TCD">
        <div className="row grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-10">
          {/* <!-- card one  --> */}
          <div>
            <div className="box-div">
              <h5 className="box-title">Total Income</h5>
              <p className="box-text"> د.إ  6700</p>
            </div>
          </div>
          {/* <!-- card two  --> */}
          <div>
            <div className="box-div0">
              <h5 className="box-title0">Total Expense</h5>
              <p className="box-text"> د.إ  600</p>
            </div>
          </div>
          {/* <!-- card three  --> */}
          <div>
            <div className="box-div">
              <h5 className="box-title">Total Dues</h5>
              <p className="box-text"> د.إ  6700</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!--------------------<<<<<<<<< Matured Bills section >>>>>>>>>> --------------------> */}
      <div className="MBD">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Client Name</th>
              <th scope="col">LPO</th>
              <th scope="col">Invoice Date</th>
              <th scope="col">Due Date</th>
              <th scope="col">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Akkas Ali</td>
              <td>7563-87338-37423</td>
              <td>2024-07-11</td>
              <td>2024-07-02</td>
              <td>approved</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default DashboardBody;