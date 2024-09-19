
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


//  getting data from the DB to React

const EmployeeList = () => {
    let [infoFromDB, setinfoFromDB] = useState([])
    let [reload, setReload] = useState(0)
    useEffect(()=>{
        axios.get("http://localhost:4001/employee-list")
        .then((e)=>{
                setinfoFromDB(e.data)
            })
         .catch((e)=>{
                console.log("error from EmployeeList useEffect");
            })
            setReload(1)
        
    },[reload])
    let deleteUser = (e)=>{
      axios.delete(`http://localhost:4001/employee-list/${e}`)
      setReload(2)
    }

  return (
    <div className=''>
      <p>Total Count : {infoFromDB.length}</p>
       <table>
       <thead className=''>
          <tr>
            <th className=''>Unique Id</th>
            <th className=''>Image</th>
            <th className=''>Name</th>
            <th className=''>Email</th>
            <th className=''>Phone</th>
            <th className=''>Designation</th>
            <th className=''>Gender</th>
            <th className=''>Course</th>
            <th className=''>Action</th>
          </tr>
        </thead>
        <tbody className='text-center text-[15px]'>
          {infoFromDB.map((item,i) => (
            <tr key={item.id}>
              <td className=''>{i+1}</td>
              <td className=''><img alt="itemimage" src=""/></td>
              <td className=''>{item.name}</td>
              <td className=''>{item.email}</td>
              <td className=''>{item.phone}</td>
              <td className=''>{item.designation}</td>
              <td className=''>{item.gender}</td>
              <td className=''>{item.course[0]},{item.course[1]}</td>
              <td className=''>
                <Link  to={`/edit-employee/${item._id}`}>Edit - </Link>
                <button   onClick={()=>{deleteUser(item._id)}}> Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
        
       </table>
    </div>
  )
}

export default EmployeeList