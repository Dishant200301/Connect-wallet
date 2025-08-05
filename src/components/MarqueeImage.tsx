// src/components/MarqueeImage.tsx
import React, { useState } from 'react';

interface MarqueeImageProps {
  src: string;
  alt: string;
  itemWidthClasses: string; // Tailwind classes for width
  itemHeightClasses: string; // Tailwind classes for height
}

const MarqueeImage: React.FC<MarqueeImageProps> = ({ src, alt, itemWidthClasses, itemHeightClasses }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  // If an error occurred, display a fallback
  if (hasError) {
    return (
      <div
        className={`${itemWidthClasses} ${itemHeightClasses} flex items-center justify-center bg-gray-700 text-gray-400 text-sm rounded-md border border-gray-600`}
        aria-label={`Error loading ${alt}`}
      >
        <span className="text-center truncate p-1">
          {alt ? alt.split(' ')[0] : 'Logo'} Err
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`block w-full h-full object-contain`} // Image itself fills its container
      decoding="async" // Good for non-critical images that don't block render
      loading="lazy"   // Key for CDN image optimization: defer loading until near viewport
      onError={handleError} // Handle loading errors
    />
  );
};

export default MarqueeImage;