import { useState } from "react";
import { BrowserRouter,Route, Routes, Router } from "react-router-dom";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";

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
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
    </Routes>
    </BrowserRouter>    
  );
}
export default App;