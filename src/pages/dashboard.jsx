import { useState } from "react";
import { useLocation } from "react-router-dom"
import { useEffect } from "react";


function Dashboard(){
    const location=useLocation();
    const[userdata, setUserdata]=useState("");
    // function displaydata(){
    //     setUserdata(location.state);
    //     console.log(userdata);
    // }

    useEffect(()=>{
        setUserdata(location.state);
        console.log(userdata);
    },)
    
    return(
        <div>
        <button onClick={setUserdata}>Button</button>
                </div>
    );
}

export default Dashboard;