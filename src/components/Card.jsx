function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default Card;
