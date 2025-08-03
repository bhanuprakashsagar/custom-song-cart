export function Textarea({ placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      rows="4"
      className="w-full p-2 border border-gray-300 rounded-lg"
    ></textarea>
  );
}
