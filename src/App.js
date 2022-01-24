import styles from "./app.module.css"
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import SideBar from "./components/SideBar";




function App() {
  return (
    <>
      
      <div className={styles.app} >
        <SideBar />
        <Layout />
      </div>
        <Footer />
    </>
  );
}

export default App;
