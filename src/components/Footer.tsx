
import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 justify-items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">Edu4Change</h3>
            <p className="text-gray-400 mb-4">
              Inisiatif untuk meningkatkan kualitas pendidikan di Indonesia dan mendorong peningkatan skor PISA dalam jangka panjang.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="#beranda" className="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#tantangan" className="text-gray-400 hover:text-white transition-colors">Tantangan</a></li>
              <li><a href="#tujuan" className="text-gray-400 hover:text-white transition-colors">Tujuan</a></li>
              <li><a href="#strategi" className="text-gray-400 hover:text-white transition-colors">Strategi</a></li>
              <li><a href="#sumber-daya" className="text-gray-400 hover:text-white transition-colors">Sumber Daya</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Edu4Change. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
