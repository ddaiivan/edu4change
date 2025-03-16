
import React from 'react';
import { BookOpen, Briefcase, Building, CheckCircle2, FileCog, GraduationCap, LineChart, RotateCw, School, UserCog } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const StrategiesSection: React.FC = () => {
  return (
    <section id="strategi" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Strategi</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            Strategi komprehensif untuk meningkatkan kualitas pendidikan Indonesia dan 
            mendorong peningkatan skor PISA dalam jangka panjang.
          </p>
        </div>
        
        <Tabs defaultValue="edu4change" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="edu4change">Strategi Edu4Change</TabsTrigger>
            <TabsTrigger value="worldbank">Rekomendasi World Bank</TabsTrigger>
          </TabsList>
          
          <TabsContent value="edu4change" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategies.map((strategy, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="h-2 bg-edu-primary"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="rounded-full bg-edu-light p-2 mr-3">
                          <strategy.icon className="h-5 w-5 text-edu-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{strategy.title}</h3>
                      </div>
                      <p className="text-gray-600">{strategy.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="worldbank">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Building className="h-6 w-6 text-edu-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Rekomendasi World Bank</h3>
                </div>
                <p className="text-gray-600 italic mb-6">
                  Berdasarkan artikel "To improve PISA performance, go back to basics"
                </p>
                
                <ul className="space-y-4">
                  {worldBankRecommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-edu-secondary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-700">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 bg-edu-primary bg-opacity-5 p-8 rounded-lg border border-edu-primary border-opacity-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mr-6 mb-4 md:mb-0">
              <RotateCw className="h-16 w-16 text-edu-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-edu-dark">Pendekatan Berkelanjutan</h3>
              <p className="text-gray-600">
                Edu4Change percaya bahwa peningkatan kualitas pendidikan memerlukan pendekatan 
                berkelanjutan dan komitmen jangka panjang dari seluruh pemangku kepentingan. 
                Perubahan yang signifikan dalam hasil pendidikan membutuhkan waktu, konsistensi, 
                dan evaluasi berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const strategies = [
  {
    title: 'Kurikulum Merdeka: Fokus pada Peningkatan PISA',
    description: 'Menerapkan Kurikulum Merdeka secara efektif di seluruh sekolah, dengan fokus pada peningkatan skor PISA melalui pembelajaran berbasis kompetensi dan pengembangan karakter.',
    icon: BookOpen
  },
  {
    title: 'Peningkatan Kompetensi Guru',
    description: 'Peningkatan kompetensi guru melalui Platform Merdeka Mengajar (PMM) dan pelatihan berkelanjutan yang selaras dengan praktik terbaik internasional.',
    icon: GraduationCap
  },
  {
    title: 'Asesmen dan Perbaikan Berkelanjutan',
    description: 'Pemanfaatan hasil Asesmen Nasional (AN) dan Rapor Pendidikan untuk perbaikan berkelanjutan pada praktik pembelajaran di kelas.',
    icon: FileCog
  },
  {
    title: 'Literasi Digital',
    description: 'Peningkatan literasi digital siswa dan guru untuk mendukung pembelajaran di era digital dan mempersiapkan siswa menghadapi masa depan.',
    icon: LineChart
  },
  {
    title: 'Dukungan untuk Guru',
    description: 'Mendukung dan memotivasi guru melalui intervensi yang tepat, seperti struktur karir berbasis merit, pengembangan profesional, dan kriteria seleksi yang ketat untuk calon guru.',
    icon: UserCog
  },
  {
    title: 'Belajar dari Vietnam',
    description: 'Mengadopsi praktik terbaik dari sistem pendidikan Vietnam, seperti pemerataan fasilitas, peningkatan kualitas guru, dan dukungan kuat dari pemerintah dan masyarakat.',
    icon: School
  }
];

const worldBankRecommendations = [
  'Fokus pada keterampilan dasar (literasi dan numerasi), terutama di kelas awal.',
  'Integrasikan literasi dan numerasi ke dalam semua mata pelajaran (kurikulum berbasis kompetensi).',
  'Selaraskan materi pembelajaran dan pelatihan guru dengan kurikulum baru.',
  'Terapkan komitmen jangka panjang, bukan inisiatif jangka pendek.',
  'Atasi kesenjangan dalam pendidikan antar wilayah dan kelompok sosial ekonomi.'
];

export default StrategiesSection;
