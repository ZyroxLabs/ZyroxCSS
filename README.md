# ZyroxCSS

A modern, responsive CSS framework built with SCSS for creating beautiful and accessible web interfaces.

**Version**: 2.0.0 | **Status**: Stable & Production Ready

## ⚠️ Breaking Changes Notice

v2.0.0 includes significant breaking changes from v1.x. Please see [CHANGELOG.md](./CHANGELOG.md) and [MODERNIZATION.md](./MODERNIZATION.md) for migration guidance.

## 🎨 Features

### Modern Design
- **Contemporary Color Palette**: Indigo, cyan, and professional status colors
- **Advanced Shadows**: Multi-level shadow system for depth and hierarchy
- **Smooth Transitions**: Cubic-bezier easing for natural animations
- **Gradient Support**: Modern gradient utilities throughout components

### Fully Responsive
- **Mobile-First Approach**: Starts from mobile and scales up
- **Fluid Typography**: Responsive font sizes that scale with viewport
- **Responsive Grid**: 12-column grid system with breakpoints
- **Mobile-Optimized Navigation**: Adaptive navbar with hamburger menu
- **Touch-Friendly**: Adequate spacing and tap targets for mobile

### Accessibility
- **WCAG Compliant**: Semantic HTML and proper contrast ratios
- **Focus States**: Clear focus indicators for keyboard navigation
- **Form Validation**: Built-in validation state styling
- **Dark Mode Support**: Automatic dark mode with CSS variables

### Component Library
- **Buttons**: Multiple variants (primary, secondary, ghost, outline) with sizes (sm, md, lg, xl)
- **Cards**: Elevated, flat, and colored variants with responsive grids
- **Forms**: Modern inputs, selects, checkboxes, radio buttons, and toggles
- **Navigation**: Fixed navbar with mobile support and submenus
- **Modals**: Animated modals with multiple sizes and positions
- **Alerts**: Color-coded alerts with icons and close buttons
- **Badges**: Status indicators with sizes and variants
- **Tabs**: Multiple tab styles (default, pills, vertical, boxed)
- **Progress Bars**: Striped, animated, and circular progress indicators
- **Tooltips**: Positioned tooltips with multiple placement options
- **Dropdowns**: Responsive dropdown menus with mobile support
- **Carousel**: Image carousel component
- **Spinners**: Loading spinners and skeleton screens

## 📦 Installation

```bash
npm install zyroxcss
```

## 🚀 Quick Start

### Basic Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="path/to/zyroxcss.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to ZyroxCSS</h1>
        <button class="btn btn--primary">Get Started</button>
    </div>
</body>
</html>
```

### Building from Source

```bash
# Install dependencies
npm install

# Build CSS from SCSS
npm run build:css

# Run PostCSS with autoprefixer
npm run postcss

# Build everything
npm run build
```

## 🎯 Breakpoints

The framework uses standard responsive breakpoints:

- **Mobile**: < 640px (default)
- **Small**: 640px - 767px (`sm:`)
- **Medium**: 768px - 1023px (`md:`)
- **Large**: 1024px - 1279px (`lg:`)
- **Extra Large**: ≥ 1280px (`xl:`)
- **2XL**: ≥ 1536px (`2xl:`)

## 🎨 Color System

### Primary Colors
- **Primary**: #6366F1 (Indigo)
- **Primary Dark**: #4F46E5
- **Primary Light**: #818CF8

### Secondary Colors
- **Secondary**: #06B6D4 (Cyan)
- **Secondary Dark**: #0891B2
- **Secondary Light**: #22D3EE

### Status Colors
- **Success**: #10B981 (Green)
- **Error**: #EF4444 (Red)
- **Warning**: #F59E0B (Amber)
- **Info**: #3B82F6 (Blue)

### Neutrals
- **Text**: #1F2937 (Gray 800)
- **Text Secondary**: #6B7280 (Gray 500)
- **Background**: #FFFFFF
- **Background Secondary**: #F9FAFB
- **Border**: #E5E7EB

## 📐 Spacing Scale

- `var(--spacing-xs)`: 0.25rem
- `var(--spacing-sm)`: 0.5rem
- `var(--spacing-md)`: 1rem
- `var(--spacing-lg)`: 1.5rem
- `var(--spacing-xl)`: 2rem
- `var(--spacing-2xl)`: 3rem

## 🧩 Component Examples

### Buttons

```html
<!-- Primary Button -->
<button class="btn btn--primary">Primary</button>

<!-- Secondary Button -->
<button class="btn btn--secondary">Secondary</button>

<!-- Outline Button -->
<button class="btn btn--outline">Outline</button>

<!-- Button Group -->
<div class="btn-group">
    <button class="btn btn--primary">Save</button>
    <button class="btn btn--ghost">Cancel</button>
</div>
```

### Cards

```html
<div class="card">
    <div class="card-header">
        <h3 class="card-header__title">Card Title</h3>
    </div>
    <div class="card-body">
        This is the card content
    </div>
    <div class="card-footer">
        <button class="btn btn--primary btn--sm">Action</button>
    </div>
</div>

<!-- Card Grid -->
<div class="card-container">
    <div class="card">...</div>
    <div class="card">...</div>
</div>
```

### Forms

```html
<form>
    <div class="form-group">
        <label class="form-label form-label--required">Email</label>
        <input type="email" class="form-control" placeholder="your@email.com">
        <small class="form-text">Enter a valid email address</small>
    </div>
    
    <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="form-control form-textarea" rows="5"></textarea>
    </div>
    
    <button type="submit" class="btn btn--primary">Submit</button>
</form>
```

### Navigation

```html
<nav class="navbar">
    <div class="container">
        <a href="#" class="brand">ZyroxCSS</a>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link active">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
        <button class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</nav>
```

## 🔄 CSS Variables

All colors, spacing, and sizing use CSS variables for easy customization:

```css
:root {
    /* Colors */
    --primary-color: #6366F1;
    --secondary-color: #06B6D4;
    --success-color: #10B981;
    --error-color: #EF4444;
    
    /* Spacing */
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    
    /* Border Radius */
    --border-radius-md: 0.5rem;
    --border-radius-lg: 0.75rem;
    
    /* Shadows */
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

## 📱 Responsive Utilities

### Responsive Grid

```html
<div class="container">
    <div class="row">
        <div class="col col-md-6 col-lg-4">...</div>
        <div class="col col-md-6 col-lg-4">...</div>
        <div class="col col-md-6 col-lg-4">...</div>
    </div>
</div>
```

### Responsive Display

```html
<!-- Hidden on mobile, visible on desktop -->
<div class="hidden md:block">
    Desktop only content
</div>

<!-- Visible on mobile, hidden on desktop -->
<div class="md:hidden">
    Mobile only content
</div>
```

### Responsive Spacing

```html
<div class="p-3 md:p-6 lg:p-8">
    Responsive padding
</div>
```

## 🌙 Dark Mode

Dark mode is automatically supported through CSS variables and media queries:

```css
@media (prefers-color-scheme: dark) {
    /* Dark mode styles automatically applied */
}
```

Users can prefer dark mode in their system settings and the site will automatically adapt.

## 📚 Documentation

For complete documentation and more examples, visit the main README or check the source SCSS files in the `src/scss/` directory.

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

---

**Version**: 1.1.0  
**Last Updated**: January 2026