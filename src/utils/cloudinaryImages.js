// Auto-generated Cloudinary URL mappings
// Generated on: 2026-02-02T10:53:57.401Z

export const CLOUDINARY_IMAGES = {
  "/hero_industrial_hd.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029616/varuna-aerotech/hero_industrial_hd.jpg",
  "/hero_industrial_new.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029618/varuna-aerotech/hero_industrial_new.jpg",
  "/hero_infrastructure_new.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029619/varuna-aerotech/hero_infrastructure_new.jpg",
  "/hero_solar_drone.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029621/varuna-aerotech/hero_solar_drone.jpg",
  "/hero_solar_latest.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029624/varuna-aerotech/hero_solar_latest.jpg",
  "/hero_solar_new.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029625/varuna-aerotech/hero_solar_new.jpg",
  "/hero_split_1_final.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029627/varuna-aerotech/hero_split_1_final.jpg",
  "/hero_split_1_hd.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029629/varuna-aerotech/hero_split_1_hd.jpg",
  "/hero_split_2.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029630/varuna-aerotech/hero_split_2.jpg",
  "/hero_split_2_final.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029632/varuna-aerotech/hero_split_2_final.jpg",
  "/hero_wind_new.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029634/varuna-aerotech/hero_wind_new.jpg",
  "/thumbnail.jpg": "https://res.cloudinary.com/ddsjqtxik/image/upload/v1770029636/varuna-aerotech/thumbnail.jpg"
};

/**
 * Get Cloudinary URL for a local image path
 * @param {string} localPath - Local image path (e.g., '/hero_image.jpg')
 * @returns {string} - Cloudinary URL
 */
export const getCloudinaryUrl = (localPath) => {
    return CLOUDINARY_IMAGES[localPath] || localPath;
};

/**
 * Get optimized Cloudinary URL with transformations
 * @param {string} localPath - Local image path
 * @param {object} options - Transformation options
 * @returns {string} - Optimized Cloudinary URL
 */
export const getOptimizedUrl = (localPath, options = {}) => {
    const baseUrl = CLOUDINARY_IMAGES[localPath];
    if (!baseUrl) return localPath;

    const { width, height, quality = 'auto', format = 'auto' } = options;
    
    // Extract parts of Cloudinary URL
    const parts = baseUrl.split('/upload/');
    if (parts.length !== 2) return baseUrl;

    let transformations = `q_${quality},f_${format}`;
    if (width) transformations += `,w_${width}`;
    if (height) transformations += `,h_${height}`;

    return `${parts[0]}/upload/${transformations}/${parts[1]}`;
};
