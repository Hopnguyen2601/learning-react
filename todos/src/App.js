import { useState } from "react";
import Pagination from "./components/Pagination";
import TodoList from "./components/TodoList";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Sidebar />
        <main className="main-content">
          <>
            <TodoList />
            <Pagination />
          </>
        </main>
      </div>
    </div>
  );
}

export default App;
