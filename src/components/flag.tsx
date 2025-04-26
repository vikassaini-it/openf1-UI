import React, { useMemo } from 'react';
import Image from 'next/image';
import { getLocationProperty } from '@/lib/constants/locations';

interface FlagProps {
  country_key: number;
  border?: boolean;
  size?: number;
  priority?: boolean;
  className?: string;
}

export function Flag({ 
  country_key, 
  border = false, 
  size = 30,
  priority = true,  // Default to true when used in buttons
  className = ""
}: Readonly<FlagProps>) {
  // Use useMemo to cache the result of getLocationProperty
  const flagSrc = useMemo(() => {
    return getLocationProperty("country_key", country_key, "country_flag");
  }, [country_key]); // Only recalculate when country_key changes
  
  return (
    <div className={`inline-flex items-center justify-center ${border ? "border border-solid rounded border-indigo-600" : ""} ${className}`}>
      <Image
        src={flagSrc}
        width={size}
        height={size}
        alt={`Flag ${country_key}`}
        priority={priority}   // Set priority to true by default
        loading={priority ? "eager" : "lazy"}  // Load eagerly if priority is true
        style={{ display: 'inline-block', minWidth: `${size}px` }}  // Force display as inline-block
        className="max-w-full h-auto"
      />
    </div>
  );
}

// Example of usage in a button:
// <button className="...">
//   <Flag country_key={36} size={20} priority={true} />
//   <span className="ml-2">Country Name</span>
// </button>