
import './App.css';
import LoginRoute from './components/LoginRoute';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import RegistrationRoute from './components/RegistrationRoute';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/login" Component={LoginRoute}/>
        <Route path="/" Component={DashBoard} />
        <Route path="/Edit" Component={EditEmployee}/>
        
        <Route path="/create" Component={CreateEmployee}/> 
      
        <Route path="/list" Component={EmployeeList}/>
        <Route path="/registration" Component={RegistrationRoute}/>
      </Routes>
    </div>
  );
}

export default App;
