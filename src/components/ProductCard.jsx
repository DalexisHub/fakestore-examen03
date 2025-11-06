function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto"
      />
      <h3 className="font-semibold mt-4 line-clamp-2">{product.title}</h3>
      <p className="text-gray-700 mt-2 font-bold">${product.price}</p>
      <p className="text-sm text-gray-500 mt-1">{product.category}</p>
    </div>
  );
}

export default ProductCard;