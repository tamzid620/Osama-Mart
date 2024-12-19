'use client' ;
import './DashboardBody.css' ;
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});
const mulish = Mulish({
  weight: ["300", "700"],
  style: ["normal"],
});

const data = [
    {
      name: 'January',
      expense: 4000,
      Income: 2400,
      amt: 2400,
    },
    {
      name: 'February',
      expense: 3000,
      Income: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      expense: 2000,
      Income: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      expense: 2780,
      Income: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      expense: 1890,
      Income: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      expense: 2390,
      Income: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      expense: 3490,
      Income: 4300,
      amt: 2100,
    },
    {
      name: 'August',
      expense: 2000,
      Income: 9800,
      amt: 2290,
    },
    
    {
      name: 'September',
      expense: 1890,
      Income: 4800,
      amt: 2181,
    },
    
    {
      name: 'October',
      expense: 2780,
      Income: 3908,
      amt: 2000,
    },
    {
      name: 'November',
      expense: 5490,
      Income: 9300,
      amt: 2100,
    },
    {
      name: 'December',
      expense: 4390,
      Income: 9900,
      amt: 2500,
  }
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
              <h5 className={` ${kanit.className} box-title`}>Income Today</h5>
              <p className={` ${mulish.className} box-text`}> د.إ  6700</p>
            </div>
          </div>
          {/* <!-- card two  --> */}
          <div>
            <div className="box-div0">
              <h5 className={` ${kanit.className} box-title0`}>Expense Today</h5>
              <p className={` ${mulish.className} box-text`}> د.إ  600</p>
            </div>
          </div>
          {/* <!-- card three  --> */}
          <div>
            <div className="box-div">
              <h5 className={` ${kanit.className} box-title`}>Monthly Income</h5>
              <p className={` ${mulish.className} box-text`}> د.إ  6700</p>
            </div>
          </div>
          {/* <!-- card four  --> */}
          <div>
            <div className="box-div0">
              <h5 className={` ${kanit.className} box-title0`}>Monthly Expense</h5>
              <p className={` ${mulish.className} box-text`}> د.إ  6700</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!--------------------<<<<<<<<< Graph section >>>>>>>>>> --------------------> */}
      <div className={` ${kanit.className} graphParentdiv`}>
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
          <Bar dataKey="Income" fill="#A64D79" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="expense" fill="#6A1E55" activeBar={<Rectangle fill="#F26626" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </div>
      {/* <!--------------------<<<<<<<<< Total Calculation section >>>>>>>>>> --------------------> */}
      <div className="TCD">
        <div className="row grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-10">
          {/* <!-- card one  --> */}
          <div>
            <div className="box-div">
              <h5 className={` ${kanit.className} box-title`}>Total Income</h5>
              <p className={` ${mulish.className} box-text`}> د.إ  6700</p>
            </div>
          </div>
          {/* <!-- card two  --> */}
          <div>
            <div className="box-div0">
              <h5 className={` ${kanit.className} box-title0`}>Total Expense</h5>
              <p className={` ${mulish.className} box-text`}> د.إ  600</p>
            </div>
          </div>
          {/* <!-- card three  --> */}
          <div>
            <div className="box-div">
              <h5 className={` ${kanit.className} box-title`}>Total Dues</h5>
              <p className={` ${mulish.className} box-text`}> د.إ  6700</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!--------------------<<<<<<<<< Matured Bills section >>>>>>>>>> --------------------> */}
      <div className="MBD">
        <table className="table">
          <thead className={` ${kanit.className} text-[14px]`}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Client Name</th>
              <th scope="col">LPO</th>
              <th scope="col">Invoice Date</th>
              <th scope="col">Due Date</th>
              <th scope="col">Payment Status</th>
            </tr>
          </thead>
          <tbody className={` ${mulish.className} `}>
            <tr>
              <td>1</td>
              <td>Akkas Ali</td>
              <td>7563-87338-37423</td>
              <td>2024-07-11</td>
              <td>2024-07-02</td>
              <td>approved</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Yusuns Ali</td>
              <td>7563-87338-37423</td>
              <td>2024-07-11</td>
              <td>2024-07-02</td>
              <td>approved</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Momin</td>
              <td>7563-87338-37423</td>
              <td>2024-07-11</td>
              <td>2024-07-02</td>
              <td>approved</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Tamim</td>
              <td>7563-87338-37423</td>
              <td>2024-07-11</td>
              <td>2024-07-02</td>
              <td>approved</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Shafiq</td>
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