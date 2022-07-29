import React from "react";
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content"
function App() {
  return (
    <div className="App">
      <Header />
      <main className="container main">
        <Sidebar />
        <Content />
      </main>
    </div>
  );
}

export default App;
