
import React from 'react';

interface FeatureSectionHeaderProps {
  title: string;
  description: string;
  highlightedWord: string;
}

const FeatureSectionHeader = ({ title, description, highlightedWord }: FeatureSectionHeaderProps) => {
  // Replace the highlighted word with the span version
  const titleParts = title.split(highlightedWord);

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {titleParts[0]}
        <span className="text-gradient">{highlightedWord}</span>
        {titleParts[1]}
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default FeatureSectionHeader;
