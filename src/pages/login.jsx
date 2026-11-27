import { useState } from "react";   
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"

function Login() {
  //const[email, setEmail] = useState("");
  //const[pass, setPass]=useState("");
  const location=useLocation();
  const[Logindata,setFormdata]=useState(
    {
    username:"",
    password:""
    });

  const navigate = useNavigate();

  function handlechange(e){
    setFormdata({
      ...Logindata ,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerdata=location.state;
    console.log("Register data",registerdata);
    console.log("Login page",Logindata);
    if(Logindata.username===registerdata.name && Logindata.password===registerdata.password){
      console.log("if success");
      navigate("/dashboard",
        {state:Logindata})
    }else{
        alert("invalid input")
    }
  };

  function print(){
    console.log("printing inside print function")
    console.log(Logindata)
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