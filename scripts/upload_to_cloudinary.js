const cloudinary = require('cloudinary').v2;
const path = require('path');

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'ddsjqtxik',
    api_key: '947584432758439',
    api_secret: 'YOUR_API_SECRET_HERE' // You'll need to provide this
});

// Upload the enhanced background image
const imagePath = path.join(__dirname, '..', 'src', 'assets', 'enhanced_bg.png');

cloudinary.uploader.upload(imagePath, {
    folder: 'varuna-aerotech',
    public_id: 'about_us_bg',
    overwrite: true,
    resource_type: 'image'
}, (error, result) => {
    if (error) {
        console.error('Upload failed:', error);
    } else {
        console.log('Upload successful!');
        console.log('Image URL:', result.secure_url);
        console.log('\nUpdate AboutUs.jsx with this URL:');
        console.log(`const bgImageUrl = "${result.secure_url}";`);
    }
});
