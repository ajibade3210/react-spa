import { useState } from "react";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery"
import Header from "./components/header/Header";

function App() {
  const [cartCount, setCartCount] = useState(2);

  const handeleCartCount = (childData) => {
    setCartCount(childData);
  };

  return (
    <div className="App">
     <Header cart={cartCount}/>
     <Gallery parentCallback={handeleCartCount}/>
     <Footer/>
     {/* <Nav/> */}
    </div>
  );
}

export default App;
