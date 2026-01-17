import { useEffect, useState } from "react";
import Home from "./pages/Home";
import UpdateTask from "./pages/UpdateTask";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programacao",
      description:
        "Estudar programacao para me tornar um desenvolvedor fullstack",
      isCompleted: false,
      isDisplayed: false,
    },
  ]);
  const [error, setError] = useState("");
  const [errorUpdate, setErrorUpdate] = useState("");

  const addTask = (title, description) => {
    if (title !== "" && description !== "") {
      let newTask = {
        id: tasks.length + 1,
        title: title,
        description: description,
        isCompleted: false,
        isDisplayed: false,
      };
      setTasks([...tasks, newTask]);
      setError("");
    } else {
      setError("Nao pode criar uma tarefa vazia");
    }
  };

  const removeTask = (taskId) => {
    let newTask = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(newTask);
  };
  const isCompleted = (taskId) => {
    let newTask = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(newTask);
  };

  const isDisplayed = (taskId) => {
    let newTask = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isDisplayed: !task.isDisplayed };
      } else {
        return task;
      }
    });
    setTasks(newTask);
  };

  const updateTask = (taskId, newTitle, newDescription) => {
    if (newTitle != "" && newDescription != "") {
      setTasks(
        tasks.map((task) => {
          if (task.id == taskId) {
            return {
              ...task,
              title: newTitle,
              description: newDescription,
              isUpdated: !task.isUpdated,
            };
          } else {
            return task;
          }
        })
      );
      return true;
    } else {
      setErrorUpdate("Prencher os espacos em branco");
      return false;
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            tasks={tasks}
            addTask={addTask}
            removeTask={removeTask}
            isCompleted={isCompleted}
            isDisplayed={isDisplayed}
            error={error}
          />
        }
      />
      <Route
        path="/update"
        element={
          <UpdateTask
            tasks={tasks}
            updateTask={updateTask}
            errorUpdate={errorUpdate}
          />
        }
      />
    </Routes>
  );
};

export default App;
