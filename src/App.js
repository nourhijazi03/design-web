import Hero from "./views/Hero";
import Products from "./views/Products";
import Reference from "./views/Reference";
import Services from "./views/Services";
import Care from "./views/Care"; 
import Footer from "../src/components/Footer";


function App() {
  return (
    <div className="App">
      <Hero/>
      <Services/>
      <Products/>
      <Reference/>
      <Care/>
      <Footer/>
    </div>
  );
}

export default App;
