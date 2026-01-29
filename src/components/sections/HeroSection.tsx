// src/components/sections/HeroSection.tsx
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText = "Démarrer mon projet",
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  overlay = false
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          )}
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800" />
      )}
      
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        {subtitle && (
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white">
              {subtitle}
            </span>
          </div>
        )}
        
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl animate-fade-up">
          {title}
        </h1>
        
        {description && (
          <p className="max-w-3xl mx-auto mb-10 text-xl text-gray-200 md:text-2xl">
            {description}
          </p>
        )}
        
        <div className="flex flex-col gap-4 justify-center sm:flex-row">
          {ctaLink && (
            <Button
              href={ctaLink}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              className="animate-fade-up animation-delay-200 bg-white text-primary-900 hover:bg-gray-100"
            >
              {ctaText}
            </Button>
          )}
          
          {secondaryCtaText && secondaryCtaLink && (
            <Button
              href={secondaryCtaLink}
              variant="outline"
              size="lg"
              className="animate-fade-up animation-delay-300 border-white text-white hover:bg-white/10"
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 mt-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;