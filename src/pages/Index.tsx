
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ChallengesSection from '@/components/ChallengesSection';
import GoalsSection from '@/components/GoalsSection';
import StrategiesSection from '@/components/StrategiesSection';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <ChallengesSection />
      <GoalsSection />
      <StrategiesSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
