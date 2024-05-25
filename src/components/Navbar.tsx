import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <nav className=" bg-[#F3F4F6] flex justify-between items-center fixed top-0 left-0 w-full">
      <div className="flex items-center">
        <Link to="/" className="text-blue-700 text-lg font-bold mr-4 xl:ml-[10rem] flex">
          <img
          
          src="/removed.png"
          height={100}
          width={100}
          />
          
        </Link>
      </div>
      <div className="hidden md:flex mr-10 text-blue-700 xl:mr-[17rem] xl:gap-16">
        <Link to="/link-shortner" className="text-whit mr-4 ">
          Link Shortener
        </Link>
        <Link to="/scan-code" className="text-whit mr-4">
          Scan Code
        </Link>
        <Link to="/analytics" className="text-whit">
          Analytics
        </Link>
      </div>
      <div className="md:hidden">
        <button className="text-blue-700 focus:outline-none mr-3" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {showMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {showMenu && (
          <button className="text-white focus:outline-none ml-auto" onClick={closeMenu}></button>
        )}
      </div>
      {showMenu && (
        
        <div className="md:hidden absolute top-0 left-0 h-full bg-slate-200 w-[80%]">
          <div className="flex flex-col items-start p-4 mt-40 ">
          <button className="bg-white p-4 w-full mt-2 rounded">
            
            <Link to="/link-shortner" className="text-blue-500 py-2 text-md font-semibold hover:font-serif hover:text-white " onClick={closeMenu}>Link Shortener</Link>
            </button>  
            <button className="bg-white w-full mt-2 rounded  p-4">
              <Link to="/scan-code" className="text-blue-500 py-2 text-md font-semibold hover:font-serif hover:text-white " onClick={closeMenu}>Scan Code</Link>
              </button>
            <button className="bg-white w-full mt-2 rounded  p-4">
              <Link to="/analytics" className="text-blue-500 py-2 text-md font-semibold hover:font-serif hover:text-white " onClick={closeMenu}>Analytics</Link>
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;
