function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-green-700">{title}</h3>

      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default Card;