# TravelGo - Hotel & Destination Explorer

## 🎥 Video Tanıtım (Video Demo)

Projenin canlı demosunu ve özelliklerini aşağıdaki videodan izleyebilirsiniz:

[**Uygulama Tanıtım Videosu**](https://files.manuscdn.com/user_upload_by_module/session_file/310519663214959292/yfhJksksmUOHkqsE.mp4)

---

A beautiful, responsive travel app that lets you explore hotels and discover amazing destinations worldwide. Built with React, TypeScript, and Vite for blazing-fast performance.

## 🌍 Features

### Find Hotels
- Search hotels in any city worldwide
- View detailed hotel information with ratings and reviews
- Check amenities and pricing
- Browse multiple hotels per destination
- Beautiful hotel cards with star ratings
- "Book Now" functionality

### Explore Destinations
- Discover popular travel destinations
- Filter destinations by budget ($, $$, $$$)
- View destination details including:
  - Temperature and best time to visit
  - Top attractions and landmarks
  - Population and cultural info
  - Budget estimates
- Beautiful destination cards with emojis
- "Explore More" for detailed information

## 🎨 Design Highlights

- **Beautiful Gradient UI**: Blue gradient background with glassmorphism effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Floating icons and smooth transitions
- **Modern Components**: Clean, professional interface
- **Dark Theme**: Easy on the eyes with excellent contrast
- **Tab Navigation**: Easy switching between Hotels and Destinations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite (blazing fast)
- **Styling**: Custom CSS with modern gradients
- **Icons**: Lucide React
- **HTTP Client**: Fetch API
- **State Management**: React Hooks

## 📦 Project Structure

```
TravelGo/
├── src/
│   ├── pages/
│   │   ├── HotelSearch.tsx        # Hotel search page
│   │   └── DestinationExplore.tsx # Destination discovery
│   ├── styles/
│   │   └── pages.css              # Page styling
│   ├── App.tsx                    # Main app component
│   ├── App.css                    # App styling
│   ├── index.css                  # Global styles
│   └── main.tsx                   # Entry point
├── dist/                          # Production build
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript config
├── package.json                   # Dependencies
├── index.html                     # HTML template
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (v22.13.0 available)
- npm 8+ (v10.9.2 available)

### Installation

1. **Extract the project**
   ```bash
   unzip TravelGo-Complete.zip
   cd TravelGo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Local: http://localhost:3003/

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📱 Building APK with Capacitor + Android Studio

This is the recommended method based on proven workflow.

### Prerequisites

- **Java Development Kit (JDK)** 17+ installed
- **Android SDK** installed
- **Android Studio** installed
- **Git** installed

### Step-by-Step APK Build Guide

#### Step 1: Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

#### Step 2: Initialize Capacitor

```bash
npx cap init
```

When prompted:
- **App name**: TravelGo
- **App ID**: com.travelgo.app
- **Directory**: dist

#### Step 3: Build Web Assets

```bash
npm run build
```

#### Step 4: Add Android Platform

```bash
npx cap add android
```

This creates an `android/` folder with the native Android project.

#### Step 5: Open in Android Studio

```bash
# Navigate to android folder
cd android

# Open in Android Studio
# Option 1: From command line
start . # Windows
open . # Mac
xdg-open . # Linux

# Option 2: Manually open Android Studio and select the android/ folder
```

#### Step 6: Connect Your Phone via USB

1. Enable **Developer Mode** on your Android phone
2. Enable **USB Debugging**
3. Connect phone to computer via USB cable
4. Android Studio will detect your device

#### Step 7: Run Gradle Build

In Android Studio:
1. Click **Build** menu
2. Select **Build Bundle(s) / APK(s)**
3. Select **Build APK(s)**
4. Wait for build to complete

Or from command line:
```bash
cd android
./gradlew assembleDebug
```

#### Step 8: Locate Your APK

APK location:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

#### Step 9: Install on Device

Option 1: Android Studio
- Click **Run** → Select your device → Click **Run**

Option 2: Command line
```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

Option 3: Manual
- Copy APK to phone
- Open file manager
- Tap APK to install

## 🎯 Key Features Explained

### Hotel Search
- **Search by City**: Enter any city name to find hotels
- **Hotel Details**: View ratings, reviews, amenities, and pricing
- **Star Ratings**: Visual 5-star rating system
- **Amenities**: See what's included (WiFi, Pool, Spa, etc.)
- **Pricing**: Clear pricing information per night
- **Book Now**: Easy booking button

### Destination Explorer
- **Budget Filtering**: Filter destinations by budget level
- **Destination Info**: Temperature, best time to visit, attractions
- **Popular Destinations**: Pre-loaded with 6 popular cities
- **Attractions**: Top attractions and landmarks listed
- **Population**: City population information
- **Explore Button**: Learn more about each destination

## 🔄 Updating Your App

After making changes to your app:

```bash
# 1. Rebuild web
npm run build

# 2. Sync to Android
npx cap sync android

# 3. Rebuild APK
cd android
./gradlew assembleDebug

# 4. Reinstall
adb uninstall com.travelgo.app
adb install app/build/outputs/apk/debug/app-debug.apk
```

## 📦 Sharing Your APK

Your APK file can be shared via:

1. **Email** - Attach the APK file
2. **Cloud Storage** - Upload to Google Drive, Dropbox, OneDrive
3. **File Transfer** - AirDrop, Bluetooth, USB
4. **Web Server** - Host on website for download
5. **GitHub Releases** - Upload to GitHub releases page

**APK File Location:**
```
TravelGo/android/app/build/outputs/apk/debug/app-debug.apk
```

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📊 Build Specifications

- **Min API Level:** 21 (Android 5.0)
- **Target API Level:** 34 (Android 14)
- **APK Size:** ~30-50 MB
- **Build Time:** 5-10 minutes
- **Java Version:** 17+
- **Gradle Version:** 8.x

## ⚠️ Common Issues & Solutions

### Issue: "Unsupported class file major version 68"
**Solution:** Install Java 17 or higher and set JAVA_HOME environment variable

### Issue: "gradlew not found"
**Solution:** Run `npx cap add android --force` to regenerate Android project

### Issue: "Build failed"
**Solution:** Run `./gradlew clean` then rebuild

### Issue: "Device not detected"
**Solution:** Enable USB Debugging, try different USB port, or restart adb

## 🎓 Learning Resources

This project demonstrates:
- React best practices
- TypeScript usage
- Vite build optimization
- Responsive design
- State management with hooks
- Capacitor for mobile apps
- Tab-based navigation
- API integration patterns

## 📚 Documentation

- `README.md` - This file (full documentation)
- `APK_BUILD_GUIDE.md` - Detailed APK building steps
- `QUICK_START.md` - 5-minute quick start guide

## 🔐 Privacy & Security

- No user authentication required
- No personal data collection
- No analytics or tracking
- All data stored in browser memory
- No external API calls needed (uses mock data)

## 📊 Performance

- **Build Size**: ~410 KB (gzipped: ~121 KB)
- **Load Time**: < 1 second
- **Mobile Optimized**: Fast on 4G/5G
- **Smooth Animations**: 60 FPS transitions

## 🐛 Troubleshooting

### App won't load
- Check internet connection
- Clear browser cache
- Try in incognito mode

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

### Styling issues
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check CSS file is loaded

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📞 Support

For issues or questions:
- Check React documentation: https://react.dev/
- Vite documentation: https://vitejs.dev/
- Capacitor documentation: https://capacitorjs.com/
- Android Development: https://developer.android.com/

## 🎉 Credits

Built with:
- React 18
- TypeScript
- Vite
- Lucide React Icons
- Capacitor

---

**Made with ❤️ for travel enthusiasts**

Happy travels and happy coding! 🚀✈️
