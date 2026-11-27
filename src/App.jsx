import { useState } from "react";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Projects from './pages/projects'
import Tasks from './pages/tasks'
import Login from '../src/pages/login'
import Team from './pages/team'
import Dashboard from './pages/dashboard'
import Calender from './pages/calender'
import Settings from "./pages/settings"
import Client from './pages/client'
import Register from './pages/register'
import Admin from './pages/Admin/adminlayout'
import AdminDashboard from './pages/Admin/dashboard'
import AdminSettings from './pages/Admin/settings'
import AdminUserdetails from './pages/Admin/userdetails'

function App() {
  const[email, setEmail] = useState("");
  const[pass, setPass]=useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
  };

  function print(){
    console.log("printing inside print function")
    console.log(email,pass)
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}> </Route>
      <Route path="/tasks" element={<Tasks/>}> </Route>
      <Route path="/projects" element={<Projects/>}></Route> 
      <Route path="/team" element={<Team/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/calender" element={<Calender/>}></Route>
      <Route path="/settings" element={<Settings/>}></Route>
      <Route path="/client" element={<Client/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/admin" element={<Admin/>}>
        <Route path="dashboard" element={<AdminDashboard/>}/> 
        <Route path="settings" element={<AdminSettings/>}/>
        <Route path="userdetails" element={<AdminUserdetails/>}/>
      </Route>        
    </Routes>
    </BrowserRouter>
     
  );
}
export default App;