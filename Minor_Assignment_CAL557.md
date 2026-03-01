# Minor Assignment Submission
## Subject: CAL557 - Web Technology 1
## Submission Date: March 2, 2025 (Monday)
## Student Project Title: BlackImg - Multi-Page Visual Discovery Website

## 1. Introduction
BlackImg is a front-end website project developed using HTML5, CSS3, and JavaScript. The website focuses on a clean and responsive interface for visual content browsing. It demonstrates multi-page website design, structured navigation, and interactive modules suitable for academic evaluation in Web Technology.

## 2. Objectives
1. Design and implement a multi-page responsive website.
2. Apply semantic HTML and modular CSS styling practices.
3. Use JavaScript for interactive and dynamic UI behavior.
4. Build a user-friendly interface with clear navigation.
5. Demonstrate understanding of core web development concepts in CAL557.

## 3. Website Modules (Pages)
The website contains more than 7 pages, including the required pages:
1. Home (`main.html`)
2. About (`about.html`)
3. Services (`services.html`)
4. Photo Gallery (`gallery.html`)
5. Contact Us (`contact.html`)
6. Dashboard (`dashboard.html`)
7. Explore (`explore.html`)

Additional supporting pages used in the project:
- Index container page with frame layout (`index.html`)
- Header navigation page (`header.html`)
- Signup page (`Signup.html`)

## 4. UI Design Summary
1. Layout style: modern card-based interface with image-first presentation.
2. Navigation: top navigation bar with direct links to core pages.
3. Color system: monochrome base with high contrast for readability.
4. Responsiveness: media queries used for tablet and mobile adaptation.
5. Components: hero section, cards, stats blocks, forms, and gallery filters.
6. Accessibility basics: meaningful headings, alt text, and form labels.

## 5. Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Font Awesome icons

## 6. Code Highlights
### 6.1 Multi-Page Navigation (header)
```html
<nav class="top-nav" id="topNav" aria-label="Main navigation">
  <a href="main.html" target="mainFrame">Home</a>
  <a href="about.html" target="mainFrame">About</a>
  <a href="services.html" target="mainFrame">Services</a>
  <a href="gallery.html" target="mainFrame">Photo Gallery</a>
  <a href="contact.html" target="mainFrame">Contact</a>
</nav>
```

### 6.2 Gallery Filter Interaction (JavaScript)
```javascript
function applyFilter(filter) {
  photos.forEach(function (photo) {
    const show = filter === "all" || photo.dataset.category === filter;
    photo.classList.toggle("hidden", !show);
  });
}
```

### 6.3 Responsive Grid Styling (CSS)
```css
.cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

## 7. Conclusion
The BlackImg website successfully fulfills the minor assignment requirements by implementing a fully functional, responsive, and interactive multi-page web application. The project demonstrates practical understanding of HTML structure, CSS styling, and JavaScript-based interactivity.

## 8. Future Scope
1. Integrate backend and database for storing user data and gallery items.
2. Add authentication and role-based dashboard features.
3. Include advanced search and sorting in gallery/explore pages.
4. Improve accessibility with keyboard navigation enhancements.
5. Deploy on cloud hosting with CI/CD workflow for updates.

## 9. Demonstration Checklist
1. Open `index.html` and show navigation between all required pages.
2. Demonstrate Services and Photo Gallery modules.
3. Show JavaScript interactions (mobile menu, dashboard counters, gallery filters, contact form validation).
4. Explain report sections: Objectives, Modules, UI, Codes, Conclusion, Future Scope.
