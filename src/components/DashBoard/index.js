import React, { useEffect, useState } from 'react'
import axios from "axios"
import {  useParams } from 'react-router-dom'
import Header from '../Header'


const DashBoard = () => {
  let [name, setname] = useState("")
  let ID = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:4001/user/${ID.ID}`)
    .then((e)=>{
      setname(e.data)
    
    })
    .catch(()=>{console.log("unable to fetch data in Edit comp");})
},[])

  return (
    <div>
      <Header/>
      <h1 className=''>DashBord</h1>
      <p>Wellcome to admin panel</p>
    </div>
  )
}

export default DashBoard