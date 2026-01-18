export default function InputDescription(props) {
  return (
    <input
      className="border-2 border-amber-50 border-solid rounded-2xl h-12 basis-90 grow shrink-2 bg-white outline-0 focus:shadow-2xl shadow-fuchsia-800"
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
