import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cloudinary Configuration
cloudinary.config({
    cloud_name: 'ddsjqtxik',
    api_key: '259773431821748',
    api_secret: '7oTJzV2J4zMPxiHAWOnvhCjbGAc'
});

// Function to upload a single image
async function uploadImage(filePath, folder = 'varuna-aerotech') {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: folder,
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            resource_type: 'auto'
        });

        console.log(`✅ Uploaded: ${path.basename(filePath)} -> ${result.secure_url}`);
        return {
            localPath: filePath,
            cloudinaryUrl: result.secure_url,
            publicId: result.public_id
        };
    } catch (error) {
        console.error(`❌ Failed to upload ${filePath}:`, error.message);
        return null;
    }
}

// Function to get all images from public folder
function getAllImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllImages(filePath, fileList);
        } else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Main upload function
async function uploadAllImages() {
    console.log('🚀 Starting Cloudinary upload...\n');

    const publicDir = path.join(__dirname, 'public');
    const images = getAllImages(publicDir);

    console.log(`📁 Found ${images.length} images to upload\n`);

    const uploadResults = [];

    for (const imagePath of images) {
        const result = await uploadImage(imagePath);
        if (result) {
            uploadResults.push(result);
        }
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Save mapping to JSON file
    const mapping = {};
    uploadResults.forEach(result => {
        const relativePath = path.relative(publicDir, result.localPath).replace(/\\/g, '/');
        mapping[`/${relativePath}`] = result.cloudinaryUrl;
    });

    fs.writeFileSync(
        path.join(__dirname, 'cloudinary-mapping.json'),
        JSON.stringify(mapping, null, 2)
    );

    console.log(`\n✅ Upload complete! ${uploadResults.length} images uploaded`);
    console.log('📄 Mapping saved to cloudinary-mapping.json');

    return mapping;
}

// Run the upload
uploadAllImages().catch(console.error);
