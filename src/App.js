import {
  GradientCircleMd,
  GradientCircleTop,
} from "./components/GradientCircle";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <GradientCircleTop />
        <GradientCircleMd />
        <Intro />
        <Skills />
      </main>
    </div>
  );
}

export default App;
