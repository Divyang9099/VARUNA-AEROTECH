import { v2 as cloudinary } from 'cloudinary';
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

const filePath = path.join(__dirname, '../public/what-we-do.jpeg');

async function upload() {
    try {
        console.log(`Uploading ${filePath}...`);
        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'varuna-aerotech',
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            resource_type: 'auto'
        });
        console.log(`URL: ${result.secure_url}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

upload();
