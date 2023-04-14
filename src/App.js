import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Forks from "./pages/Forks";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Header />
        <TransitionGroup>
          <CSSTransition timeout={500} classNames="fade" /*key={location.key}*/>
            <div id="display">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Projects />} />
                <Route path="/forks" element={<Forks />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
