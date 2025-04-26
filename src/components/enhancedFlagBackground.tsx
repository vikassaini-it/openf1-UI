import React, { useMemo } from "react";
import { getLocationProperty } from "@/lib/constants/locations";

interface EnhancedFlagBackgroundProps {
  country_key: number;
  children: React.ReactNode;
  opacity?: number;
  rotation?: number;
  scale?: number;
  blur?: number;
  className?: string;
  classNameChildrens?: string;
  overlayColor?: string;
}

export function EnhancedFlagBackground({
  country_key,
  children,
  opacity = 0.15,
  rotation = -45,
  scale = 1.7,
  blur = 0,
  overlayColor,
  className = "",
  classNameChildrens = "",
}: Readonly<EnhancedFlagBackgroundProps>) {
  // Use useMemo to cache the result of getLocationProperty
  const flagSrc = useMemo(() => {
    return getLocationProperty("country_key", country_key, "country_flag");
  }, [country_key]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Content container */}
      <div className={`${classNameChildrens}`}>{children}</div>

      {/* Background flag with customizable effects and positioned in bottom right */}
      <div
        className="absolute"
        style={{
          bottom: "-10%", // Position slightly below to ensure coverage
          right: "-10%", // Position slightly to the right to ensure coverage
          width: "100%", // Adjust size as needed
          height: "100%", // Adjust size as needed
          backgroundImage: `url(${flagSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `rotate(${rotation}deg) scale(${scale})`,
          opacity: opacity,
          filter: blur > 0 ? `blur(${blur}px)` : "none",
          zIndex: 0,
          maskImage:
            "radial-gradient(circle at bottom center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at bottom center, black 30%, transparent 70%)",
        }}
      />

      {/* Optional color overlay */}
      {overlayColor && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: overlayColor,
            mixBlendMode: "multiply",
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
}
