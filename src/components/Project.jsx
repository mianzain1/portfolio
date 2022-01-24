import { useState } from "react";
import styles from "../styles/Projects.module.css"
import projectsData from "../data/projectListData";
const Project = () => {

    const [projects, setProjects] = useState(projectsData);
    const filterItem = (cat) => {
        const updatedItems = projectsData.filter((element) => {
            return element.category === cat;
        })
            setProjects(updatedItems)
    }
    return (
        <>
            <div className={styles.tabs}>
                <div className={styles.tabsContainer}>
                    <button className={styles.button} onClick={() => setProjects(projectsData)} >All</button>
                    <button className={styles.button} onClick={() => filterItem('react')}>React Js</button>
                    <button className={styles.button} onClick={() => filterItem('express')}>Express Js</button>
                    <button className={styles.button} onClick={() => filterItem('mern')} >Mern Stack</button>
                </div>
            </div>
            <div className={styles.flexContainer}>
                {
                    projects.map((items) => {
                        const { id, title, desc, category, tags, github, youtube, live } = items;
                        return (
                            <div className={styles.flexItemLeft}>
                                <div className={styles.image}>
                                    <img src="https://picsum.photos/id/237/200/300" alt="" />
                                </div>
                                <div className={styles.projects}>
                                    <h1>{title}</h1>
                                    <p className={styles.desc}>{desc}</p>
                                    <div className={styles.tag}>
                                        <span>#{tags}</span>
                                    </div>
                                    <div className={styles.icons}>
                                        {github && <a href={github}><i style={{ color: "#9599A0" }} className="fab fa-github"></i></a>}
                                        {youtube && <a href={youtube}><i style={{ color: "#9599A0" }} className="fab fa-youtube"></i></a>}
                                        {live && <a href={live}><i style={{ color: "#9599A0" }} className="fas fa-globe"></i></a>}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default Project;
