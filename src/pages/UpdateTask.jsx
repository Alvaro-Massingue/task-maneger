import InputButton from "../components/InputButton";
import InputTitle from "../components/InputTitle";
import InputDescription from "../components/InputDescription";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const UpdateTask = (props) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  if (!id || !title || !description) {
    navigate("/");
  }
  return (
    <div className="bg-gray-950 w-full min-h-screen flex items-center flex-col gap-16 m-0 overflow-x-hidden">
      <div className="mt-20 flex w-1/2 flex-col gap-4">
        <div className="flex flex-wrap w-full gap-4">
          <InputTitle
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
            placeholder="Titulo"
          />
          <InputDescription
            value={newDescription}
            onChange={(event) => setNewDescription(event.target.value)}
            placeholder="Descricao"
          />
          <InputButton
            onClick={() => {
              {
                props.updateTask(id, newTitle, newDescription)
                  ? navigate(-1)
                  : "";
              }
            }}
            icon="add"
            className="border-2 border-purple-600"
          />
        </div>
        <p className="text-purple-600">{props.errorUpdate}</p>
        <InputButton
          onClick={() => {
            navigate(-1);
            setNewTitle("");
            setNewDescription("");
          }}
          icon="arrow_back"
          className="border-2 border-purple-600"
        />
      </div>
    </div>
  );
};

export default UpdateTask;
