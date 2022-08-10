import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import TaskForm from "./components/TaskForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const tasksList = JSON.parse(localStorage.getItem("data")) || [];
  const doingTasks = tasksList.filter((item) => item.status === "Doing");
  const doneTasks = tasksList.filter((item) => item.status === "Done");
  const newTasks = tasksList.filter((item) => item.status === "New");

  return (
    <div className="App">
      <Header />

      <div className="container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<TodoList data={tasksList} />} />
            <Route path="/newtasks" element={<TodoList data={newTasks} />} />
            <Route
              path="/doingtasks"
              element={<TodoList data={doingTasks} />}
            />
            <Route path="/donetasks" element={<TodoList data={doneTasks} />} />
            <Route path="/add" element={<TaskForm />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
