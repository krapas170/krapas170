import React, { useEffect } from "react";
import Header from "./components/Header";
import { initGoogleAnalytics } from "./utils/gtag";

function App() {
  useEffect(() => {
    initGoogleAnalytics();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* Hier kommt der restliche Inhalt */}
    </div>
  );
}

export default App;
