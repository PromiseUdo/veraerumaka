import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  GradientCircleMd,
  GradientCircleTop,
} from "./components/GradientCircle";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import "./app.scss";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <GradientCircleTop />
        <GradientCircleMd />
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
