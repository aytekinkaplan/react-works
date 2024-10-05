import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ padding: "20px 0" }}>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
