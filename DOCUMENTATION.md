# ZyroxCSS Documentation

A modern, responsive CSS framework built with SCSS.

## 🎨 Component Index
1. [Accordion](#accordion)
2. [Alerts](#alerts)
3. [Aspect Ratio](#aspect-ratio)
4. [Avatar](#avatar)
5. [Badges](#badges)
6. [Breadcrumbs](#breadcrumbs)
7. [Buttons](#buttons)
8. [Cards](#cards)
9. [Carousel](#carousel)
10. [Code Snippet](#code-snippet)
11. [Dark Mode](#dark-mode)
12. [Dropdowns](#dropdowns)
13. [File Uploader](#file-uploader)
14. [Forms](#forms)
15. [Glassmorphism](#glassmorphism)
16. [Grid System](#grid-system)
17. [Hero](#hero)
18. [Modals](#modals)
19. [Navbar](#navbar)
20. [Pagination](#pagination)
21. [Progress Bars](#progress-bars)
22. [Sidebar](#sidebar)
23. [Skeletons](#skeletons)
24. [Spinner](#spinner)
25. [Switch](#switch)
26. [Table](#table)
27. [Tabs](#tabs)
28. [Toasts](#toasts)
29. [Tooltips](#tooltips)

---

### <a name="accordion"></a>Accordion & Accordion Advanced
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

### <a name="aspect-ratio"></a>Aspect Ratio
```html
<div class="aspect-video"><iframe src="..."></iframe></div>
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

### <a name="breadcrumbs"></a>Breadcrumbs
```html
<ol class="breadcrumb"><li><a href="#">Home</a></li><li>Link</li></ol>
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
<div class="card-overlay">
  <img src="img.jpg" class="card-overlay__image">
  <div class="card-overlay__content">Content</div>
</div>
```

### <a name="carousel"></a>Carousel
```html
<div class="carousel">
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

### <a name="dark-mode"></a>Dark Mode
```html
<button data-theme-toggle>Toggle Theme</button>
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
  <label class="form-label">Label</label>
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

### <a name="hero"></a>Hero
```html
<div class="hero">
  <h1>Hero Title</h1>
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
<nav class="navbar"><a href="#" class="brand">Brand</a></nav>
```

### <a name="pagination"></a>Pagination
```html
<div class="pagination">
  <div class="page-item">1</div>
</div>
```

### <a name="progress-bars"></a>Progress Bars
```html
<div class="progress"><div class="progress-bar" style="width: 50%;"></div></div>
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

### <a name="switch"></a>Switch
```html
<label class="switch"><input type="checkbox"><span class="slider"></span></label>
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

### <a name="toasts"></a>Toasts
```html
<button onclick="zyroxCSS.showToast('Msg')">Toast</button>
```

### <a name="tooltips"></a>Tooltips
```html
<div class="tooltip">Hover me<span class="tooltip-text">Tip</span></div>
```
