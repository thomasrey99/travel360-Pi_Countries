import "./Navbar.css"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
const Navbar=()=>{

    const {pathname}=useLocation()
    return (
        <header className="nav-cont"> 
            <div className="div-title">
                <NavLink to={"/"} className="link-title"><h1 className="logo-title"><span className="tr">Tr</span><span className="av">av</span><span className="el">el</span><span className="grados"> 360°</span></h1></NavLink>
            </div>
            <div className="div-links">
                {pathname==="/home"?<NavLink to={"/home"} className="link" id="active">Inicio</NavLink>:<NavLink to={"/home"} className="link">Inicio</NavLink>}
                {pathname==="/About"?<NavLink to={"/About"} className="link" id="active">About</NavLink>:<NavLink to={"/About"} className="link">About</NavLink>}
                {pathname==="/createActivity"?<NavLink to={"/createActivity"} className="link" id="active">Crear actividad</NavLink>:<NavLink to={"/createActivity"} className="link">Crear actividad</NavLink>}
            </div>
        </header>
    )
}

export default Navbar