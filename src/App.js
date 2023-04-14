import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Forks from "./pages/Forks";
import Projects from "./pages/Projects";
import { Route, Switch } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Header />
        <TransitionGroup>
          <CSSTransition timeout={500} classNames="fade">
            <div id="display">
              <Switch>
                <Route exact path="/" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Projects} />
                <Route path="/forks" component={Forks} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
