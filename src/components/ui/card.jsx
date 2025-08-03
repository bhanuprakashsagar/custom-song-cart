export function Card({ children }) {
  return <div className="bg-white rounded-2xl shadow-md p-6">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
