# CSS Implementation Details: Partial Picking Component

**Project**: PK (Partial Picking System)
**Component**: partial-picking.component.css
**Technical Lead**: CSS Architecture Specialist
**Documentation Date**: 2025-09-26

## Technical Architecture Overview

This document provides detailed technical specifications for the refactored partial picking component CSS, including implementation patterns, architectural decisions, and integration guidelines.

## CSS Architecture Patterns

### 1. Component Structure Architecture

#### Layout Hierarchy
```css
.partial-picking-container
├── .header-section
│   ├── .header-row
│   ├── .header-field
│   └── .header-input-group
├── .main-content (CSS Grid)
│   ├── .form-section (Left Column)
│   │   ├── .form-field
│   │   ├── .weight-field
│   │   └── .weight-progress-container
│   └── .table-section (Right Column)
│       ├── .table-container
│       ├── .table-status-tabs
│       └── .data-table
├── .action-buttons
└── .error-message
```

#### CSS Grid Specifications
```css
.main-content {
  display: grid;
  grid-template-columns: minmax(600px, 2fr) minmax(500px, 1.5fr);
  gap: 32px;
  min-height: calc(100vh - 200px);
}
```

**Technical Rationale**:
- `minmax()` ensures minimum usable width while allowing flexibility
- `2fr` vs `1.5fr` creates 57.14% / 42.86% column split
- `calc(100vh - 200px)` accounts for header and padding space

### 2. NWFTH Color System Integration

#### Color Custom Properties
```css
:root {
  /* Brand Colors - RGB Values */
  --color-brand-brown: #523325;
  --color-brand-amber: #F0B429;
  --color-brand-cream: #F5F5DC;

  /* HSL Color System for CSS Functions */
  --color-brand-brown-hsl: 20 50% 25%;
  --color-brand-amber-hsl: 43 87% 56%;
  --color-brand-cream-hsl: 60 56% 91%;
}
```

#### Color Manipulation Functions
```css
/* Color mixing for hover states */
border: 1px solid color-mix(in srgb, var(--color-brand-brown) 20%, transparent 80%);

/* Gradient creation with HSL */
background: linear-gradient(135deg,
  hsl(var(--color-brand-cream-hsl)) 0%,
  color-mix(in srgb, var(--color-brand-cream) 95%, var(--color-brand-amber) 5%) 100%
);
```

**Technical Benefits**:
- `color-mix()` provides precise color blending
- HSL format enables hue rotation and manipulation
- Custom properties allow theme-wide color updates

### 3. Focus System Implementation

#### Global Focus Standards
```css
.partial-picking-container *:focus-visible {
  outline: 2px solid var(--color-brand-amber);
  outline-offset: 2px;
}
```

#### Component-Specific Focus Enhancement
```css
.field-input:focus-visible {
  outline: none;
  border-color: var(--color-brand-amber);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-brand-amber) 25%, transparent 75%);
}
```

**Accessibility Compliance**:
- Meets WCAG 2.1 AA contrast requirements
- `focus-visible` polyfill support for older browsers
- Consistent 2px outline with 2px offset standard

### 4. Responsive Design Strategy

#### Breakpoint System
```css
/* Primary Target: 1280x1080 Desktop Displays */
@media (min-width: 1280px) and (max-width: 1400px) {
  .main-content {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 20px;
  }
}

/* Tablet Fallback: Stacked Layout */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 16px;
  }
}

/* Mobile Emergency Access */
@media (max-width: 768px) {
  .table-header-row,
  .table-data-row {
    grid-template-columns: repeat(6, minmax(80px, 1fr));
    font-size: 12px;
  }
}
```

#### Layout Transformation Logic
1. **Desktop (1280-1400px)**: Optimized 2-column grid with balanced spacing
2. **Tablet (<1024px)**: Single column with maintained component integrity
3. **Mobile (<768px)**: Compressed table layout with reduced font sizes

### 5. Interactive Element Specifications

#### Button Architecture
```css
.lookup-button {
  min-width: 44px;
  min-height: 44px;
  background: linear-gradient(135deg, var(--color-brand-brown) 0%,
    color-mix(in srgb, var(--color-brand-brown) 80%, black 20%) 100%);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 4px color-mix(in srgb, var(--color-brand-brown) 30%, transparent 70%);
}

.lookup-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px color-mix(in srgb, var(--color-brand-brown) 40%, transparent 60%);
}
```

**Interactive Design Principles**:
- 44px minimum touch target for accessibility
- Subtle gradient provides depth perception
- Transform-based hover effects for performance
- Box-shadow progression creates lifting effect

#### Form Field Specifications
```css
.field-input {
  background: white;
  border: 2px solid color-mix(in srgb, var(--color-brand-brown) 30%, transparent 70%);
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 16px;
  min-height: 44px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
```

**Form Design Standards**:
- 16px font size prevents mobile zoom
- 44px minimum height for touch accessibility
- 2px border width for visual clarity
- Consistent border-radius across all inputs

### 6. Weight Field Enhancement

#### Weight Progress Component
```css
.weight-field {
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--color-brand-amber) 15%, var(--color-brand-cream) 85%) 0%,
    var(--color-brand-cream) 100%
  );
  border: 2px solid var(--color-brand-amber);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px color-mix(in srgb, var(--color-brand-amber) 20%, transparent 80%);
}
```

#### Progress Bar Implementation
```css
.weight-progress-fill.in-tolerance {
  background: linear-gradient(90deg, hsl(var(--color-success)) 0%, hsl(var(--color-success)) 100%);
}

.weight-progress-fill.out-of-tolerance {
  background: linear-gradient(90deg, hsl(var(--color-danger)) 0%, hsl(var(--color-danger)) 100%);
}
```

**Weight Validation Features**:
- Visual prominence through enhanced styling
- Real-time tolerance feedback with color coding
- Progress bar with smooth transitions
- Semantic color usage for status indication

### 7. Table System Architecture

#### Data Grid Implementation
```css
.table-header-row,
.table-data-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.table-data-row:hover {
  background: color-mix(in srgb, var(--color-brand-amber) 10%, transparent 90%);
}

.table-data-row.selected-row {
  background: color-mix(in srgb, var(--color-brand-amber) 20%, transparent 80%);
  font-weight: bold;
}
```

**Table Design Features**:
- CSS Grid for precise column alignment
- Hover states for better user interaction
- Selection states with visual feedback
- Responsive column sizing with mobile adaptation

### 8. Animation and Transition System

#### Performance-Optimized Animations
```css
.loading-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Animation Guidelines**:
- Transform-based animations for performance
- Respects user motion preferences
- Linear timing for loading indicators
- Ease timing for interactive elements

### 9. Accessibility Implementation

#### High Contrast Support
```css
@media (prefers-contrast: high) {
  .field-input,
  .header-input {
    border-width: 3px;
  }

  .action-button {
    border-width: 3px;
  }
}
```

#### Screen Reader Considerations
- Semantic HTML structure maintained
- Color information supplemented with text
- Focus management for keyboard navigation
- Proper heading hierarchy preserved

### 10. Browser Compatibility Strategy

#### Modern CSS Feature Usage
```css
/* CSS Grid with fallbacks */
.main-content {
  display: grid; /* Modern browsers */
  display: -ms-grid; /* IE 11 fallback */
}

/* Color functions with fallbacks */
border: 1px solid color-mix(in srgb, var(--color-brand-brown) 20%, transparent 80%);
border: 1px solid rgba(82, 51, 37, 0.2); /* Fallback */
```

#### Feature Detection
- CSS Grid support assumed for target browsers
- Custom properties with fallback values
- Modern color functions with rgba alternatives

## Integration Guidelines

### 1. Theme System Integration

#### Color Token Usage
```css
/* Preferred: Use semantic tokens */
color: var(--color-brand-brown);

/* Avoid: Direct color values */
color: #523325;
```

#### Extending Color System
```css
/* Add new colors to root */
:root {
  --color-brand-new: #HEXVALUE;
  --color-brand-new-hsl: H S% L%;
}
```

### 2. Component Extension Patterns

#### Creating Component Variants
```css
/* Base component */
.field-input {
  /* Base styles */
}

/* Variant extension */
.field-input.weight-variant {
  font-size: 18px;
  font-weight: bold;
}
```

#### Layout Modifications
```css
/* Extending grid layout */
.main-content.three-column {
  grid-template-columns: 1fr 1fr 1fr;
}
```

### 3. Maintenance Best Practices

#### Code Organization
1. Header comments for each major section
2. Logical grouping of related styles
3. Consistent indentation and spacing
4. Clear selector naming conventions

#### Performance Considerations
1. Minimize CSS specificity conflicts
2. Use transform-based animations
3. Leverage CSS custom properties efficiently
4. Implement critical CSS extraction

#### Testing Requirements
1. Cross-browser compatibility testing
2. Responsive design validation
3. Accessibility audit compliance
4. Performance benchmark verification

## File Structure Dependencies

```
/apps/frontend/src/
├── app/features/picking/partial-picking/
│   └── partial-picking.component.css (Primary implementation)
├── styles/
│   ├── globals.css (Base system integration)
│   ├── themes/nwfth-theme.css (Color system)
│   └── components/ (Shared component styles)
```

## Build Process Integration

### PostCSS Configuration
```json
{
  "plugins": {
    "autoprefixer": {},
    "cssnano": {
      "preset": ["default", {
        "discardComments": { "removeAll": false }
      }]
    }
  }
}
```

### Angular Integration
- Component styles encapsulated with ViewEncapsulation
- Global theme imports through angular.json configuration
- CSS custom properties cascade through component tree

## Performance Metrics

### CSS Performance Targets
- **File Size**: <25KB minified
- **Render Time**: <16ms initial paint
- **Reflow Events**: Minimal layout thrashing
- **Memory Usage**: Efficient custom property usage

### Optimization Techniques
1. CSS containment for isolated components
2. Transform-based animations
3. Efficient selector usage
4. Minimized specificity conflicts

---

This technical specification provides the foundation for maintaining and extending the partial picking component CSS architecture while ensuring consistency with the broader NWFTH design system.