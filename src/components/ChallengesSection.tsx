
import React from 'react';
import { AlertTriangle, BookOpen, BrainCircuit, School } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ChallengesSection: React.FC = () => {
  return (
    <section id="tantangan" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Tantangan Pendidikan di Indonesia</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            Berdasarkan hasil PISA 2022, Indonesia menghadapi tantangan dalam meningkatkan literasi 
            membaca, matematika, dan sains siswa. Meskipun ada peningkatan peringkat, skor PISA 
            Indonesia masih di bawah rata-rata OECD.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-2 bg-edu-primary"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-edu-light p-2 mr-3">
                    <challenge.icon className="h-5 w-5 text-edu-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{challenge.title}</h3>
                </div>
                <p className="text-gray-600">{challenge.description}</p>
                
                {challenge.data && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-500">Skor Indonesia</span>
                      <span className="text-sm font-semibold">{challenge.data.indonesia}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div className="bg-edu-primary h-2 rounded-full" style={{ width: `${(challenge.data.indonesia / challenge.data.oecd) * 100}%` }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">Rata-rata OECD</span>
                      <span className="text-sm font-semibold">{challenge.data.oecd}</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start space-x-4">
            <div className="rounded-full bg-amber-100 p-2 mt-1">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Growth Mindset Siswa</h3>
              <p className="text-gray-600">
                Selain itu, perlu diperhatikan juga faktor growth mindset (pola pikir bertumbuh) siswa, 
                yaitu keyakinan bahwa kecerdasan dapat dikembangkan. Data PISA menunjukkan bahwa siswa 
                dengan growth mindset cenderung memiliki skor PISA yang lebih tinggi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const challenges = [
  {
    title: 'Literasi Membaca',
    description: 'Kemampuan siswa dalam memahami, menggunakan, mengevaluasi, merefleksi, dan terlibat dengan teks masih perlu ditingkatkan.',
    icon: BookOpen,
    data: {
      indonesia: 373,
      oecd: 476
    }
  },
  {
    title: 'Literasi Matematika',
    description: 'Kemampuan merumuskan, menggunakan, dan menginterpretasikan matematika dalam berbagai konteks perlu diperkuat.',
    icon: BrainCircuit,
    data: {
      indonesia: 366,
      oecd: 472
    }
  },
  {
    title: 'Literasi Sains',
    description: 'Kemampuan menggunakan pengetahuan ilmiah, mengidentifikasi pertanyaan, dan menarik kesimpulan berdasarkan bukti perlu ditingkatkan.',
    icon: School,
    data: {
      indonesia: 382,
      oecd: 485
    }
  }
];

export default ChallengesSection;
