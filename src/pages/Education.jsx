import styles from "../styles/Education.module.css"
const Education = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h3 className={styles.heading}>High School (Matric)</h3>
                    <ul className={styles.listItems}>
                        <li>Govt. Comprehensive higher secondary school School</li>
                        <li>2019 in Computer Science</li>
                        
                    </ul>
                    <h3 className={styles.heading}>Intermediate</h3>
                    <ul className={styles.listItems}>
                        <li >Ripha International College Jarawala Road</li>
                        <li>2021</li>
                        
                    </ul>
                    <h3 className={styles.heading}>BS(CS) Currently Doing</h3>
                    <ul className={styles.listItems}>
                        <li>Ripha International College Jarawala Road (Online)</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education
