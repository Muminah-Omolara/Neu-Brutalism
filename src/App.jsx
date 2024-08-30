import "./App.css";
import About from "./Components/About";
import Portfolio from "./Components/MyPortfolio";
import NavBar from "./Components/Navbar";
import styles from "./Components/neuBrutalism.module.css";
import SecondNav from "./Components/SecondNav";
import Services from "./Components/Services";
import Table from "./Components/Table";
import Testimonials from "./Components/Testimonial";

function App() {
  return (
    <div className={styles.neuBrutalism}>
      <div>
        <NavBar />
      </div>
      <div>
        <About />
      </div>
      <div>
        <SecondNav />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Table />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
