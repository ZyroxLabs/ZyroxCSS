# ZyroxCSS Documentation

A modern, responsive CSS framework built with SCSS.

## 🎨 Component Index
1. [Accordion](#accordion)
2. [Alerts](#alerts)
3. [Avatar](#avatar)
4. [Badges](#badges)
5. [Buttons](#buttons)
6. [Cards](#cards)
7. [Carousel](#carousel)
8. [Code Snippet](#code-snippet)
9. [Dropdowns](#dropdowns)
10. [File Uploader](#file-uploader)
11. [Forms](#forms)
12. [Glassmorphism](#glassmorphism)
13. [Grid System](#grid-system)
14. [Modals](#modals)
15. [Navbar](#navbar)
16. [Pagination](#pagination)
17. [Progress Bars](#progress-bars)
18. [Sidebar](#sidebar)
19. [Skeletons](#skeletons)
20. [Spinner](#spinner)
21. [Table](#table)
22. [Tabs](#tabs)
23. [Tooltips](#tooltips)

---

### <a name="accordion"></a>Accordion
```html
<div class="accordion">
  <div class="accordion__header">Header</div>
  <div class="accordion__body">Content</div>
</div>
```

### <a name="alerts"></a>Alerts
```html
<div class="alert alert--success">Success</div>
<div class="alert alert--danger">Error</div>
```

### <a name="avatar"></a>Avatar
```html
<img src="img.jpg" class="avatar">
<img src="img.jpg" class="avatar avatar--lg">
<img src="img.jpg" class="avatar avatar--square">
```

### <a name="badges"></a>Badges
```html
<span class="badge badge--primary">Primary</span>
<span class="badge-dot badge-dot--success">Online</span>
```

### <a name="buttons"></a>Buttons
```html
<button class="btn btn--primary">Primary</button>
<button class="btn btn--outline">Outline</button>
```

### <a name="cards"></a>Cards
```html
<div class="card">
  <div class="card-body">Content</div>
</div>
<!-- Overlay Card -->
<div class="card-overlay">
  <img src="img.jpg" class="card-overlay__image">
  <div class="card-overlay__content">Content</div>
</div>
```

### <a name="carousel"></a>Carousel
```html
<div class="carousel" data-autoplay="3000">
  <div class="carousel-inner">
    <div class="carousel-item">Item 1</div>
  </div>
</div>
```

### <a name="code-snippet"></a>Code Snippet
```html
<div class="code-block">
  <code>console.log("Hello");</code>
</div>
```

### <a name="dropdowns"></a>Dropdowns
```html
<div class="dropdown">
  <button class="dropdown-toggle">Menu</button>
  <div class="dropdown-menu">...</div>
</div>
```

### <a name="file-uploader"></a>File Uploader
```html
<div class="file-uploader">
  <input type="file" class="file-uploader__input">
</div>
```

### <a name="forms"></a>Forms
```html
<form class="form-group">
  <input type="text" class="form-control">
</form>
```

### <a name="glassmorphism"></a>Glassmorphism
```html
<div class="glass">Content</div>
```

### <a name="grid-system"></a>Grid System
```html
<div class="grid md:grid-cols-3 gap-4">
  <div class="col">1</div>
  <div class="col">2</div>
</div>
```

### <a name="modals"></a>Modals
```html
<div id="modal" class="modal">
  <div class="modal-content">Content</div>
</div>
<button data-modal-target="#modal">Open</button>
```

### <a name="navbar"></a>Navbar
```html
<nav class="navbar">...</nav>
```

### <a name="pagination"></a>Pagination
```html
<div class="pagination">
  <div class="page-item">1</div>
</div>
```

### <a name="progress-bars"></a>Progress Bars
```html
<div class="progress">
  <div class="progress-bar" style="width: 50%;"></div>
</div>
```

### <a name="sidebar"></a>Sidebar
```html
<nav id="sidebar" class="sidebar">...</nav>
<button data-sidebar-toggle data-sidebar-target="#sidebar">Toggle</button>
```

### <a name="skeletons"></a>Skeletons
```html
<div class="skeleton"></div>
```

### <a name="spinner"></a>Spinner
```html
<div class="spinner"></div>
```

### <a name="table"></a>Table
```html
<table class="table table--striped table--hover">...</table>
```

### <a name="tabs"></a>Tabs
```html
<div class="tabs">
  <button class="tab-link active">Tab 1</button>
  <div class="tab-content active">Content 1</div>
</div>
```

### <a name="tooltips"></a>Tooltips
```html
<div class="tooltip">Hover me<span class="tooltip-text">Tip</span></div>
```
