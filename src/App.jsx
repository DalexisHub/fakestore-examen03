import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Entities from "./pages/entities";

function App() {
  return (
    <Router>
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-blue-600 font-bold text-xl">FakeStore Catalog</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/entities" className="text-gray-700 hover:text-blue-600">
            Entities
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entities" element={<Entities />} />
      </Routes>
    </Router>
  );
}

export default App;
