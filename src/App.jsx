import { useState } from "react";
import Footer from "./Footer";
import Testimonial from "./Testimonial";  
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
