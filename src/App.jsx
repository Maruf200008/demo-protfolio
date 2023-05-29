import "./App.css";
import { Experince, Intro, Navbar, Portfolio, Services, Testmonials, Works } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <Experince />
      <Works/>
      <Portfolio/>
      <Testmonials/>
    </div>
  );
}

export default App;
