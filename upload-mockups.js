import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cloudinary Configuration
cloudinary.config({
    cloud_name: 'xyz',
    api_key: 'your api',
    api_secret: 'your secreate'
});

const mockupImages = [
    'dashboard_mockup.png',
    'infrastructure_audit_mockup.png',
    'mapping_3d_mockup.png',
    'pipeline_inspection_mockup.png',
    'power_line_mockup.png',
    'project_progress_mockup.png',
    'solar_inspection_mockup.png',
    'thermal_analysis_mockup.png',
    'transmission_tower_mockup.png',
    'visual_inspection_mockup.png'
];

const uploadedUrls = {};

async function uploadMockups() {
    console.log('🚀 Starting mockup upload to Cloudinary...\n');

    for (const image of mockupImages) {
        const imagePath = path.join(__dirname, 'public', image);

        if (!fs.existsSync(imagePath)) {
            console.log(`⚠️  Skipping ${image} - file not found`);
            continue;
        }

        try {
            console.log(`📤 Uploading ${image}...`);

            const result = await cloudinary.uploader.upload(imagePath, {
                folder: 'varuna-aerotech/mockups',
                public_id: image.replace('.png', ''),
                overwrite: true,
                resource_type: 'image'
            });

            uploadedUrls[image] = result.secure_url;
            console.log(`✅ Uploaded: ${result.secure_url}\n`);

            // Delete local file after successful upload
            fs.unlinkSync(imagePath);
            console.log(`🗑️  Deleted local file: ${image}\n`);

        } catch (error) {
            console.error(`❌ Error uploading ${image}:`, error.message);
        }

        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Save the URLs to a JSON file
    fs.writeFileSync(
        path.join(__dirname, 'mockup-cloudinary-urls.json'),
        JSON.stringify(uploadedUrls, null, 2)
    );

    console.log('\n✨ All uploads complete!');
    console.log('📝 URLs saved to mockup-cloudinary-urls.json\n');
    console.log('📋 Uploaded URLs:');
    console.log(JSON.stringify(uploadedUrls, null, 2));

    return uploadedUrls;
}

uploadMockups().catch(console.error);
