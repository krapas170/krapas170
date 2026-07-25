import { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Forks from "./pages/Forks";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/**
 * Owns its own nodeRef so that the outgoing and the incoming page each get
 * their own DOM node. A single ref shared by AnimatedRoutes would be
 * overwritten by whichever element mounts last, and both transitions would
 * then write their .fade-* classes onto the same node.
 *
 * react-transition-group needs the explicit nodeRef because findDOMNode, its
 * fallback, was removed in React 19.
 *
 * TransitionGroup clones its direct children with `in`/`onExited`/…, so those
 * props are forwarded to CSSTransition here.
 */
function FadeRoute({ children, ...transitionProps }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      {...transitionProps}
      nodeRef={nodeRef}
      timeout={500}
      classNames="fade"
    >
      <div id="display" ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      {/* TransitionGroup detects enter/exit purely by child key. Without the
          pathname as key the single child keeps its implicit key forever and
          the .fade-* transitions never run. */}
      <FadeRoute key={location.pathname}>
        {/* Passing `location` keeps the outgoing page rendering its own
            content while it fades out. */}
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/work" replace />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/forks" element={<Forks />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FadeRoute>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
