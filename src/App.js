import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  GradientCircleMd,
  GradientCircleTop,
} from "./components/GradientCircle";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import "./app.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Experience from "./components/Experience";
import About from "./components/About";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <main className="main" style={{ position: "relative" }}>
        <GradientCircleTop />
        <GradientCircleMd />
        <Intro />
        <About />
        <Works />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
