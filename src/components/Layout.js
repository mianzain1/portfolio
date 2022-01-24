import styles from "../styles/Layout.module.css"
import Home from "../pages/Home";
import TopBar from "./TopBar";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { height } from "@mui/system";
const Layout = () => {
    const pageNotFound = () => {

       return <h1 style={{justifyContent:"center",alignItems:"center",display:"flex" ,height:"auto"}}>404! not Found</h1>
    }
    return (
        <Router>
            <div className={styles.container}>
                <TopBar />
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route >
                    <Route path="/skills" component={Skills} />
                    <Route path="/education" component={Education} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route component={pageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default Layout
