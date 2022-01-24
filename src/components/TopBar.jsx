import "../styles/TopBar.css"
import { NavLink, useLocation } from "react-router-dom"
import { Html } from "@mui/icons-material"
const TopBar = () => {
    const location = useLocation();
    const { pathname } = location
    const splitLocation = pathname.split("/");

    function myFunction() {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <>
            <div id="myTopnav" className="topnav">
                <NavLink className={splitLocation[1] === "" ? "active-link" : ""} to="/"><i style={{ color: "#E14C25" }} className="fab fa-html5"></i><a>Home.html</a></NavLink>
                <NavLink className={splitLocation[1] === "skills" ? "active-link" : ""} to="/skills"><i style={{ color: "#FECA27" }} className="fab fa-js"></i><a>Skills.js</a></NavLink>
                <NavLink className={splitLocation[1] === "education" ? "active-link" : ""} to="/education"><i style={{ color: "#A0335B" }} className="fab fa-sass"></i><a>Education.scss</a></NavLink>
                <NavLink className={splitLocation[1] === "projects" ? "active-link" : ""} to="/projects"><i style={{ color: "#46CFF3" }} className="fab fa-react"></i><a>Projects.jsx</a></NavLink>
                <NavLink className={splitLocation[1] === "contact" ? "active-link" : ""} to="/contact"><i style={{ color: "#15AABF" }} className="fas fa-info-circle"></i><a>Contact.md</a></NavLink>
                <a className="icon" href="#" onClick={e => e.preventDefault(), myFunction}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </>
    )

}

export default TopBar
