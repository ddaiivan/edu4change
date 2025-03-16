
import React from 'react';
import { Book, GraduationCap, LineChart, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Tentang Edu4Change</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            Edu4Change adalah inisiatif untuk merencanakan dan mengimplementasikan peningkatan kualitas 
            pendidikan di Indonesia, dengan fokus pada peningkatan skor PISA 
            (Programme for International Student Assessment).
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-container p-6 flex flex-col items-center text-center hover:border-t-4 hover:border-edu-primary transition-all"
            >
              <div className="rounded-full bg-edu-light p-3 mb-4">
                <feature.icon className="h-8 w-8 text-edu-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: 'Pendidikan Berkualitas',
    description: 'Memastikan akses pendidikan yang berkualitas dan merata untuk semua peserta didik Indonesia.',
    icon: Book
  },
  {
    title: 'Pengembangan Kompetensi',
    description: 'Fokus pada pengembangan kompetensi dasar, berpikir kritis, dan keterampilan abad 21.',
    icon: GraduationCap
  },
  {
    title: 'Peningkatan Skor PISA',
    description: 'Berupaya meningkatkan literasi membaca, matematika, dan sains siswa Indonesia.',
    icon: LineChart
  },
  {
    title: 'Kolaborasi Multipihak',
    description: 'Melibatkan berbagai pemangku kepentingan dalam ekosistem pendidikan Indonesia.',
    icon: Users
  }
];

export default AboutSection;
