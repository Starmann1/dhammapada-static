// Global state
let dhammapadaData = null;
let darkMode = localStorage.getItem('darkMode') === 'true';

// Helper function to generate verse ID from chapter and verse number
function getVerseId(chapterId, verseNumber) {
    return `${chapterId}-${verseNumber}`;
}

// Helper function to parse verse ID
function parseVerseId(verseId) {
    const [chapterId, verseNumber] = verseId.split('-').map(Number);
    return { chapterId, verseNumber };
}

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    // Load data
    await loadData();

    // Initialize dark mode
    initDarkMode();

    // Initialize search
    initSearch();

    // Initialize scroll features
    initScrollFeatures();

    // Initialize scroll to top button
    initScrollToTop();

    // Load page content based on URL
    loadPageContent();
});

// Load Dhammapada data
async function loadData() {
    try {
        // Determine the correct path based on current location
        const isInPagesDir = window.location.pathname.includes('/pages/');
        const dataPath = isInPagesDir ? '../data/dhammapada.json' : 'data/dhammapada.json';
        const response = await fetch(dataPath);
        dhammapadaData = await response.json();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Dark mode functionality
function initDarkMode() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', darkMode);
}

// Search functionality
function initSearch() {
    const searchButton = document.getElementById('searchButton');
    const searchModal = document.getElementById('searchModal');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            searchModal.classList.add('active');
            searchInput.focus();
        });
    }

    // Close modal on escape or click outside
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchModal.classList.add('active');
            searchInput.focus();
        }
        if (e.key === 'Escape') {
            searchModal.classList.remove('active');
        }
    });

    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
}

function performSearch(query) {
    const searchResults = document.getElementById('searchResults');

    if (!query || query.length < 2) {
        searchResults.innerHTML = '<div class="search-no-results">Type at least 2 characters to search...</div>';
        return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    dhammapadaData.chapters.forEach(chapter => {
        chapter.verses.forEach(verse => {
            if (
                verse.pali.toLowerCase().includes(lowerQuery) ||
                verse.translation.toLowerCase().includes(lowerQuery) ||
                verse.commentary.toLowerCase().includes(lowerQuery)
            ) {
                results.push({
                    verse,
                    chapter
                });
            }
        });
    });

    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
        return;
    }

    searchResults.innerHTML = results.slice(0, 10).map(({ verse, chapter }) => {
        const isInPagesDir = window.location.pathname.includes('/pages/');
        const versePath = isInPagesDir ? 'verse.html' : 'pages/verse.html';
        return `
        <a href="${versePath}?id=${getVerseId(chapter.id, verse.verse_number)}" class="search-result-item">
            <div class="search-result-chapter">
                Chapter ${chapter.id}: ${chapter.name_en}
            </div>
            <div class="search-result-text">
                Verse ${verse.verse_number}: ${verse.translation.substring(0, 100)}...
            </div>
        </a>
    `}).join('');
}

// Load page content
function loadPageContent() {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    if (path.includes('chapter.html')) {
        const chapterId = parseInt(params.get('id'));
        loadChapterPage(chapterId);
    } else if (path.includes('verse.html')) {
        const verseId = params.get('id');
        loadVersePage(verseId);
    } else {
        loadHomePage();
    }
}

// Load homepage
function loadHomePage() {
    const chaptersContainer = document.getElementById('chaptersContainer');
    if (!chaptersContainer || !dhammapadaData) return;

    chaptersContainer.innerHTML = dhammapadaData.chapters.map(chapter => `
        <a href="pages/chapter.html?id=${chapter.id}" class="chapter-card">
            <div class="chapter-number">${chapter.id}</div>
            <h3 class="chapter-title">${chapter.name_en}</h3>
            <p class="chapter-title-pali">${chapter.name_pali}</p>
            <p class="chapter-summary">${chapter.summary}</p>
            <div class="chapter-meta">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                </svg>
                <span>${chapter.verses.length} Verses</span>
            </div>
        </a>
    `).join('');
}

// Load chapter page
function loadChapterPage(chapterId) {
    if (!dhammapadaData) return;

    const chapter = dhammapadaData.chapters.find(c => c.id === chapterId);
    if (!chapter) {
        window.location.href = '../index.html';
        return;
    }

    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <a href="../index.html">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
            </a>
            <span>/</span>
            <span>${chapter.name_en}</span>
        `;
    }

    // Update chapter header (simplified)
    const chapterHeader = document.getElementById('chapterHeader');
    if (chapterHeader) {
        chapterHeader.innerHTML = `
            <div style="display: flex; align-items: start; gap: 1.5rem;">
                <div class="chapter-number">${chapter.id}</div>
                <div style="flex: 1;">
                    <div style="font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
                        Chapter ${chapter.id}
                    </div>
                    <h1 style="font-size: 2.5rem; margin: 0 0 0.75rem 0; font-family: 'Playfair Display', serif;">${chapter.name_en}</h1>
                    <p class="chapter-title-pali" style="font-size: 1.375rem; margin: 0; color: var(--saffron-600);">${chapter.name_pali}</p>
                </div>
            </div>
        `;
    }

    // Update chapter summary section (right column)
    const chapterSummary = document.getElementById('chapterSummary');
    if (chapterSummary) {
        chapterSummary.innerHTML = `
            <h2>${chapter.name_en}</h2>
            <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 2px solid rgba(228, 178, 61, 0.2);">
                <p class="chapter-title-pali" style="font-size: 1.125rem; margin-bottom: 1rem;">${chapter.name_pali}</p>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--saffron-500); font-weight: 600;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>
                    <span>${chapter.verses.length} Verses</span>
                </div>
            </div>
            <div class="summary-text">
                ${chapter.summary}
            </div>
        `;
    }

    // Update verse list (left column)
    const verseList = document.getElementById('verseList');
    if (verseList) {
        verseList.innerHTML = chapter.verses.map(verse => `
            <a href="verse.html?id=${getVerseId(chapter.id, verse.verse_number)}" class="verse-card">
                <div class="verse-number-badge">${verse.verse_number}</div>
                <div class="verse-preview">
                    <p class="verse-pali">${verse.pali.substring(0, 80)}...</p>
                    <p class="verse-translation">${verse.translation.substring(0, 120)}...</p>
                </div>
                <div style="flex-shrink: 0;">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
            </a>
        `).join('');
    }
}

// Load verse page
function loadVersePage(verseId) {
    if (!dhammapadaData) return;

    const { chapterId, verseNumber } = parseVerseId(verseId);

    let verse = null;
    let chapter = null;

    chapter = dhammapadaData.chapters.find(c => c.id === chapterId);
    if (chapter) {
        verse = chapter.verses.find(v => v.verse_number === verseNumber);
    }

    if (!verse || !chapter) {
        window.location.href = '../index.html';
        return;
    }

    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <a href="../index.html">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
            </a>
            <span>/</span>
            <a href="chapter.html?id=${chapter.id}">${chapter.name_en}</a>
            <span>/</span>
            <span>Verse ${verse.verse_number}</span>
        `;
    }

    // Update verse content
    const verseContent = document.getElementById('verseContent');
    if (verseContent) {
        verseContent.innerHTML = `
            <div class="verse-header">
                <div class="verse-number-large">${verse.verse_number}</div>
                <h1 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Verse ${verse.verse_number}</h1>
                <p style="color: var(--text-secondary);">From ${chapter.name_en} (${chapter.name_pali})</p>
            </div>
            
            <div class="verse-text">
                <p class="verse-pali-large">${verse.pali}</p>
                <p class="verse-translation-large">${verse.translation}</p>
            </div>
            
            <div class="accordion">
                <button class="accordion-button" onclick="toggleAccordion(this)">
                    <span>Commentary</span>
                    <svg class="accordion-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">${verse.commentary}</div>
                </div>
            </div>
            
            <div class="accordion">
                <button class="accordion-button" onclick="toggleAccordion(this)">
                    <span>Buddhist Story: ${verse.story.title}</span>
                    <svg class="accordion-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
                <div class="accordion-content">
                    <div class="accordion-body">${verse.story.content}</div>
                </div>
            </div>
        `;
    }

    // Update navigation
    const verseNavigation = document.getElementById('verseNavigation');
    if (verseNavigation) {
        const currentIndex = chapter.verses.findIndex(v => v.verse_number === verse.verse_number);
        const prevVerse = currentIndex > 0 ? chapter.verses[currentIndex - 1] : null;
        const nextVerse = currentIndex < chapter.verses.length - 1 ? chapter.verses[currentIndex + 1] : null;

        verseNavigation.innerHTML = `
            ${prevVerse ? `
                <a href="verse.html?id=${getVerseId(chapter.id, prevVerse.verse_number)}" class="nav-button">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <span>Previous Verse</span>
                </a>
            ` : '<div></div>'}
            
            ${nextVerse ? `
                <a href="verse.html?id=${getVerseId(chapter.id, nextVerse.verse_number)}" class="nav-button">
                    <span>Next Verse</span>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            ` : '<div></div>'}
        `;
    }
}

// Accordion toggle
function toggleAccordion(button) {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
    content.classList.toggle('active');

    // Rotate icon
    const icon = button.querySelector('svg');
    if (icon) {
        icon.classList.toggle('accordion-icon');
    }
}

// Initialize scroll features (reading progress bar and navbar effect)
function initScrollFeatures() {
    // Create reading progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.prepend(progressBar);

    // Update progress bar and navbar on scroll
    window.addEventListener('scroll', () => {
        // Update reading progress
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = `${Math.min(progress, 100)}%`;

        // Add shadow to navbar when scrolled
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (scrolled > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

// Initialize scroll to top button
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
    `;
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

