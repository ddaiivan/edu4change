
import React from 'react';
import { BarChart3, LineChart, Target, TrendingUp } from 'lucide-react';

const GoalsSection: React.FC = () => {
  return (
    <section id="tujuan" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Tujuan</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="section-subtitle">Tujuan Pendidikan</h3>
            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1 rounded-full bg-edu-light p-1">
                    <goal.icon className="h-5 w-5 text-edu-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{goal.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="section-subtitle">Prinsip-Prinsip Utama</h3>
              <ul className="space-y-4">
                {principles.map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1 bg-edu-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{principle}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -right-6 bg-edu-light w-full h-full rounded-lg z-0"></div>
            <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-edu-dark mb-6 flex items-center">
                <Target className="h-6 w-6 mr-2 text-edu-primary" />
                Target 2030
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {targets.map((target, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-edu-primary">{target.value}</div>
                    <div className="text-sm text-gray-600">{target.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">Progres Menuju Target</span>
                  <span className="text-sm font-bold text-edu-primary">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-edu-primary h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const goals = [
  {
    text: 'Meningkatkan skor PISA Indonesia secara signifikan dalam jangka panjang.',
    icon: TrendingUp
  },
  {
    text: 'Meningkatkan kualitas pembelajaran di semua jenjang pendidikan.',
    icon: LineChart
  },
  {
    text: 'Mengurangi kesenjangan pendidikan antar wilayah dan kelompok sosial ekonomi.',
    icon: BarChart3
  }
];

const principles = [
  'Fokus pada penerapan pengetahuan, bukan hanya hafalan.',
  'Mengembangkan kecerdasan emosional, kemampuan berpikir kritis dan kreatif, disiplin diri, rasa ingin tahu, rasa memiliki, dan tujuan.',
  'Meningkatkan kualitas dan kompetensi guru.'
];

const targets = [
  { value: '450+', label: 'Skor Membaca' },
  { value: '450+', label: 'Skor Matematika' },
  { value: '460+', label: 'Skor Sains' }
];

export default GoalsSection;
