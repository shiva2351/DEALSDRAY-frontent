import { Link } from 'react-router-dom'
import "./index.css"

const Header=()=>{

    console.log("header")
    return <div className="header">
    <ul className='head-ul'>
      <li>Home</li>
      <li><Link to='/create'> Create Employee</Link> </li>
      <li><Link to="/list">  Employee list </Link> </li>
      <li className=''>hh</li>
      <li>Logout</li>
    </ul>
  </div>
}

    export default Header