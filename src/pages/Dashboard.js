import React from 'react';
import './Dashboard.css'
import { PieChart,Pie } from 'recharts'
import {AiOutlineDelete} from 'react-icons/ai'
export default function Dashboard() {
    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
  return (
    <div className='Dashboard'>
  
           <div className="topbar2">
           <p className="maindash">Dashboard</p>
           
           </div >
           <div className='dflex'>
           <div className='col1'>
           <div className="projectname">
             <h3>Project Name</h3>
   <PieChart width={330} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
</div>
<div className='marketing'>
  <h3>Marketing</h3>
  <p>Country/Location <b>UK,Liverpool</b></p>
  <p>Department Owner <b>Jessica</b></p>
  <p>Email <b>jessica@dove.com</b></p>
  <p>Phone <b>+442072343456</b></p>
  <p>Categories <b>#Soaps</b></p>
  <div className='marketingdetails'>
  <div className='dflex'><h4><b>8</b> Clients</h4>
  <h4><b>12</b>Projects</h4>
  <h4><b>29</b>Surveys</h4>
  </div>
  <div>
<AiOutlineDelete/>
</div>
  </div>
</div>

    </div>
    <div className='dashaddon'>
    <div className='row dflex'>
    <div className="boxdepart" style={{padding:"20px",width:"200px",height:"120px",borderRight:"1px solid gray",marginRight:"10px"}}>
      <h3 style={{textAlign:"center"}}>Departments</h3>
      <p style={{color:"blue",width:"150px",textAlign:"center"}}>Add a Department</p>
      <h1 style={{textAlign:"center"}}>12</h1>
      <h4  style={{textAlign:"center"}}> in Total</h4>
    </div>
    <div className="boxdepart" style={{padding:"10px",width:"200px",height:"120px",marginLeft:"10px"}}>
      <h3 style={{textAlign:"center"}}>Clients</h3>
      <p style={{color:"blue",width:"150px",textAlign:"center"}}>Add a Clients</p>
      <h1 style={{textAlign:"center"}}>180</h1>
      <h4 style={{textAlign:"center"}}> in Total</h4>
    </div>
    </div>
    
    <div className="row2" style={{width:"400px",paddingTop:"10px",paddingLeft:"30px",marginTop:"20px",borderTop:"1px solid gray"}}>
      <h3>Consumers</h3>
      <p  style={{color:"blue"}}>Add a Consumer</p>
      <div className='dflex' style={{justifyContent:"space-around"}}>
      <div>
        <h1>24</h1>
        <h4>Active</h4>
      </div>
      <div>
      <h1>70</h1>
        <h4>In Total</h4>
      </div>
      </div>
    </div>

    <div className="row3" style={{width:"400px",paddingTop:"10px",paddingLeft:"30px",marginTop:"20px",borderTop:"1px solid gray"}}>
      <h3>Surveys</h3>
      <p  style={{color:"blue"}}>Create a New Survey</p>
      <div className='dflex' style={{justifyContent:"space-around"}}>
      <div>
        <h1>65</h1>
        <h4>In Total</h4>
      </div>
      <div>
      <h1>8</h1>
        <h4>Active</h4>
      </div>
      </div>
    </div>

    <div className="row4" style={{width:"400px",paddingTop:"10px",paddingLeft:"30px",marginTop:"20px",borderTop:"1px solid gray"}}>
      <h3>Project Summary</h3>
      <p  style={{color:"blue"}}>Add a New Project</p>
      <div className='dflex' style={{justifyContent:"space-around"}}>
      <div>
        <h1>24</h1>
        <h4>In Total</h4>
      </div>
      <div>
      <h1>8</h1>
        <h4>Active</h4>
      </div>
      </div>
      <div className='dflex' style={{justifyContent:"space-around",paddingTop:"20px"}}>
      <div>
        <h1>2</h1>
        <h4>On Hold</h4>
      </div>
      <div>
      <h1>120</h1>
        <h4>Completed</h4>
      </div>
      </div>
    </div>

    

    </div>
</div>
</div>
  )
}
