import Link from 'next/link';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex justify-between items-start mx-auto p-10 bg-white">

      <div className="flex space-y-2 mt-3">
        <h1 className="text-3xl font-serif text-gray-700">Hollie Beaumont</h1>
        <nav className='ml-8'>
        <ul className="flex space-x-6">
              <li><a href="/work" className="text-gray-700 hover:text-gray-800">Work</a></li>
              <li><a href="/about" className="text-gray-700 hover:text-gray-800">About</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-gray-800">Contact</a></li>
            </ul>
        </nav>
      </div>

      {/* Icônes à droite */}
      <div className="flex space-x-4 mt-4 ml-10">
        <a href="https://twitter.com" className="text-gray-700 hover:text-blue-500">
          <FaTwitter size={20} />
        </a>
        <a href="https://instagram.com" className="text-gray-700 hover:text-blue-500">
          <FaInstagram size={20} />
        </a>
      </div>
    </header>
  );
};
export default Header;