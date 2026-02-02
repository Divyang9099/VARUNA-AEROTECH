# 🚀 Cloudinary Integration for React - Complete Guide

## ✅ What's Been Set Up

Your React application now has **full Cloudinary integration** for client-side image uploads! Here's what you have:

### 📁 Files Created

1. **`src/utils/cloudinary.js`** - Core Cloudinary utilities
2. **`src/hooks/useCloudinaryUpload.js`** - React hook for uploads
3. **`src/components/CloudinaryUploader.jsx`** - Premium upload component
4. **`src/pages/ImageUpload.jsx`** - Demo page with full functionality

### 🎯 Features

- ✨ **Drag & Drop** - Intuitive file upload
- 📊 **Progress Tracking** - Real-time upload progress
- 🖼️ **Image Previews** - See uploads before completion
- ✅ **Validation** - File type and size checking
- 🎨 **Premium UI** - Beautiful animations with Framer Motion
- 📋 **Copy URLs** - Easy clipboard integration
- 🔄 **Multiple Uploads** - Batch upload support

---

## 🔧 Setup Instructions

### Step 1: Create Unsigned Upload Preset

For **client-side uploads** to work, you need to create an **unsigned upload preset** in Cloudinary:

1. **Go to Cloudinary Console:**
   - Visit: https://console.cloudinary.com/
   - Login with your account

2. **Navigate to Upload Settings:**
   - Click on **Settings** (gear icon) in the top right
   - Select **Upload** from the left sidebar
   - Scroll to **Upload presets**

3. **Create New Preset:**
   - Click **"Add upload preset"**
   - Set the following:
     - **Upload preset name:** `varuna-unsigned`
     - **Signing Mode:** Select **"Unsigned"** ⚠️ (This is critical!)
     - **Folder:** `varuna-aerotech` (optional but recommended)
     - **Use filename:** Toggle ON
     - **Unique filename:** Toggle ON (prevents overwrites)

4. **Save:**
   - Click **"Save"** at the top

### Step 2: Update Configuration (If Needed)

The configuration is already set in `src/utils/cloudinary.js`:

```javascript
export const CLOUDINARY_CONFIG = {
    cloudName: 'ddsjqtxik',
    uploadPreset: 'varuna-unsigned', // ⚠️ Must match your preset name
    folder: 'varuna-aerotech',
    apiKey: '259773431821748'
};
```

If you named your preset differently, update the `uploadPreset` value.

---

## 🎮 How to Use

### Option 1: Visit the Demo Page

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to:**
   ```
   http://localhost:5173/upload
   ```

3. **Upload images:**
   - Drag & drop images
   - Or click to browse
   - See real-time progress
   - Copy URLs when done

### Option 2: Use in Your Own Components

```javascript
import CloudinaryUploader from '../components/CloudinaryUploader';

function MyComponent() {
    const handleUploadComplete = (results) => {
        console.log('Uploaded images:', results);
        // results contains: url, publicId, width, height, etc.
    };

    return (
        <CloudinaryUploader
            onUploadComplete={handleUploadComplete}
            multiple={true}
            maxFiles={10}
            folder="my-custom-folder"
        />
    );
}
```

### Option 3: Use the Hook Directly

```javascript
import { useCloudinaryUpload } from '../hooks/useCloudinaryUpload';

function MyCustomUploader() {
    const { uploading, progress, uploadImage, uploadedImages } = useCloudinaryUpload({
        folder: 'my-folder'
    });

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const result = await uploadImage(file);
        
        if (result.success) {
            console.log('Image URL:', result.url);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {uploading && <p>Uploading... {progress}%</p>}
            {uploadedImages.map(img => (
                <img key={img.publicId} src={img.url} alt="Uploaded" />
            ))}
        </div>
    );
}
```

---

## 📊 Upload Response Format

When an image is uploaded successfully, you get:

```javascript
{
    success: true,
    url: "https://res.cloudinary.com/ddsjqtxik/image/upload/v1234567890/varuna-aerotech/image.jpg",
    publicId: "varuna-aerotech/image",
    format: "jpg",
    width: 1920,
    height: 1080,
    size: 245678, // bytes
    thumbnail: "https://..." // if transformations applied
}
```

---

## 🎨 Customization Options

### CloudinaryUploader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onUploadComplete` | Function | - | Callback when upload finishes |
| `multiple` | Boolean | `false` | Allow multiple file uploads |
| `maxFiles` | Number | `5` | Maximum number of files |
| `folder` | String | `'varuna-aerotech'` | Cloudinary folder path |
| `className` | String | `''` | Additional CSS classes |

### useCloudinaryUpload Options

```javascript
const { uploadImage } = useCloudinaryUpload({
    folder: 'custom-folder',
    uploadPreset: 'custom-preset',
    tags: ['product', 'featured'],
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/webp']
});
```

---

## 🔐 Security Notes

### ✅ Safe for Production

- **Unsigned uploads** are safe when properly configured
- Set **folder restrictions** in Cloudinary console
- Enable **upload restrictions** (file types, sizes)
- Use **moderation** if needed

### 🛡️ Recommended Settings

In Cloudinary Console → Upload Preset Settings:

- **Allowed formats:** `jpg, png, webp, gif`
- **Max file size:** `10 MB`
- **Max image dimensions:** `4096 x 4096`
- **Enable moderation:** Optional (for user-generated content)

---

## 🚀 Advanced Features

### Image Transformations

Use the utility function to get optimized URLs:

```javascript
import { getOptimizedImageUrl } from '../utils/cloudinary';

const optimizedUrl = getOptimizedImageUrl('varuna-aerotech/my-image', {
    width: 800,
    height: 600,
    crop: 'fill',
    quality: 'auto',
    format: 'auto'
});
```

### Thumbnails

```javascript
import { getThumbnailUrl } from '../utils/cloudinary';

const thumbnail = getThumbnailUrl('varuna-aerotech/my-image', 200);
```

---

## 🐛 Troubleshooting

### Upload Fails with "Upload preset not found"

**Solution:** Make sure you created the preset named `varuna-unsigned` in Cloudinary console.

### Upload Fails with "Unsigned upload not allowed"

**Solution:** Ensure the preset's **Signing Mode** is set to **"Unsigned"**.

### CORS Errors

**Solution:** Cloudinary allows cross-origin uploads by default. If you see CORS errors, check your browser console for specific issues.

### File Size Too Large

**Solution:** Default max is 10MB. Adjust in `src/utils/cloudinary.js`:

```javascript
export const validateFile = (file, options = {}) => {
    const { maxSize = 20 * 1024 * 1024 } = options; // 20MB
    // ...
};
```

---

## 📝 Next Steps

1. ✅ Create unsigned upload preset in Cloudinary
2. ✅ Test the upload page at `/upload`
3. ✅ Integrate into your existing pages
4. ✅ Customize styling to match your brand
5. ✅ Add to your navigation menu (optional)

---

## 🎯 Example Use Cases

### Product Images
```javascript
<CloudinaryUploader
    folder="varuna-aerotech/products"
    multiple={true}
    onUploadComplete={(results) => {
        // Save URLs to database
        saveProductImages(results.map(r => r.url));
    }}
/>
```

### User Avatars
```javascript
<CloudinaryUploader
    folder="varuna-aerotech/avatars"
    multiple={false}
    onUploadComplete={(result) => {
        updateUserAvatar(result.url);
    }}
/>
```

### Gallery/Portfolio
```javascript
<CloudinaryUploader
    folder="varuna-aerotech/gallery"
    multiple={true}
    maxFiles={20}
    onUploadComplete={(results) => {
        addToGallery(results);
    }}
/>
```

---

## 📞 Support

- **Cloudinary Docs:** https://cloudinary.com/documentation
- **React Integration:** https://cloudinary.com/documentation/react_integration
- **Upload API:** https://cloudinary.com/documentation/upload_images

---

**🎉 You're all set! Happy uploading!**
