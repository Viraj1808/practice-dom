import { Link } from "react-router-dom";


function Navbar(){
    return( 
     <>
     <h1> This is a Navbar</h1>
     <nav>
        <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li> <Link to={"/home2"}>Home2</Link></li>
            <li> <Link to={"/virraj"}>Home3</Link></li>
            <li> <Link to={"/services"}>Services</Link></li>
        </ul>
     </nav>
     </>
    );
}
export default Navbar;