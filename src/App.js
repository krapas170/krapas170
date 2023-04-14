import React, { useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [loadTimeout, setLoadTimeout] = useState(null);
  const [loadError, setLoadError] = useState(false);

  const handleLoadStart = () => {
    setLoading(true);
    setLoadTimeout(
      setTimeout(() => {
        setLoadError(true);
      }, 30000)
    );
  };

  const handleLoadEnd = () => {
    setLoading(false);
    setLoadError(false);
    clearTimeout(loadTimeout);
  };

  const handleLoadError = () => {
    setLoadError(true);
  };

  const handleReload = () => {
    window.location.reload(true);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Header />
        <TransitionGroup>
          <CSSTransition
            timeout={500}
            classNames="fade"
            onEnter={handleLoadStart}
            onEntered={handleLoadEnd}
            onExited={handleLoadEnd}
          >
            <div id="display">
              {loading && (
                <div className="loader">
                  {!loadError && <div className="loader-circle"></div>}
                  {loadError && (
                    <div className="loader-error">
                      <span>Anscheinend dauert es etwas länger zum Laden</span>
                      <button onClick={handleReload}>Ja</button>
                    </div>
                  )}
                </div>
              )}
              <Routes>
                <Route path="/" element={<Projects />} />
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
