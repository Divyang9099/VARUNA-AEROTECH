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

const assetsDir = path.join(__dirname, 'src', 'assets');
const assets = [
    'pipeline_inspection_drone.png',
    'solar_panel_inspection_drone.png',
    'windmill_inspection_drone.png',
    'powerline_inspection_drone.png',
    'infrastructure_monitoring_drone.png',
    'surveillance_drone.png',
    'industrial_utility_drone.png',
    'inventory_management_drone.png',
    'topographic_survey_drone.png'
];

async function uploadAssets() {
    console.log('🚀 Uploading service/industry assets to Cloudinary...\n');

    const results = {};

    for (const asset of assets) {
        const filePath = path.join(assetsDir, asset);

        try {
            const result = await cloudinary.uploader.upload(filePath, {
                folder: 'varuna-aerotech/assets',
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                resource_type: 'auto'
            });

            console.log(`✅ Uploaded: ${asset}`);
            console.log(`   URL: ${result.secure_url}\n`);

            results[asset] = result.secure_url;

        } catch (error) {
            console.error(`❌ Failed: ${asset}`, error.message);
        }

        // Small delay
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Save results
    fs.writeFileSync(
        path.join(__dirname, 'assets-cloudinary-urls.json'),
        JSON.stringify(results, null, 2)
    );

    console.log('\n✅ All assets uploaded!');
    console.log('📄 URLs saved to: assets-cloudinary-urls.json\n');

    // Print siteConfig.js update instructions
    console.log('📝 Update src/siteConfig.js with these URLs:\n');
    Object.entries(results).forEach(([filename, url]) => {
        const varName = filename.replace('.png', '').replace(/_/g, ' ').split(' ').map((w, i) =>
            i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)
        ).join('') + 'Img';
        console.log(`const ${varName} = "${url}";`);
    });
}

uploadAssets().catch(console.error);
