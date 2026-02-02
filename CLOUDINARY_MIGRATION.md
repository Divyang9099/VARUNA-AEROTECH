# 🚀 Cloudinary Migration Guide

## 📋 Overview

This script will automatically:
1. ✅ Upload all images from `/public` to Cloudinary
2. ✅ Delete local images after successful upload (optional)
3. ✅ Generate URL mapping file
4. ✅ Create React helper utilities
5. ✅ Provide instructions for code updates

---

## ⚙️ Configuration

Edit `migrate-to-cloudinary.js` if needed:

```javascript
const CONFIG = {
    publicDir: path.join(__dirname, 'public'),
    cloudinaryFolder: 'varuna-aerotech',
    deleteLocalFiles: true,  // ⚠️ Set to false for dry run
    imageExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'],
    excludeFiles: ['favicon.png', 'logo.png'] // Keep these locally
};
```

### ⚠️ Important Settings:

- **`deleteLocalFiles: true`** - Will DELETE local images after upload
- **`deleteLocalFiles: false`** - Keeps local images (safe test mode)
- **`excludeFiles`** - Files to keep locally (favicon, logo, etc.)

---

## 🎯 Step-by-Step Migration

### Step 1: Test Run (Recommended)

First, do a **dry run** without deleting files:

1. Open `migrate-to-cloudinary.js`
2. Set `deleteLocalFiles: false`
3. Run the migration:

```bash
npm run migrate:cloudinary
```

This will:
- Upload all images to Cloudinary
- Keep local files intact
- Show you what will happen

### Step 2: Review Results

Check the generated files:

- **`cloudinary-url-mapping.json`** - URL mappings
- **`src/utils/cloudinaryImages.js`** - React helper utilities

### Step 3: Production Migration

Once you're happy with the test:

1. Open `migrate-to-cloudinary.js`
2. Set `deleteLocalFiles: true`
3. Run again:

```bash
npm run migrate:cloudinary
```

⚠️ **This will DELETE local images!** Make sure you have backups.

---

## 📝 Update Your React Code

### Option 1: Use Helper Function (Recommended)

```javascript
// Import the helper
import { getCloudinaryUrl } from './utils/cloudinaryImages';

// In your component
function Hero() {
    return (
        <img 
            src={getCloudinaryUrl('/hero_industrial_hd.jpg')} 
            alt="Hero" 
        />
    );
}
```

### Option 2: Use Optimized URLs

```javascript
import { getOptimizedUrl } from './utils/cloudinaryImages';

function Hero() {
    return (
        <img 
            src={getOptimizedUrl('/hero_industrial_hd.jpg', {
                width: 1920,
                quality: 'auto',
                format: 'webp'
            })} 
            alt="Hero" 
        />
    );
}
```

### Option 3: Direct Replacement

Use Find & Replace in your code editor:

**Find:** `/hero_industrial_hd.jpg`
**Replace:** `https://res.cloudinary.com/ddsjqtxik/image/upload/v1234567890/varuna-aerotech/hero_industrial_hd.jpg`

(Get exact URLs from `cloudinary-url-mapping.json`)

---

## 🔍 What Gets Uploaded?

The script will upload:
- ✅ All `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg` files
- ✅ From `/public` directory and subdirectories
- ❌ Excludes: `favicon.png`, `logo.png` (configurable)

---

## 📊 Expected Output

```
🚀 Starting Cloudinary Migration...

📁 Scanning directory: C:\Users\Divine\Desktop\VARUNA AEROTECH\public
☁️  Cloudinary folder: varuna-aerotech
🗑️  Delete local files: YES

📸 Found 12 images to process

✅ Uploaded: hero_industrial_hd.jpg -> https://res.cloudinary.com/...
🗑️  Deleted local file: hero_industrial_hd.jpg
✅ Uploaded: hero_solar_new.jpg -> https://res.cloudinary.com/...
🗑️  Deleted local file: hero_solar_new.jpg
...

📄 URL mapping saved to: cloudinary-url-mapping.json
✅ Created helper file: src/utils/cloudinaryImages.js

✅ MIGRATION COMPLETE!

📊 Summary:
   - Total images found: 12
   - Successfully uploaded: 12
   - Failed uploads: 0
   - Local files deleted: 12
```

---

## 🛡️ Safety Features

1. **Excluded Files** - Keep important files locally
2. **Dry Run Mode** - Test without deleting
3. **Error Handling** - Failed uploads won't delete files
4. **Backup Reminder** - Always backup before migration

---

## 🔄 Rollback Plan

If something goes wrong:

1. **Restore from Git:**
   ```bash
   git checkout public/
   ```

2. **Or restore from backup:**
   - Copy your backup files back to `/public`

3. **Images are still on Cloudinary:**
   - Even if local files are deleted, Cloudinary has them
   - Download from Cloudinary console if needed

---

## 📦 Files Created

After migration, you'll have:

### 1. `cloudinary-url-mapping.json`
```json
{
  "/hero_industrial_hd.jpg": "https://res.cloudinary.com/.../hero_industrial_hd.jpg",
  "/hero_solar_new.jpg": "https://res.cloudinary.com/.../hero_solar_new.jpg"
}
```

### 2. `src/utils/cloudinaryImages.js`
```javascript
export const CLOUDINARY_IMAGES = { /* mappings */ };
export const getCloudinaryUrl = (localPath) => { /* ... */ };
export const getOptimizedUrl = (localPath, options) => { /* ... */ };
```

---

## 🎨 Benefits of Cloudinary

After migration, you get:

- ⚡ **Faster Loading** - Global CDN delivery
- 🖼️ **Auto Optimization** - Automatic format & quality
- 📱 **Responsive Images** - Different sizes on demand
- 🔒 **Secure Storage** - Enterprise-grade security
- 💾 **Reduced Bundle Size** - No images in your build

---

## 🐛 Troubleshooting

### "Failed to upload" errors

**Cause:** Network issues or Cloudinary limits
**Solution:** Run the script again (it will skip already uploaded files)

### "No images found"

**Cause:** Wrong directory or no image files
**Solution:** Check `CONFIG.publicDir` path

### Rate limiting

**Cause:** Too many uploads too fast
**Solution:** Script has 500ms delay between uploads (already handled)

---

## 📞 Next Steps

1. ✅ Run migration with `npm run migrate:cloudinary`
2. ✅ Review generated files
3. ✅ Update React components to use helper functions
4. ✅ Test your application
5. ✅ Deploy to production

---

## 💡 Pro Tips

1. **Always backup** before running with `deleteLocalFiles: true`
2. **Test first** with `deleteLocalFiles: false`
3. **Use helper functions** for easy future updates
4. **Optimize images** with `getOptimizedUrl()` for better performance
5. **Keep favicon/logo** locally for faster initial load

---

**Ready to migrate? Run:**

```bash
npm run migrate:cloudinary
```

🎉 **Good luck!**
