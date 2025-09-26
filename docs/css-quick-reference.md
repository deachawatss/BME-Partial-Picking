# CSS Quick Reference: Partial Picking Component

**Project**: PK (Partial Picking System)
**Last Updated**: 2025-09-26
**Version**: 1.0

## 🎨 Color System

### NWFTH Brand Colors
```css
/* Primary Brand Colors */
--color-brand-brown: #523325    /* Primary UI color */
--color-brand-amber: #F0B429    /* Accent/highlights */
--color-brand-cream: #F5F5DC    /* Background/text */

/* HSL Variants for CSS Functions */
--color-brand-brown-hsl: 20 50% 25%
--color-brand-amber-hsl: 43 87% 56%
--color-brand-cream-hsl: 60 56% 91%
```

### Status Colors
```css
/* Semantic Status Colors */
--color-danger: 0 84% 60%        /* Error states */
--color-success: 142 71% 45%     /* Success states */
--color-warning: 38 92% 50%      /* Warning states */
--color-info: 221 83% 53%        /* Info states */
```

### Usage Examples
```css
/* Brand color usage */
.nwfth-element {
  color: var(--color-brand-brown);
  background: var(--color-brand-cream);
  border: 2px solid var(--color-brand-amber);
}

/* Status color usage */
.success-message {
  color: hsl(var(--color-success));
  background: hsl(var(--color-success) / 0.1);
}

/* Color mixing */
.hover-state {
  background: color-mix(in srgb, var(--color-brand-amber) 20%, transparent 80%);
}
```

## 📏 Layout System

### CSS Grid Layout
```css
/* Main 2-Column Layout */
.main-content {
  display: grid;
  grid-template-columns: minmax(600px, 2fr) minmax(500px, 1.5fr);
  gap: 32px;
  min-height: calc(100vh - 200px);
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
```

### Key Measurements
```css
/* Spacing Scale */
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px

/* Component Heights */
--input-height: 44px
--button-height: 48px
--header-height: 60px

/* Container Widths */
--form-min-width: 600px
--table-min-width: 500px
--input-max-width: 320px
```

## 🎯 Key CSS Classes

### Container Classes
```css
.partial-picking-container  /* Root wrapper with brand background */
.header-section            /* Top information section */
.main-content             /* CSS Grid main area */
.form-section             /* Left column form fields */
.table-section            /* Right column data table */
.action-buttons           /* Bottom action buttons */
```

### Form Elements
```css
.form-field               /* Individual form field row */
.field-label              /* Form field labels */
.field-input              /* Standard input fields */
.field-input-group        /* Input with additional elements */
.weight-field             /* Enhanced weight input section */
.lookup-button            /* Search/lookup buttons */
```

### Table Elements
```css
.table-container          /* Table wrapper with styling */
.table-header             /* Table title section */
.table-status-tabs        /* Status filter tabs */
.table-header-row         /* Column headers */
.table-data-row           /* Data rows */
.table-cell               /* Individual cells */
```

### Button Classes
```css
.action-button            /* Standard action buttons */
.action-button.primary-action    /* Primary amber buttons */
.action-button.danger-action     /* Delete/danger buttons */
.fetch-weight-button      /* Weight fetch button */
.lookup-button           /* Search buttons */
```

### State Classes
```css
.selected-row            /* Table row selection */
.in-tolerance           /* Weight within tolerance */
.out-of-tolerance       /* Weight outside tolerance */
.readonly-field         /* Disabled input fields */
.loading-spinner        /* Loading indicator */
```

## 📱 Responsive Breakpoints

### Breakpoint System
```css
/* Desktop Primary - 1280x1080 Optimization */
@media (min-width: 1280px) and (max-width: 1400px) {
  .main-content {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 20px;
  }
}

/* Tablet Fallback */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .form-field {
    flex-direction: column;
    align-items: stretch;
  }
}

/* Mobile Emergency */
@media (max-width: 768px) {
  .partial-picking-container {
    padding: 8px;
  }

  .table-data-row {
    grid-template-columns: repeat(6, minmax(80px, 1fr));
    font-size: 12px;
  }
}
```

### Responsive Utilities
```css
/* Container Adjustments */
.container-desktop { max-width: 1280px; }
.container-tablet { max-width: 1024px; }
.container-mobile { max-width: 768px; }

/* Text Scaling */
.text-desktop { font-size: 16px; }
.text-tablet { font-size: 15px; }
.text-mobile { font-size: 14px; }
```

## 🎨 Component Interaction Patterns

### Hover Effects
```css
/* Button Hover */
.action-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px color-mix(in srgb, var(--color-brand-brown) 30%, transparent 70%);
}

/* Table Row Hover */
.table-data-row:hover {
  background: color-mix(in srgb, var(--color-brand-amber) 10%, transparent 90%);
}

/* Input Focus */
.field-input:focus-visible {
  border-color: var(--color-brand-amber);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-brand-amber) 25%, transparent 75%);
}
```

### Animation Classes
```css
/* Loading Animation */
.loading-spinner {
  animation: spin 1s linear infinite;
}

/* Transition Classes */
.transition-all {
  transition: all 0.2s ease;
}

.transition-colors {
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}
```

## 🔧 Common Modifications

### Adding New Colors
```css
/* Step 1: Add to root */
:root {
  --color-new-semantic: H S% L%;
  --color-new-semantic-foreground: H S% L%;
}

/* Step 2: Create utility classes */
.text-new-semantic { color: hsl(var(--color-new-semantic)); }
.bg-new-semantic { background-color: hsl(var(--color-new-semantic)); }

/* Step 3: Use in components */
.component {
  color: var(--color-new-semantic);
}
```

### Creating Button Variants
```css
.action-button.new-variant {
  border-color: var(--color-new);
  color: var(--color-new-foreground);
}

.action-button.new-variant:hover:not(:disabled) {
  background: var(--color-new);
  color: white;
}
```

### Layout Modifications
```css
/* Three-column layout */
.main-content.three-column {
  grid-template-columns: 1fr 1fr 1fr;
}

/* Wide form layout */
.main-content.form-heavy {
  grid-template-columns: minmax(700px, 3fr) minmax(400px, 1fr);
}
```

## ♿ Accessibility Standards

### Focus Management
```css
/* Global focus indicator */
:focus-visible {
  outline: 2px solid var(--color-brand-amber);
  outline-offset: 2px;
}

/* Component-specific focus */
.input-focus:focus-visible {
  outline: none;
  border-color: var(--color-brand-amber);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-brand-amber) 25%, transparent 75%);
}
```

### High Contrast Support
```css
@media (prefers-contrast: high) {
  .field-input,
  .action-button {
    border-width: 3px;
  }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🏗️ Architecture Patterns

### Component Naming Convention
```css
/* Block */
.partial-picking-container

/* Block__Element */
.partial-picking-container__header
.partial-picking-container__content

/* Block--Modifier */
.partial-picking-container--loading
.partial-picking-container--error

/* Block__Element--Modifier */
.partial-picking-container__button--primary
```

### CSS Organization Structure
```css
/* 1. Component Root */
.component-name { }

/* 2. Component Elements */
.component-name__element { }

/* 3. Component Modifiers */
.component-name--modifier { }

/* 4. State Classes */
.component-name.is-active { }
.component-name.has-error { }

/* 5. Responsive Variations */
@media (max-width: 768px) {
  .component-name { }
}
```

## 🎪 Animation System

### Performance-Optimized Animations
```css
/* Transform-based animations (preferred) */
.animate-element {
  will-change: transform;
  transform: translateZ(0); /* Force GPU acceleration */
}

.animate-element:hover {
  transform: translateY(-2px) translateZ(0);
}

/* Avoid layout-triggering animations */
/* ❌ Avoid: top, left, width, height changes */
/* ✅ Use: transform, opacity changes */
```

### Keyframe Definitions
```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(10px); }
  to { transform: translateY(0); }
}
```

## 🛠️ Debug Utilities

### Layout Debugging
```css
/* Temporary grid visualization */
.debug-grid {
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 50px,
    rgba(255,0,0,0.1) 50px,
    rgba(255,0,0,0.1) 51px
  );
}

/* Show component boundaries */
.debug-boundaries * {
  outline: 1px solid red !important;
}

/* Display breakpoint information */
@media (min-width: 1280px) {
  body::before {
    content: "Desktop View (1280px+)";
    position: fixed;
    top: 0;
    left: 0;
    background: blue;
    color: white;
    padding: 5px;
    z-index: 9999;
  }
}
```

### CSS Custom Property Debugging
```css
/* Show missing custom properties */
.element {
  color: var(--color-brand-brown, red); /* Red indicates missing property */
  background: var(--color-brand-cream, yellow); /* Yellow indicates missing property */
}
```

## 📋 Testing Checklist

### Visual Testing
- [ ] Component renders at 1280x1080
- [ ] NWFTH brand colors accurate
- [ ] Interactive states functional
- [ ] Typography consistent

### Responsive Testing
- [ ] Desktop layout optimal
- [ ] Tablet stacking works
- [ ] Mobile emergency functional
- [ ] No horizontal overflow

### Accessibility Testing
- [ ] Keyboard navigation
- [ ] Focus indicators visible
- [ ] Color contrast compliant
- [ ] Screen reader compatible

### Performance Testing
- [ ] Animations 60fps
- [ ] No layout thrashing
- [ ] CSS file size <25KB
- [ ] Fast paint times

---

## 📞 Quick Help

### Common Issues
1. **Layout broken**: Check CSS Grid browser support
2. **Colors not showing**: Verify custom property definitions
3. **Focus not visible**: Ensure :focus-visible polyfill
4. **Animations choppy**: Use transform instead of position
5. **Mobile not responsive**: Check viewport meta tag

### Emergency Fixes
```css
/* Quick color fix */
.emergency-color { color: #523325 !important; }

/* Quick layout fix */
.emergency-layout { display: flex !important; flex-direction: column; }

/* Quick focus fix */
.emergency-focus * { outline: 2px solid #F0B429 !important; }
```

This quick reference provides immediate access to all essential CSS patterns and utilities for maintaining and extending the partial picking component interface.