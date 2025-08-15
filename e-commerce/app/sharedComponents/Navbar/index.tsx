import SearchBar from "../SearchBar";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-m md:px-20 ">
      <span className="font-bold text-3xl text-black cursor-pointer">Exclusive</span>

      <ul className="flex space-x-15 text-lg  text-black ">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/signup" className="hover:underline">
            Signup
          </a>
        </li>
      </ul>
<SearchBar/>
        
    </nav>
  );
};

export default NavBar;
