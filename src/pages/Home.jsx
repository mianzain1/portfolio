import styles from "../styles/Home.module.css"
import { GitHub, LinkedIn } from "@mui/icons-material"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const { text } = useTypewriter({
        words: ['Web Developer', 'Mern Stack'],
        loop: 0,
        typeSpeed: 70
    })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.intro}>Hi I'm Zain Zahid</div>
                <div className={styles.role}>I'm {text} <Cursor /></div>
            </div>
            <div className={styles.iconContainer}>
                <a href="https://github.com/mianzain1" className={styles.icons}><GitHub className={styles.iconsClass} style={{ fontSize: "48px" }} /> Follow On Github</a>
                <a href="https://www.linkedin.com/in/zain-zahid-706bb31a1/" className={styles.icons}><LinkedIn className={styles.iconsClass} style={{ fontSize: "48px" }} /> Follow On Instagram</a>
            </div>
        </div >
    )
}

export default Home
