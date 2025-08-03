export function Button({ children, className }) {
  return (
    <button
      className={`bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
