# Minor Assignment Submission
## Subject: CAL557 - Web Technology I
## Project Title: BlackImg - Multi-Page Visual Discovery Website

## 1. Introduction
BlackImg is a multi-page front-end website built using HTML, CSS, and JavaScript. The project is designed as a visual discovery platform where users can access structured pages such as Home, Dashboard, About, Services, Gallery, Explore, and Contact. The main objective is to demonstrate modular web design, smooth navigation, and practical implementation of core web technologies.

The website is developed as part of the  Web Technology I minor assignment to apply theoretical concepts in a real project environment. It focuses on organizing content across multiple linked pages, maintaining a consistent user interface, and improving usability through clear navigation structure. Each module is designed with a specific purpose so that the overall website feels connected and easy to use.

In addition to page structure and styling, the project also includes client-side interactivity such as gallery filtering and form validation. These features help demonstrate how JavaScript can enhance user experience without requiring backend integration in the initial stage. Overall, BlackImg presents a practical front-end implementation that reflects responsive design principles, reusable components, and user-focused layout planning.

## 2. Development Requirements
### 2.1 Hardware
- Laptop/Desktop system
- Stable internet connection for testing and deployment

### 2.2 Software
- Operating System: Windows 11
- Code Editor: Visual Studio Code
- Browser: Google Chrome / Microsoft Edge
- Hosting Platform: Vercel

### 2.3 Technologies Used
- HTML5 for page structure
- CSS3 for styling and responsive layouts
- JavaScript for interactivity and validation
- Font Awesome for icons

## 3. Modules of the BlackImg Website
1. `index.html`  
   Main entry page using frame-based layout to load header and content sections.

2. `header.html`  
   Top navigation module with links to all major pages (`mainFrame` target).

3. `dashboard.html`  
   Overview page displaying quick highlights and stats cards.

4. `main.html`  
   Home module introducing BlackImg and key actions.

5. `about.html`  
   Describes project purpose, vision, and background.

6. `services.html`  
   Lists offerings and support features of the platform.

7. `gallery.html`  
   Image gallery with filter-based visual browsing.

8. `explore.html`  
   Extended discovery section with visual cards/content browsing.

9. `contact.html`  
   User communication form with input validation behavior.

10. `Signup.html`  
    User registration interface module.

## 4. Code Snippets
### 4.1 Navigation in `header.html`
```html
<nav class="top-nav" id="topNav" aria-label="Main navigation">
  <a href="dashboard.html" target="mainFrame">Dashboard</a>
  <a href="main.html" target="mainFrame">Home</a>
  <a href="about.html" target="mainFrame">About</a>
  <a href="services.html" target="mainFrame">Services</a>
  <a href="gallery.html" target="mainFrame">Photo Gallery</a>
  <a href="explore.html" target="mainFrame">Explore</a>
  <a href="contact.html" target="mainFrame">Contact</a>
</nav>
```

### 4.2 Frameset in `index.html`
```html
<frameset rows="80,*" border="0" frameborder="0" framespacing="0">
  <frame src="header.html" name="topFrame" scrolling="no" noresize />
  <frame src="dashboard.html" name="mainFrame" />
</frameset>
```

### 4.3 Gallery Filter Logic
```javascript
function applyFilter(filter) {
  photos.forEach((photo) => {
    const show = filter === "all" || photo.dataset.category === filter;
    photo.classList.toggle("hidden", !show);
  });
}
```

## 5. User Interface (UI) Summary
- Clean, image-first layout
- Top navigation for quick page switching
- Cards and sections for readable structure
- Mobile-friendly responsive behavior
- Consistent color and typography usage

## 6. Conclusion
BlackImg successfully demonstrates a functional multi-page website for the CAL557 minor assignment. The project applies HTML structuring, CSS styling, and JavaScript interactivity in a practical and organized way. It reflects a clear understanding of modular web development and user-focused UI design.

## 7. Future Scope
1. Add backend integration for user and gallery data storage.
2. Implement authentication and role-based access.
3. Add advanced gallery search/sort features.
4. Improve accessibility compliance and keyboard navigation.
5. Deploy production version with CI/CD workflow.
