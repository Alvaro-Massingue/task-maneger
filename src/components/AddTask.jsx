import { useState } from "react";
import InputTitle from "./InputTitle";
import InputDescription from "./InputDescription";
import InputButton from "./InputButton";

const AddTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="mt-20 ">
      <div className="flex flex-wrap gap-4">
        <InputTitle
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Titulo"
        />
        <InputDescription
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Descricao"
        />
        <InputButton
          icon="add"
          className="border-2 border-purple-600"
          onClick={() => {
            props.addTask(title, description);
            setTitle("");
            setDescription("");
          }}
        />
      </div>
      <p className="text-purple-600">{props.error}</p>
    </div>
  );
};

export default AddTask;
