import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========================================
// CLOUDINARY CONFIGURATION
// ========================================
cloudinary.config({
    cloud_name: 'ddsjqtxik',
    api_key: '259773431821748',
    api_secret: '7oTJzV2J4zMPxiHAWOnvhCjbGAc'
});

// ========================================
// CONFIGURATION
// ========================================
const CONFIG = {
    publicDir: path.join(__dirname, 'public'),
    cloudinaryFolder: 'varuna-aerotech',
    deleteLocalFiles: true, // NOW DELETING LOCAL FILES
    imageExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'],
    excludeFiles: ['favicon.png', 'logo.png'] // Files to keep locally
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Get all image files from public directory
 */
function getAllImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllImages(filePath, fileList);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (CONFIG.imageExtensions.includes(ext)) {
                fileList.push(filePath);
            }
        }
    });

    return fileList;
}

/**
 * Upload single image to Cloudinary
 */
async function uploadImage(filePath) {
    const fileName = path.basename(filePath);

    // Skip excluded files
    if (CONFIG.excludeFiles.includes(fileName)) {
        console.log(`⏭️  Skipping: ${fileName} (excluded)`);
        return null;
    }

    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: CONFIG.cloudinaryFolder,
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            resource_type: 'auto'
        });

        console.log(`✅ Uploaded: ${fileName} -> ${result.secure_url}`);

        return {
            localPath: filePath,
            fileName: fileName,
            cloudinaryUrl: result.secure_url,
            publicId: result.public_id,
            width: result.width,
            height: result.height,
            format: result.format,
            size: result.bytes
        };
    } catch (error) {
        console.error(`❌ Failed to upload ${fileName}:`, error.message);
        return null;
    }
}

/**
 * Delete local file after successful upload
 */
function deleteLocalFile(filePath) {
    try {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Deleted local file: ${path.basename(filePath)}`);
        return true;
    } catch (error) {
        console.error(`❌ Failed to delete ${filePath}:`, error.message);
        return false;
    }
}

/**
 * Create URL mapping file
 */
function createMappingFile(uploadResults) {
    const mapping = {};

    uploadResults.forEach(result => {
        if (result) {
            // Create mapping: /filename.jpg -> cloudinary URL
            mapping[`/${result.fileName}`] = result.cloudinaryUrl;
        }
    });

    const mappingPath = path.join(__dirname, 'cloudinary-url-mapping.json');
    fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));

    console.log(`\n📄 URL mapping saved to: cloudinary-url-mapping.json`);
    return mapping;
}

/**
 * Generate replacement instructions
 */
function generateReplacementInstructions(mapping) {
    console.log('\n' + '='.repeat(60));
    console.log('📝 NEXT STEPS: Update Your Code');
    console.log('='.repeat(60));
    console.log('\nReplace local image paths with Cloudinary URLs:\n');

    Object.entries(mapping).forEach(([localPath, cloudinaryUrl]) => {
        console.log(`OLD: ${localPath}`);
        console.log(`NEW: ${cloudinaryUrl}`);
        console.log('---');
    });

    console.log('\n💡 TIP: Use Find & Replace in your code editor');
    console.log('   Search for: /hero_');
    console.log('   And replace with Cloudinary URLs from the mapping above\n');
}

/**
 * Create a helper utility file for React
 */
function createCloudinaryHelper(mapping) {
    const helperContent = `// Auto-generated Cloudinary URL mappings
// Generated on: ${new Date().toISOString()}

export const CLOUDINARY_IMAGES = ${JSON.stringify(mapping, null, 2)};

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

    let transformations = \`q_\${quality},f_\${format}\`;
    if (width) transformations += \`,w_\${width}\`;
    if (height) transformations += \`,h_\${height}\`;

    return \`\${parts[0]}/upload/\${transformations}/\${parts[1]}\`;
};
`;

    const helperPath = path.join(__dirname, 'src', 'utils', 'cloudinaryImages.js');

    // Create utils directory if it doesn't exist
    const utilsDir = path.join(__dirname, 'src', 'utils');
    if (!fs.existsSync(utilsDir)) {
        fs.mkdirSync(utilsDir, { recursive: true });
    }

    fs.writeFileSync(helperPath, helperContent);
    console.log(`\n✅ Created helper file: src/utils/cloudinaryImages.js`);
}

// ========================================
// MAIN MIGRATION FUNCTION
// ========================================
async function migrateToCloudinary() {
    console.log('🚀 Starting Cloudinary Migration...\n');
    console.log(`📁 Scanning directory: ${CONFIG.publicDir}`);
    console.log(`☁️  Cloudinary folder: ${CONFIG.cloudinaryFolder}`);
    console.log(`🗑️  Delete local files: ${CONFIG.deleteLocalFiles ? 'YES' : 'NO'}\n`);

    // Get all images
    const images = getAllImages(CONFIG.publicDir);
    console.log(`📸 Found ${images.length} images to process\n`);

    if (images.length === 0) {
        console.log('❌ No images found to upload!');
        return;
    }

    // Upload all images
    const uploadResults = [];
    for (const imagePath of images) {
        const result = await uploadImage(imagePath);
        if (result) {
            uploadResults.push(result);

            // Delete local file if configured
            if (CONFIG.deleteLocalFiles) {
                deleteLocalFile(imagePath);
            }
        }

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Create mapping file
    const mapping = createMappingFile(uploadResults);

    // Create helper utility for React
    createCloudinaryHelper(mapping);

    // Generate replacement instructions
    generateReplacementInstructions(mapping);

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('✅ MIGRATION COMPLETE!');
    console.log('='.repeat(60));
    console.log(`\n📊 Summary:`);
    console.log(`   - Total images found: ${images.length}`);
    console.log(`   - Successfully uploaded: ${uploadResults.length}`);
    console.log(`   - Failed uploads: ${images.length - uploadResults.length}`);
    if (CONFIG.deleteLocalFiles) {
        console.log(`   - Local files deleted: ${uploadResults.length}`);
    }
    console.log(`\n📦 Files created:`);
    console.log(`   - cloudinary-url-mapping.json`);
    console.log(`   - src/utils/cloudinaryImages.js`);
    console.log(`\n🎯 Next: Update your React components to use Cloudinary URLs`);
    console.log(`   Import: import { getCloudinaryUrl } from './utils/cloudinaryImages'`);
    console.log(`   Usage: <img src={getCloudinaryUrl('/hero_image.jpg')} />\n`);
}

// ========================================
// RUN MIGRATION
// ========================================
migrateToCloudinary().catch(console.error);
