export default function InputTitle(props) {
  return (
    <input
      className="border-2 border-amber-50 border-solid rounded-2xl w-50 h-12 bg-white outline-0 focus:shadow-2xl shadow-fuchsia-800"
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
