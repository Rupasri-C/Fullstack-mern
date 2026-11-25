import { useState } from "react";   

function Login() {
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

    <div>
    <form onSubmit={handleSubmit}>

      <input type="email" id="email" required placeholder="Enter your email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>

      <input type="password" id="password" required placeholder="Enter your password" value={pass}
        onChange={(e) => setPass(e.target.value)}/>

      <button type="submit">Submit</button>
      <button type="button" onClick={print}>Print</button>
    </form>

    </div>
    
  );
}
export default Login;