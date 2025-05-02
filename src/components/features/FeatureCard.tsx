
import React, { useRef, useEffect } from 'react';

interface FeaturePointProps {
  title: string;
  description: string;
}

interface FeatureCardProps {
  title: string;
  points: FeaturePointProps[];
  image: React.ReactNode;
  imagePosition?: 'left' | 'right';
}

const FeaturePoint = ({ title, description }: FeaturePointProps) => {
  return (
    <li className="flex items-start">
      <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[oklch(69.6%_.17_162.48)]/20 flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-[oklch(69.6%_.17_162.48)]"></div>
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </li>
  );
};

const FeatureCard = ({ title, points, image, imagePosition = 'right' }: FeatureCardProps) => {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          } else {
            entry.target.classList.remove('animate-fade-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  const Content = () => (
    <div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <FeaturePoint key={index} title={point.title} description={point.description} />
        ))}
      </ul>
    </div>
  );

  const Image = () => (
    <div className="relative">
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[oklch(69.6%_.17_162.48)] to-[oklch(72.3%_.219_149.579)] opacity-30 blur-sm"></div>
      <div className="relative bg-dark-600 border border-[oklch(69.6%_.17_162.48)]/30 rounded-xl p-1 overflow-hidden">
        <div className="bg-dark-500 rounded-lg p-4 h-[340px] overflow-hidden">
          {image}
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={featureRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0 transform translate-y-4 transition-all duration-700"
    >
      {imagePosition === 'right' ? (
        <>
          <Content />
          <Image />
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">
            <Image />
          </div>
          <div className="order-1 lg:order-2">
            <Content />
          </div>
        </>
      )}
    </div>
  );
};

export default FeatureCard;
