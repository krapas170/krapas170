import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Forks from "./pages/Forks";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <div id="display">
        <About />
        <Projects />
        <Forks />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
