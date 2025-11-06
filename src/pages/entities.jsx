import { useEffect, useState } from "react";
import { getProducts } from "../api/fakeStore";

function Entities() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Lista de Entidades (Productos)
      </h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded-xl shadow bg-white">
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-700">💰 Precio: ${p.price}</p>
            <p className="text-gray-500">📂 Categoría: {p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entities;
