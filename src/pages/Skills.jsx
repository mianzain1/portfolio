import styles from "../styles/Skills.module.css"
const Skills = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3 className={styles.heading}>Technical Skills</h3>
                <ul className={styles.listItems}>
                    <li>Microsoft Office</li>
                    <li>Adobe PhotoShop</li>
                    <li>Canva</li>
                </ul>
                <h3 className={styles.heading}>Programming Languages Skills / tech stacks</h3>
                <ul className={styles.listItems}>
                    <li >HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Mern Stack</li>
                    <li>Some Experience With Wordpress</li>
                </ul>
                <h3 className={styles.heading}>Favourite Libraries and FrameWorks</h3>
                <ul className={styles.listItems}>
                    <li>Material Ui</li>
                    <li>Next JS</li>
                    <li>Socket Io</li>
                    <li>Mern Stack</li>
                    <li>Passport Js</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills
