import { useState } from "react";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Landing from "./Landing";  
import styles from "./App.module.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.background}>
        <Landing />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
