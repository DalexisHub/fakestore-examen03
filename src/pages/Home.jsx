import { useEffect, useState } from "react";
import { getProducts } from "../api/fakeStore";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="p-6">
      <Hero />
      <h2 className="text-2xl font-bold text-center mt-8 mb-4">
        Productos Destacados
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 8).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;