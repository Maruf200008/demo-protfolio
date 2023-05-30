import "./App.css";
import { Contact, Experince, Intro, Navbar, Portfolio, Services, Testmonials, Works } from "./components";

function App() {

 
  return (
    <div className=" ">
      <Navbar />
      <Intro />
      <Services />
      <Experince />
      <Works/>
      <Portfolio/>
      <Testmonials/>
      <Contact/>
    </div>
  );
}

export default App;
