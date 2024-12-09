const Footer = () => {
    return (
      <footer className="bg-black text-gray-400 py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">About Us.</h3>
            <p className="text-sm">
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional services in major
              cities worldwide.
            </p>
            <p className="text-sm mt-3">
              <span className="text-orange-400 font-semibold">Opening Hours:</span><br />
              Mon - Sat: 8.00 AM - 6.00 PM<br />
              Sunday: Closed
            </p>
          </div>
  
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Useful Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Partners</a></li>
              <li><a href="#" className="hover:text-white">Team</a></li>
              <li><a href="#" className="hover:text-white">Menu</a></li>
              <li><a href="#" className="hover:text-white">Contacts</a></li>
            </ul>
          </div>
  
          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Help?</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Reporting</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Support Policy</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
  
          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Recent Post</h3>
            <ul className="text-sm space-y-3">
              {[...Array(1)].map((_, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <img
                    src="unsplash_CLMpC9UhyTo (3).png" 
                    alt="Post Thumbnail"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-brandprimary text-xs">20 Feb 2022</p>
                    <p className="hover:text-white">Keep Your Business</p>
                  </div>
                </li>
              ))}
               {[...Array(1)].map((_, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <img
                    src="unsplash_CRoAeTh5S_I.png" 
                    alt="Post Thumbnail"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-brandprimary text-xs">20 Feb 2022</p>
                    <p className="hover:text-white">Keep Your Business</p>
                  </div>
                </li>
              ))}
               {[...Array(1)].map((_, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <img
                    src="unsplash_50KffXbjIOg.png" 
                    alt="Post Thumbnail"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-brandprimary text-xs">20 Feb 2022</p>
                    <p className="hover:text-white">Keep Your Business</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 bg-[#4F4F4F] mt-10 pt-5 text-center w-full text-white">
          <p className="text-sm flex items-center">
            Copyright © 2022 by Ayeman
            All Rights Reserved.
          </p>
          <div className="mt-3 flex justify-center space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  