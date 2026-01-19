import { useEffect, useState } from "react";

const Title = () => {
  const title = "Gerencie suas tarefas";
  const description = "de forma eficiente";
  const [index, setIndex] = useState(0);
  const [showTitle, setShowTitle] = useState("");
  const [indexD, setIndexD] = useState(0);
  const [showDescription, setShowDescription] = useState("");

  useEffect(() => {
    if (index < title.length) {
      const show = setInterval(() => {
        setShowTitle((prev) => prev + title[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearInterval(show);
    }
  }, [index]);

  useEffect(() => {
    if (index === title.length && indexD < description.length) {
      const showDescription = setInterval(() => {
        setShowDescription((prev) => prev + description[indexD]);
        setIndexD(indexD + 1);
      }, 100);
      return () => clearInterval(showDescription);
    }
  }, [index, indexD]);
  
  return (
    <div className="mt-30 w-screen md:w-1/2 flex flex-col items-center wrap-break-word">
      <p className="text-3xl font-bold text-center bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent md:text-6xl">
        {showTitle}
      </p>
      <p className="text-3xl font-bold text-center bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent md:text-6xl">
        {showDescription}
      </p>
    </div>
  );
};

export default Title;
