import styles from "../styles/Sidebar.module.css";
import { GitHub, Instagram, Email, LinkedIn } from "@mui/icons-material";


const SideBar = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}><GitHub style={{ fontSize: "38px" }} /></li>
                <li className={styles.item}><Instagram style={{ fontSize: "38px" }} /></li>
                <li className={styles.item}><Email style={{ fontSize: "38px" }} /></li>
                <li className={styles.item}><LinkedIn style={{ fontSize: "38px" }} /></li>
            </ul>
        </div>
    )
}

export default SideBar;
