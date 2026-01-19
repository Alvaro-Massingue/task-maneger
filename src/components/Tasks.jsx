import { useNavigate } from "react-router-dom";
import InputButton from "../components/InputButton";

export default function Tasks(props) {
  const navigate = useNavigate();
  const updateTask = (task) => {
    if (task.id && task.title && task.description) {
      navigate(
        `/update?id=${task.id}&&title=${task.title}&&description=${task.description}&&update=${task.isUpdated}`
      );
    }
  };

  return (
    <div className="flex w-[95%] md:w-1/2 items-center flex-col gap-4">
      {props.tasks.map((task) => (
        <div
          key={task.id}
          className=" w-full flex items-center flex-wrap bg-white rounded-xl p-2 gap-2"
        >
          <div className="basis-full wrap-break-word w-1/2">
            <p
              class={
                task.isCompleted
                  ? "text-gray-500 text-xl opacity-40"
                  : "text-purple-600 text-xl"
              }
            >
              {task.title}
            </p>
            {task.isDisplayed ? (
              <p class={task.isCompleted ? "text-gray-500  opacity-40" : ""}>
                {task.description}
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="flex basis-full gap-1 items-center">
            <input
              className="w-15 h-6 cursor-pointer"
              type="checkbox"
              onClick={() => props.isCompleted(task.id)}
            />
            <InputButton
              onClick={() => props.removeTask(task.id)}
              icon="delete"
            />
            <InputButton
              onClick={() => props.isDisplayed(task.id)}
              icon="visibility"
            />
            <InputButton onClick={() => updateTask(task)} icon="edit" />
          </div>
        </div>
      ))}
    </div>
  );
}
