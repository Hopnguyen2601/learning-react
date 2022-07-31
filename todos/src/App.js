import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Sidebar from "./layout/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
