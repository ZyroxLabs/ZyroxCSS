# ZyroxCSS Documentation

A modern, responsive CSS framework built with SCSS for creating beautiful and accessible web interfaces.

## 🎨 Component Index
- [Accordion & Accordion Advanced](#accordion)
- [Alerts](#alerts)
- [Avatar](#avatar)
- [Badges & Badge Dot](#badges)
- [Buttons](#buttons)
- [Cards & Card Overlay](#cards)
- [Carousel](#carousel)
- [Code Snippet](#code-snippet)
- [Dropdowns](#dropdowns)
- [File Uploader](#file-uploader)
- [Forms](#forms)
- [Glassmorphism](#glassmorphism)
- [Modals](#modals)
- [Navbar](#navbar)
- [Progress Bars](#progress-bars)
- [Sidebar](#sidebar)
- [Skeletons](#skeletons)
- [Spinner](#spinner)
- [Table](#table)
- [Tabs](#tabs)
- [Tooltips](#tooltips)

---

### <a name="accordion"></a>Accordion
```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">Header</button>
    <div class="accordion-content">Content</div>
  </div>
</div>
```

### <a name="alerts"></a>Alerts
```html
<div class="alert alert--success">Success</div>
<div class="alert alert--danger">Error</div>
```

### <a name="avatar"></a>Avatar
```html
<img src="user.jpg" class="avatar">
<img src="user.jpg" class="avatar avatar--lg">
<img src="user.jpg" class="avatar avatar--square">
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
<!-- Overlay -->
<div class="card-overlay">
  <img src="img.jpg" class="card-overlay__image">
  <div class="card-overlay__content">Content</div>
</div>
```

### <a name="code-snippet"></a>Code Snippet
```html
<div class="code-block">
  <code>console.log("Hello");</code>
</div>
```

### <a name="file-uploader"></a>File Uploader
```html
<div class="file-uploader">
  <p>Drag & Drop</p>
  <input type="file" class="file-uploader__input">
</div>
```

### <a name="glassmorphism"></a>Glassmorphism
```html
<div class="glass" style="padding: 20px;">
  Glass Effect Content
</div>
```

### <a name="navbar"></a>Navbar
```html
<nav class="navbar">
  <a href="#" class="brand">ZyroxCSS</a>
</nav>
```

### <a name="sidebar"></a>Sidebar
```html
<nav id="my-sidebar" class="sidebar">...</nav>
<button data-sidebar-toggle data-sidebar-target="#my-sidebar">Toggle</button>
```

### <a name="table"></a>Table
```html
<table class="table table--striped table--hover">
  <thead><tr><th>Name</th></tr></thead>
  <tbody><tr><td>John</td></tr></tbody>
</table>
```
