import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeatureCTAProps {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'outline';
}

const FeatureCTA = ({ label, onClick, variant = 'default' }: FeatureCTAProps) => {
  return (
    <div className="mt-16 flex justify-center">
      <Button 
        onClick={onClick}
        className={`w-64 h-14 text-lg ${
          variant === 'default' 
            ? 'bg-[oklch(.696_.17_162.48)] hover:bg-[oklch(59.6%_.145_163.225)] text-white' 
            : 'bg-transparent border-2 border-[oklch(.696_.17_162.48)] text-[oklch(.696_.17_162.48)] hover:bg-[oklch(.696_.17_162.48)]/10'
        } group transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[oklch(.696_.17_162.48)]/20`}
      >
        {label}
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default FeatureCTA;
