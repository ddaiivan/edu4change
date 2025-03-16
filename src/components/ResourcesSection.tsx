
import React from 'react';
import { ExternalLink, FileText, Globe, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResourcesSection: React.FC = () => {
  return (
    <section id="sumber-daya" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Sumber Daya</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600">
            Akses berbagai sumber daya dan platform untuk mendukung peningkatan kualitas pendidikan di Indonesia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="card-container group">
              <div className="h-2 bg-edu-primary"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-edu-light p-2 mr-3">
                    <resource.icon className="h-5 w-5 text-edu-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-edu-primary group-hover:text-white transition-colors"
                  onClick={() => window.open(resource.link, '_blank')}
                >
                  Kunjungi Platform
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

const resources = [
  {
    title: 'Platform Merdeka Mengajar',
    description: 'Platform untuk guru dengan materi Kurikulum Merdeka dan pelatihan untuk meningkatkan kompetensi dan keterampilan mengajar.',
    icon: Globe,
    link: 'https://gurubelajar.kemdikbud.go.id/'
  },
  {
    title: 'Kurikulum Merdeka',
    description: 'Informasi komprehensif tentang kurikulum baru yang berfokus pada pembelajaran mendalam dan pengembangan kompetensi.',
    icon: FileText,
    link: 'https://kurikulum.kemdikbud.go.id/'
  },
  {
    title: 'Rapor Pendidikan',
    description: 'Platform untuk melihat hasil Asesmen Nasional dan merencanakan perbaikan kualitas pendidikan berdasarkan data.',
    icon: Library,
    link: 'https://hasilun.puspendik.kemdikbud.go.id/'
  }
];

export default ResourcesSection;
