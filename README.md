# The Dhammapada - Static Website

A beautiful, static website for reading and studying The Dhammapada, a collection of sayings of the Buddha in verse form.

## 📁 Project Structure

```
dhammapada-static/
├── index.html              # Main homepage
│
├── pages/                  # HTML pages
│   ├── chapter.html       # Chapter detail page
│   └── verse.html         # Individual verse page
│
├── assets/                # Static assets
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── images/
│   │   └── buddha.jpg     # Hero image
│   └── js/
│       └── script.js      # Main JavaScript file
│
├── data/                  # Data files
│   └── dhammapada.json    # Complete Dhammapada data (26 chapters, 423 verses)
│
├── scripts/               # Python utility scripts
│   ├── expand_dhammapada.py
│   └── generate_dhammapada.py
│
├── backup/                # Backup files
│   ├── dhammapada.json.backup
│   └── dhammapada_expanded.json
│
└── docs/                  # Documentation
    ├── README.md          # Original project documentation
    └── FINAL_SUMMARY.md   # Project summary
```

## 🚀 Getting Started

### Running Locally

Since this is a static website, you can run it using any local web server:

**Option 1: Python HTTP Server**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js HTTP Server**
```bash
npx http-server
```

**Option 3: VS Code Live Server**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then open your browser to `http://localhost:8000` (or the port shown).

## ✨ Features

- **26 Complete Chapters**: All chapters of The Dhammapada with authentic Pali names and English translations
- **423 Verses**: Complete collection with Pali text, English translations, commentary, and Buddhist stories
- **Search Functionality**: Search across all verses (Ctrl+K or Cmd+K)
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works beautifully on all devices
- **Beautiful UI**: Modern, clean design with smooth animations

## 📖 Content Structure

The `data/dhammapada.json` file contains:
- **Chapters**: Each with ID, Pali name, English name, summary, and verse count
- **Verses**: Each with:
  - Verse number
  - Pali text
  - English translation
  - Commentary
  - Related Buddhist story (title and content)

## 🛠️ Development

### File Organization

- **HTML Files**: Entry point (`index.html`) in root, other pages in `pages/`
- **Assets**: All CSS, JS, and images organized in `assets/` subdirectories
- **Data**: JSON data files in `data/`
- **Scripts**: Python utilities in `scripts/`
- **Documentation**: All docs in `docs/`
- **Backups**: Previous versions in `backup/`

### Path References

The JavaScript automatically detects whether it's running from the root or pages directory and adjusts paths accordingly:
- From `index.html`: Links to `pages/chapter.html`, `data/dhammapada.json`, etc.
- From `pages/*.html`: Links to `../index.html`, `../data/dhammapada.json`, etc.

## 📝 License

This project contains Buddhist scriptures which are in the public domain. The website code and design are provided as-is for educational and spiritual purposes.

## 🙏 Acknowledgments

May all beings benefit from the wisdom of the Buddha's teachings.

---

**Note**: This is a static website with no backend dependencies. All data is loaded from the JSON file in the `data/` directory.
