# The Dhammapada - Static Website

A beautiful, fully-functional static website for The Dhammapada Buddhist scriptures built with **pure HTML, CSS, and JavaScript** - no frameworks, no build process, no dependencies!

## ✨ Features

### All Features Included:
- ✅ **Full-Screen Hero** with Buddha background image
- ✅ **13 Chapters** with 29 complete verses
- ✅ **Dark Mode** with persistent preference
- ✅ **Global Search** (CMD+K / CTRL+K)
- ✅ **Responsive Design** for all devices
- ✅ **Pali Text** with English translations
- ✅ **Detailed Commentary** for each verse
- ✅ **Buddhist Stories** (Jataka tales)
- ✅ **Smooth Animations** and transitions
- ✅ **Accordion Components** for commentary and stories
- ✅ **Breadcrumb Navigation**
- ✅ **Previous/Next Verse** navigation
- ✅ **Custom Scrollbar** styling
- ✅ **SEO Optimized**

## 🚀 How to Use

### Option 1: Open Directly in Browser
1. **Navigate to the folder:**
   ```
   C:\Users\garul\.gemini\antigravity\scratch\dhammapada-static
   ```

2. **Double-click `index.html`** to open in your default browser

3. **That's it!** No installation, no build process needed.

### Option 2: Use a Local Server (Recommended)
For better performance and to avoid CORS issues:

1. **Using Python:**
   ```bash
   cd C:\Users\garul\.gemini\antigravity\scratch\dhammapada-static
   python -m http.server 8000
   ```
   Then open: http://localhost:8000

2. **Using Node.js (if installed):**
   ```bash
   npx http-server -p 8000
   ```
   Then open: http://localhost:8000

3. **Using VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html`
   - Select "Open with Live Server"

## 📁 File Structure

```
dhammapada-static/
├── index.html          # Homepage
├── chapter.html        # Chapter detail page
├── verse.html          # Verse detail page
├── styles.css          # All styles (dark mode, responsive, animations)
├── script.js           # All functionality (search, navigation, dark mode)
├── dhammapada.json     # All data (13 chapters, 29 verses)
└── buddha.jpg          # Buddha image
```

## 🎨 Customization

### Change Colors:
Edit the CSS variables in `styles.css`:
```css
:root {
    --saffron-500: #e4b23d;  /* Main accent color */
    --cream-50: #fdfbf7;     /* Background color */
    /* ... */
}
```

### Add More Chapters/Verses:
Edit `dhammapada.json` following the existing format:
```json
{
  "chapters": [
    {
      "id": 1,
      "name_pali": "...",
      "name_en": "...",
      "summary": "...",
      "verses": [...]
    }
  ]
}
```

### Modify Styles:
All styles are in `styles.css` - no build process needed, just edit and refresh!

## 🌐 Deployment

### Deploy to Any Static Host:

1. **GitHub Pages:**
   - Create a GitHub repository
   - Upload all files
   - Enable GitHub Pages in settings
   - Done!

2. **Netlify:**
   - Drag and drop the folder to Netlify
   - Your site is live!

3. **Vercel:**
   - Upload the folder
   - Deploy instantly

4. **Any Web Server:**
   - Upload all files via FTP
   - Works on any hosting

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🎯 Advantages Over Next.js Version

1. **No Dependencies** - Zero npm packages
2. **No Build Process** - Just open and use
3. **Faster Loading** - No framework overhead
4. **Easier to Understand** - Plain HTML/CSS/JS
5. **Works Offline** - Once loaded, fully functional
6. **Easier to Deploy** - Upload anywhere
7. **Easier to Modify** - Edit and see changes instantly

## 📝 Technical Details

- **Pure HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - ES6+, async/await
- **No jQuery** - Pure DOM manipulation
- **No Build Tools** - No webpack, no babel
- **No Frameworks** - No React, no Vue
- **LocalStorage** - For dark mode preference
- **Fetch API** - For loading JSON data

## 🔍 Features Breakdown

### Dark Mode:
- Toggle button in navbar
- Persists across sessions
- Smooth transitions
- Custom dark color scheme

### Search (CMD+K):
- Keyboard shortcut activation
- Real-time search
- Searches Pali, translation, and commentary
- Shows chapter context
- Keyboard navigation ready

### Navigation:
- Breadcrumb trails
- Previous/Next verse buttons
- Smooth scrolling
- Hash-based routing

### Responsive Design:
- Mobile-first approach
- Tablet optimized
- Desktop enhanced
- Touch-friendly

## 🙏 Content

- **13 Chapters** of the Dhammapada
- **29 Complete Verses** with:
  - Authentic Pali text
  - English translations
  - Detailed commentary
  - Relevant Buddhist stories

## 💡 Tips

1. **Bookmark** your favorite verses
2. **Use CMD+K** for quick search
3. **Toggle dark mode** for comfortable reading
4. **Share** individual verse URLs
5. **Print** verses for offline reading

## 🔧 Troubleshooting

**Search not working?**
- Make sure you're using a local server or the file:// protocol allows fetch

**Images not loading?**
- Check that `buddha.jpg` is in the same folder

**Styles not applying?**
- Clear browser cache and refresh

## 📄 License

Free to use for personal and educational purposes.

## 🌟 Enjoy!

May this website help spread the Buddha's teachings and bring peace to all who visit it.

---

**Created:** December 6, 2025  
**Version:** Static HTML/CSS/JS  
**No dependencies, no build process, just pure web!** ✨
