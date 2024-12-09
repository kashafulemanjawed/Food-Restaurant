const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="flex items-center space-x-2 justify-around">
          <h1 className="text-lg font-bold items-center justify-around">
            <span className='text-brandprimary'>Food</span>
          <span className='text-white'>tuck</span></h1>
        </div>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-5">
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#" className="hover:text-orange-400">Home</a></li>
          <li><a href="#" className="hover:text-orange-400">Menu</a></li>
          <li><a href="#" className="hover:text-orange-400">Blog</a></li>
          <li><a href="#" className="hover:text-orange-400">Pages</a></li>
          <li><a href="#" className="hover:text-orange-400">About</a></li>
          <li><a href="#" className="hover:text-orange-400">Shop</a></li>
          <li><a href="#" className="hover:text-orange-400">Contact</a></li>
        </ul>

        {/* Search and Cart */}
        <div className="flex items-center space-x-5">
          <input 
            type="text"
            placeholder="Search..."
            className="hidden border-brandprimary lg:block bg-black text-sm text-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandprimary"
          />
          <button className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18M9 3v12m6-12v12M3 9h18M3 15h18"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-brandprimary text-white text-xs rounded-full px-1"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



     
 
   
