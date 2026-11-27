import { useFormAction, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/registerschema";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";


function Register() {
    const location=useLocation();
    const navigate=useNavigate();
    const{register,handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })

function onSubmit1(data){
    console.log(data)
    alert("register success")
    navigate("/",{
        state:data
    })
}

return (
    
    <>
    <form onSubmit={handleSubmit(onSubmit1)}>
    
        <input type="text" placeholder="Enter your name" {...register("name")}/ >
        <p>{errors.name?.message}</p>
        <input type="text" placeholder="Enter your email" {...register("email")}/ >
        <p>{errors.email?.message}</p>
        <input type="password" placeholder="Enter your pasword" {...register("password")}/ >
        <p>{errors.password?.message}</p>
        <input type="number" placeholder="Enter your age" {...register("age")}/ >
        <p>{errors.age?.message}</p>
        <button type="submit">Submit</button>
    </form>
</>
);
}
    
export default Register;