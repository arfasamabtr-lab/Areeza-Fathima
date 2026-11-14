import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  fallbackClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
  fallbackClassName = '',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt || fallbackTitle || 'Campus visual'}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#134e2f] via-[#0f2e59] to-[#00193b] text-white p-6 text-center ${fallbackClassName || className}`}
      >
        <GraduationCap className="w-10 h-10 text-[#fe932c] mb-2 shrink-0" aria-hidden="true" />
        {fallbackTitle && (
          <span className="font-display font-semibold text-sm leading-tight">
            {fallbackTitle}
          </span>
        )}
        {fallbackSubtitle && (
          <span className="text-xs text-white/75 mt-1">{fallbackSubtitle}</span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
