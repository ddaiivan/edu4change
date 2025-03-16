
import React from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section id="beranda" className="pt-24 pb-16 md:pt-32 bg-gradient-to-br from-edu-light via-white to-blue-50">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-edu-dark leading-tight mb-4">
              Edu4Change
            </h1>
            <h2 className="text-xl md:text-2xl text-edu-gray mb-6">
              Rencana Peningkatan Kualitas Pendidikan Indonesia
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Inisiatif untuk merencanakan dan mengimplementasikan peningkatan kualitas pendidikan 
              di Indonesia, dengan fokus pada peningkatan skor PISA (Programme for International Student Assessment).
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#tantangan" 
                className="px-6 py-3 bg-edu-primary text-white rounded-md hover:bg-edu-dark transition-colors shadow-md"
              >
                Lihat Tantangan
              </a>
              <a 
                href="#strategi" 
                className="px-6 py-3 bg-white text-edu-primary border border-edu-primary rounded-md hover:bg-edu-light transition-colors"
              >
                Strategi Kami
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-edu-primary opacity-10 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop" 
                  alt="Pendidikan Indonesia" 
                  className="rounded w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-edu-tertiary text-white p-3 rounded-lg shadow-lg transform rotate-3">
                <span className="font-bold">#PendidikanMaju</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
