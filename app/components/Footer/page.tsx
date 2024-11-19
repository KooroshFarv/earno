import React from 'react'

const Footer = () => {
    return (
      <footer className=" text-black  py-8">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul>
                <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
                <li><a href="/products" className="hover:text-gray-400">Products</a></li>
                <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul>
                <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
                <li><a href="/shipping" className="hover:text-gray-400">Shipping</a></li>
                <li><a href="/returns" className="hover:text-gray-400">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/path/to/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/path/to/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/path/to/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  