import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {

    const location = useLocation();

    const [Logindata, setFormdata] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    function handlechange(e) {
        setFormdata({
            ...Logindata,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const registerdata = location.state;
        console.log("Register data", registerdata);
        console.log("Login page", Logindata);
        if (Logindata.username === registerdata.name &&
            Logindata.password === registerdata.password) {
            console.log("if success");
            navigate("/dashboard", {
                state: Logindata
            });
        } else {
            alert("invalid input");
        }
    };

    function print() {
        console.log("printing inside print function");
        console.log(Logindata);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
            <div> <label className="block text-gray-700 font-semibold mb-2">Username</label>
             <input type="text" id="username" required  placeholder="Enter your username"
              name="username" onChange={handlechange} className="w-full border border-gray-300 
              rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/></div>

             <div><label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input type="password" id="password" required placeholder="Enter your password"
              name="password" onChange={handlechange} className="w-full border border-gray-300 
              rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/></div>

              <button type="submit"  className="w-full bg-blue-600 text-white font-semibold py-3 
              rounded-lg hover:bg-blue-700 transition duration-300">Submit</button>

             <button type="button" onClick={print}
              className="w-full bg-gray-600 text-white font-semibold py-3 rounded-lg hover:bg-gray-700 
              transition duration-300">Print</button>

              </form>
            </div>
        </div>
    );
}

export default Login;