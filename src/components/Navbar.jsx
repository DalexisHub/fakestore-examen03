import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🛍️ FakeStore Catalog</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/entities" className="hover:underline">Productos</Link>
      </div>
    </nav>
  );
}

export default Navbar;