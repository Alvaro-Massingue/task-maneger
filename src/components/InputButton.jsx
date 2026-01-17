export default function InputButton(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={` rounded-2xl h-12 w-15 cursor-pointer  text-purple-600 hover:bg-purple-600 hover:text-white hover:border-0 ${
        props.className || ""
      }`}
    >
      <span className="material-symbols-outlined align-middle text-lg">
        {props.icon}
      </span>
    </button>
  );
}
