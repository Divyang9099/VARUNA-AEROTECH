import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⚠️ PLEASE ENTER YOUR REAL CLOUDINARY CREDENTIALS HERE
cloudinary.config({
    cloud_name: 'dhowmzdkh',
    api_key: 'YOUR_API_KEY', // Removed for your security!
    api_secret: 'YOUR_API_SECRET' // Removed for your security!
});

const uploadVideos = async () => {
    const videos = ['solar.mp4', 'windmill.mp4', 'powerline.mp4', 'industrial.mp4', 'topology.mp4'];
    const publicDir = path.join(__dirname, 'public');
    const mapping = {};

    console.log('🚀 Starting video uploads to Cloudinary...\n');

    for (const video of videos) {
        const filePath = path.join(publicDir, video);
        try {
            if (!fs.existsSync(filePath)) {
                console.warn(`⚠️ Skipped: Cannot find ${video} in public/`);
                continue;
            }

            console.log(`⏳ Uploading ${video} (This might take a minute)...`);
            const result = await cloudinary.uploader.upload(filePath, {
                folder: 'varuna-aerotech/videos',
                resource_type: 'video', // Explicitly telling Cloudinary it's a video file!
                use_filename: true,
                unique_filename: false,
                overwrite: true
            });
            console.log(`✅ Success: ${result.secure_url}\n`);
            mapping[video] = result.secure_url;
        } catch (error) {
            console.error(`❌ Failed to upload ${video}:`, error.message);
        }
    }

    fs.writeFileSync(path.join(__dirname, 'video-urls.json'), JSON.stringify(mapping, null, 2));
    console.log('🎉 Done! Look at video-urls.json for your new CDNs.');
};

uploadVideos().catch(console.error);
