import {
  GradientCircleMd,
  GradientCircleTop,
} from "./components/GradientCircle";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <GradientCircleTop />
        <GradientCircleMd />
        <Intro />
        <Skills />
        <Works />
      </main>
    </div>
  );
}

export default App;
