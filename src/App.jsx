import { useEffect, useState } from "react";
import { getProducts } from "./api/fakeStore";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10 text-xl">Cargando productos...</h2>;
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        FakeStore Catalog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-3"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-green-600 font-bold text-lg">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;