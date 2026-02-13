import React, { useState } from 'react';

/**
 * Optimized Image Component with Cloudinary support
 * Features:
 * - Lazy loading
 * - Cloudinary auto-optimization (format, quality, width)
 * - Error handling with fallback
 * - Loading placeholder
 */
const OptimizedImage = ({
    src,
    alt,
    className = '',
    width = 800,
    quality = 'auto',
    style = {}
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Optimize Cloudinary URLs
    const getOptimizedSrc = (url) => {
        if (!url) return '';

        // Check if it's a Cloudinary URL
        if (url.includes('cloudinary.com') && url.includes('/upload/')) {
            // Add optimization parameters
            return url.replace(
                '/upload/',
                `/upload/f_${quality},q_auto,w_${width}/`
            );
        }

        return url;
    };

    const optimizedSrc = getOptimizedSrc(src);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = (e) => {
        setHasError(true);
        setIsLoading(false);

        // Try fallback to original URL
        if (optimizedSrc !== src && src) {
            e.target.src = src;
        }
    };

    return (
        <div className="relative" style={style}>
            {isLoading && (
                <div
                    className="absolute inset-0 bg-slate-800 animate-pulse rounded-2xl"
                    style={{ minHeight: '300px' }}
                />
            )}
            <img
                src={optimizedSrc || src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
                className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                style={{
                    ...style,
                    backgroundColor: '#1e293b',
                    minHeight: '300px'
                }}
            />
            {hasError && !isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-800 rounded-2xl">
                    <p className="text-slate-400">Image unavailable</p>
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
