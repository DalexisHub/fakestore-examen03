function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-10 rounded-xl text-center shadow-lg">
      <h1 className="text-4xl font-bold mb-3">🛍️ FakeStore Catalog</h1>
      <p className="text-lg max-w-2xl mx-auto">
        Bienvenido a FakeStore Catalog, una aplicación web que muestra productos reales 
        desde la API pública <span className="font-semibold">FakeStoreAPI</span>. 
        Explora artículos con sus precios e imágenes en un diseño moderno y sencillo.
      </p>
    </section>
  );
}

export default Hero;
