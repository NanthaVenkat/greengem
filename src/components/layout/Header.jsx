import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/career">Career</Link>
          <Link to="/privacy">Privacy</Link>
        </nav>

        <button className="md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}
