import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Admin() {
    return (
        <div> 
            <nav>
                <Link to ={'/admin/dashboard'}>Dashboard</Link>
                <Link to ={'/admin/settings'}>Settings</Link>
                <Link to ={'/admin/userdetails'}>User Details</Link>
            </nav>
            <Outlet/>
        </div>
     );
}

export default Admin ;