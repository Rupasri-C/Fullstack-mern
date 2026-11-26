import { useState } from "react";   
import { useNavigate } from "react-router-dom";

function Login() {
  //const[email, setEmail] = useState("");
  //const[pass, setPass]=useState("");
  const[formdata,setFormdata]=useState(
    {
    username:"",
    password:""
    });

  const navigate = useNavigate();

  function handlechange(e){
    setFormdata({
      ...formdata ,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login page",formdata);
    alert("Login Successfull!");
    navigate("/dashboard",
      {state:formdata})
  };

  function print(){
    console.log("printing inside print function")
    console.log(formdata)
  }
  return (

    <div>
    <form onSubmit={handleSubmit}>

      <input type="text" id="username" required placeholder="Enter your username" name="username" 
        onChange={handlechange}/>

      <input type="password" id="password" required placeholder="Enter your password" name="password" 
        onChange={handlechange}/>

      <button type="submit">Submit</button>
      <button type="button" onClick={print}>Print</button>
    </form>

    </div>
    
  );
}
export default Login;