import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Info from "./components/Info";
import Project from "./components/Project";
import { links } from "./links";
import { classes } from "./classes";

function App() {
  return (
    <>
      <Nav links={links} />
      <Intro />
      <Info classes={classes} />
      <Project />
    </>
  );
}

export default App;
