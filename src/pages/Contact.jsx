import styles from "../styles/Contact.module.css"

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3 className={styles.heading}>Contacts</h3>
                <ul className={styles.listItems}>
                    <li><i style={{ marginRight: "8px" }} className="fas fa-envelope"></i><a className={styles.contactLinks} href="mailto:zainzainn651@gmail.com">Email</a></li>
                    <li><i style={{ marginRight: "8px" }} className="fab fa-github"></i><a className={styles.contactLinks} href="https://github.com/mianzain1">Github</a></li>
                    <li><i style={{ marginRight: "8px" }} className="fab fa-instagram"></i><a className={styles.contactLinks} href="https://www.instagram.com/zain_zahid__/">Instagram</a></li>
                    <li><i style={{ marginRight: "8px" }} className="fas fa-phone"></i><a className={styles.contactLinks}  href="tel:+923057147169">Phone Number</a></li>
                    <li><i style={{ marginRight: "8px" }} className="fab fa-linkedin"></i><a className={styles.contactLinks} href="https://www.linkedin.com/in/zain-zahid-706bb31a1/">Linkedin</a></li>
                </ul>
                <h3 className={styles.heading}>Location</h3>
                <ul className={styles.listItems}>
                <li>D-type Colony Faisalabad</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Contact
