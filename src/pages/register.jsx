import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
    const navigate = useNavigate();

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit1(data) {
        console.log(data);
        alert("Register success!!!");
        navigate("/", {
            state: data
        });
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg--100">

            <h1 className="text-blue-400 text-4xl font-italic-bold mb-8 mt-4 underline">
                Register
            </h1>

            <form onSubmit={handleSubmit(onSubmit1)} className="flex flex-col gap-3 w-80" >
                
                <label htmlfor className="font-bold text-1.5xl">Name</label>
                <input type="text"  placeholder="Enter your name"
                    className="w-full border -gray-400 rounded-md p-3 outline-none focus:border-blue-500 
                    placeholder-pink-500"{...register("name")}/>
                <p className="text-red-500 text-sm">{errors.name?.message}</p>

                <label className="font-bold">email id</label>
                <input type="text" placeholder="Enter your email"
                    className="w-full border -gray-400 rounded-md p-3 outline-none focus:border-blue-500
                     placeholder-pink-500"{...register("email")}/>
                <p className="text-red-500 text-sm">{errors.email?.message}</p>

                <label className="font-bold ">Password</label>
                <input
                    type="password" placeholder="Enter your password"
                    className="w-full border -gray-400 rounded-md p-3 outline-none focus:border-blue-500
                     placeholder-pink-500"{...register("password")}/>
                <p className="text-red-500 text-sm">{errors.password?.message}</p>

                <label className="font-bold">Age</label>
                <input
                    type="number" placeholder="Enter your age"
                    className="w-full border -gray-400 rounded-md p-3 outline-none focus:border-blue-500
                     placeholder-pink-500"{...register("age", { valueAsNumber: true })}
                />
                <p className="text-red-500 text-sm">{errors.age?.message}</p>

                <button
                    type="submit" className="bg-teal-600  text-white p-3 rounded-md hover:bg-teal-700 ">
                    Submit
                </button>

            </form>
        </div>
    );
}

export default Register;