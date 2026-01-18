import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

const Home = (props) => {
  return (
    <div className="bg-gray-950 w-full min-h-screen flex items-center flex-col gap-16 m-0 overflow-x-hidden">
      <AddTask addTask={props.addTask} error={props.error} setError={props.setError} />
      <Tasks
        tasks={props.tasks}
        removeTask={props.removeTask}
        isCompleted={props.isCompleted}
        isDisplayed={props.isDisplayed}
      />
    </div>
  );
};

export default Home;
