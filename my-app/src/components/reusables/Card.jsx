function Card({ icon, title, description }) {
  return (
    <div className="border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 bg-white">
      <div className="mb-4">{icon}</div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-500 leading-7">{description}</p>
    </div>
  );
}

export default Card;
