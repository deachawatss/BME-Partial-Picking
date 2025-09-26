# CSS Maintenance Guide: Partial Picking Component

**Project**: PK (Partial Picking System)
**Target Audience**: Frontend Developers, UI Maintainers
**Last Updated**: 2025-09-26
**Version**: 1.0

## Quick Reference

### 🎨 Color System
```css
/* NWFTH Brand Colors */
--color-brand-brown: #523325    /* Primary brand */
--color-brand-amber: #F0B429    /* Accent/highlight */
--color-brand-cream: #F5F5DC    /* Background/text */
```

### 📏 Key Breakpoints
```css
/* Desktop Warehouse Displays */
@media (min-width: 1280px) and (max-width: 1400px)

/* Tablet Fallback */
@media (max-width: 1024px)

/* Mobile Emergency */
@media (max-width: 768px)
```

### 🔧 Critical Classes
```css
.partial-picking-container    /* Main wrapper */
.main-content                 /* CSS Grid container */
.form-section                 /* Left column forms */
.table-section               /* Right column table */
.weight-field                /* Enhanced weight input */
```

## Daily Maintenance Tasks

### 1. Color Updates

#### Updating Brand Colors
When NWFTH brand guidelines change:

```css
/* Update in one place - cascades throughout */
:root {
  --color-brand-brown: #NEW_COLOR;
  --color-brand-amber: #NEW_COLOR;
  --color-brand-cream: #NEW_COLOR;

  /* Also update HSL equivalents */
  --color-brand-brown-hsl: H S% L%;
  --color-brand-amber-hsl: H S% L%;
  --color-brand-cream-hsl: H S% L%;
}
```

#### Adding New Status Colors
For new operational states:

```css
:root {
  /* Add semantic color */
  --color-status-new: H S% L%;
  --color-status-new-foreground: H S% L%;
  --color-status-new-bg: H S% L%;
}

/* Create utility classes */
.text-status-new { color: hsl(var(--color-status-new)); }
.bg-status-new { background-color: hsl(var(--color-status-new-bg)); }
```

### 2. Layout Adjustments

#### Modifying Grid Columns
For different content ratios:

```css
.main-content {
  /* Current: 57.14% / 42.86% split */
  grid-template-columns: minmax(600px, 2fr) minmax(500px, 1.5fr);

  /* Equal split option */
  grid-template-columns: 1fr 1fr;

  /* Form-heavy option */
  grid-template-columns: minmax(700px, 3fr) minmax(400px, 1fr);
}
```

#### Adding New Sections
For additional content areas:

```css
.main-content {
  /* Three-column layout */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "form table sidebar"
    "actions actions actions";
}

.form-section { grid-area: form; }
.table-section { grid-area: table; }
.sidebar-section { grid-area: sidebar; }
.action-buttons { grid-area: actions; }
```

### 3. Component Modifications

#### Adding New Form Fields
Follow existing pattern:

```css
.new-field {
  /* Copy from .form-field */
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 48px;
}

.new-field-input {
  /* Copy from .field-input */
  background: white;
  border: 2px solid color-mix(in srgb, var(--color-brand-brown) 30%, transparent 70%);
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 16px;
  min-height: 44px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.new-field-input:focus-visible {
  /* Copy focus styles */
  outline: none;
  border-color: var(--color-brand-amber);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-brand-amber) 25%, transparent 75%);
}
```

#### Creating Button Variants
For new action types:

```css
.action-button.info-action {
  border-color: hsl(var(--color-info));
  color: hsl(var(--color-info-foreground));
}

.action-button.info-action:hover:not(:disabled) {
  background: hsl(var(--color-info));
  color: white;
}
```

## Responsive Design Guidelines

### 1. Breakpoint Management

#### Testing Different Resolutions
```bash
# Chrome DevTools
1. Open DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Set custom resolution: 1280x1080
4. Test at 75%, 100%, 125% zoom levels
```

#### Adding New Breakpoints
```css
/* Follow existing pattern */
@media (min-width: XXXpx) and (max-width: XXXpx) {
  .partial-picking-container {
    padding: Xpx;
  }

  .main-content {
    grid-template-columns: /* adjusted layout */;
    gap: Xpx;
    padding: Xpx;
  }
}
```

### 2. Mobile Optimization

#### When Mobile Changes Are Needed
- Emergency access scenarios
- Field technician requirements
- Temporary warehouse tablet usage

#### Mobile-First Modifications
```css
/* Start mobile, enhance for desktop */
.responsive-component {
  /* Mobile base */
  padding: 8px;
  font-size: 14px;
}

@media (min-width: 768px) {
  .responsive-component {
    /* Tablet enhancement */
    padding: 16px;
    font-size: 16px;
  }
}

@media (min-width: 1280px) {
  .responsive-component {
    /* Desktop optimization */
    padding: 24px;
    font-size: 18px;
  }
}
```

## Accessibility Maintenance

### 1. Focus Management

#### Testing Focus Indicators
```bash
# Keyboard navigation test
1. Tab through all interactive elements
2. Verify visible focus indicators
3. Check focus order matches visual layout
4. Test with screen reader
```

#### Updating Focus Styles
```css
/* Global focus - update cautiously */
.partial-picking-container *:focus-visible {
  outline: 2px solid var(--color-brand-amber);
  outline-offset: 2px;
}

/* Component-specific focus */
.special-input:focus-visible {
  outline: 2px solid var(--color-brand-brown);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-brand-brown) 25%, transparent 75%);
}
```

### 2. Color Contrast Validation

#### Testing Contrast Ratios
```bash
# Use WebAIM Contrast Checker
https://webaim.org/resources/contrastchecker/

# Minimum requirements:
- Normal text: 4.5:1
- Large text: 3:1
- Interactive elements: 4.5:1
```

#### High Contrast Mode Support
```css
@media (prefers-contrast: high) {
  .field-input,
  .header-input,
  .action-button {
    border-width: 3px; /* Increase visibility */
  }

  /* Ensure sufficient contrast */
  .subtle-element {
    color: var(--color-brand-brown);
    background: var(--color-brand-cream);
  }
}
```

### 3. Reduced Motion Support

#### Animation Guidelines
```css
/* Always include reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animated-element,
  .loading-spinner,
  .hover-transform {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Performance Optimization

### 1. CSS Performance Monitoring

#### Key Metrics to Track
- **File Size**: Keep under 25KB minified
- **Selector Count**: Minimize complex selectors
- **Reflow Events**: Test with Chrome DevTools
- **Paint Time**: Monitor in Performance tab

#### Performance Testing
```bash
# Chrome DevTools Performance Analysis
1. Open DevTools → Performance tab
2. Start recording
3. Interact with component
4. Stop recording
5. Analyze paint and layout events
```

### 2. Optimization Techniques

#### CSS Containment
```css
.isolated-component {
  contain: layout style paint;
}
```

#### Transform-Based Animations
```css
/* Prefer transform over position changes */
.hover-element:hover {
  transform: translateY(-2px); /* Good */
  /* top: -2px; */ /* Avoid - causes reflow */
}
```

#### Efficient Color Mixing
```css
/* Cache complex color calculations */
:root {
  --color-hover-brown: color-mix(in srgb, var(--color-brand-brown) 80%, black 20%);
}

.button {
  background: var(--color-hover-brown);
}
```

## Debugging Common Issues

### 1. Layout Problems

#### CSS Grid Issues
```css
/* Debug grid layout */
.main-content {
  /* Temporarily add for debugging */
  grid-template-columns: [start] minmax(600px, 2fr) [middle] minmax(500px, 1.5fr) [end];
  gap: 32px;

  /* Debug visualization */
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 50px,
    rgba(255,0,0,0.1) 50px,
    rgba(255,0,0,0.1) 51px
  );
}
```

#### Common Grid Fixes
```css
/* Content overflow */
.form-section {
  min-width: 0; /* Allows content to shrink */
  overflow: hidden; /* Prevents overflow */
}

/* Alignment issues */
.table-section {
  align-self: start; /* Prevents stretching */
  justify-self: stretch; /* Fills width */
}
```

### 2. Color System Issues

#### Color Not Updating
```css
/* Check custom property inheritance */
.component {
  /* Debug: Show computed values */
  background: var(--color-brand-brown, red); /* Red = property missing */
}

/* Verify cascade order */
:root { --color-brand-brown: #523325; } /* Global */
.component { --color-brand-brown: #OVERRIDE; } /* Local override */
```

#### Color Mixing Problems
```css
/* Fallback for unsupported color-mix */
.element {
  border: 1px solid rgba(82, 51, 37, 0.2); /* Fallback */
  border: 1px solid color-mix(in srgb, var(--color-brand-brown) 20%, transparent 80%); /* Modern */
}
```

### 3. Responsive Issues

#### Content Not Adapting
```css
/* Check media query syntax */
@media (min-width: 1280px) and (max-width: 1400px) {
  /* Styles only apply in this range */
}

/* Test with browser tools */
@media (min-width: 1280px) {
  body::before {
    content: "Desktop view active";
    position: fixed;
    top: 0;
    left: 0;
    background: red;
    color: white;
    padding: 5px;
    z-index: 9999;
  }
}
```

## Code Quality Standards

### 1. CSS Formatting

#### Consistent Style Guide
```css
/* Good formatting example */
.component-name {
  /* Group related properties */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Size and spacing */
  width: 100%;
  height: auto;
  padding: 16px 24px;
  margin: 12px 0;
  gap: 16px;

  /* Visual styling */
  background: var(--color-brand-cream);
  border: 2px solid var(--color-brand-brown);
  border-radius: 8px;
  color: var(--color-brand-brown);

  /* Typography */
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;

  /* Interactions */
  cursor: pointer;
  transition: all 0.2s ease;
}

.component-name:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(82, 51, 37, 0.1);
}
```

### 2. Documentation Standards

#### Comment Structure
```css
/* =================================================================== */
/* Section Name - Brief Description                                   */
/* =================================================================== */

/* Subsection comment */
.component {
  /* Inline explanation for complex properties */
  property: value; /* Why this value is used */
}
```

### 3. Naming Conventions

#### Class Naming Patterns
```css
/* Component: partial-picking */
.partial-picking-container     /* Root container */
.partial-picking-section      /* Major sections */
.partial-picking-field        /* Form elements */
.partial-picking-button       /* Interactive elements */

/* State classes */
.is-active
.is-disabled
.is-loading
.has-error

/* Modifier classes */
.size-small
.type-primary
.variant-danger
```

## Testing Checklist

### 1. Visual Testing
- [ ] Component renders correctly at 1280x1080
- [ ] All colors match NWFTH brand guidelines
- [ ] Interactive states work (hover, focus, active)
- [ ] Typography is consistent and readable
- [ ] Spacing and alignment are correct

### 2. Responsive Testing
- [ ] Layout adapts at breakpoints
- [ ] Content remains usable on mobile
- [ ] No horizontal scrolling
- [ ] Text remains readable at all sizes

### 3. Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Focus indicators are visible
- [ ] Color contrast meets requirements
- [ ] Screen reader compatibility
- [ ] Reduced motion preferences respected

### 4. Performance Testing
- [ ] CSS file size under 25KB
- [ ] No layout thrashing during interactions
- [ ] Animations run at 60fps
- [ ] No console warnings or errors

### 5. Browser Compatibility
- [ ] Chrome 118+ (primary)
- [ ] Firefox 119+
- [ ] Safari 17+
- [ ] Edge 118+

## Emergency Fixes

### 1. Quick Color Fix
```css
/* Temporary color override - document for later cleanup */
.emergency-fix {
  color: #523325 !important;
  background: #F5F5DC !important;
}
```

### 2. Layout Emergency
```css
/* Fallback to flexbox if grid fails */
.main-content {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.form-section { flex: 2; }
.table-section { flex: 1.5; }

@supports (display: grid) {
  /* Restore grid for modern browsers */
  .main-content {
    display: grid;
    grid-template-columns: minmax(600px, 2fr) minmax(500px, 1.5fr);
  }

  .form-section,
  .table-section {
    flex: none;
  }
}
```

### 3. Accessibility Quick Fix
```css
/* Emergency focus indicator */
.no-focus-visible * {
  outline: 2px solid #F0B429 !important;
  outline-offset: 2px !important;
}
```

## Support and Documentation

### Internal Resources
- **CSS Architecture Guide**: `/docs/css-architecture.md`
- **NWFTH Design System**: `/docs/design-system.md`
- **Component Library**: `/src/styles/components/`

### External References
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

### Issue Reporting
For CSS-related issues:
1. Check browser console for errors
2. Verify CSS custom properties are defined
3. Test in different browsers
4. Document steps to reproduce
5. Include screenshots if visual issue

---

This maintenance guide ensures consistent, accessible, and performant CSS development for the partial picking component and related warehouse system interfaces.