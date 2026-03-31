---
applyTo: "frontend/**/*.html"
name: portfolio-cards
description: "Convenciones y guía de componentes para cartas de portfolio, equipo y testimonios. Seguir estructura BEM, paleta de colores CSS variables, tipografía consistente y patrones de accesibilidad."
---

# Portfolio Cards Instructions

## 🎨 Design System

### Color Palette (CSS Variables)
```css
--primary-color: #4a90e2        /* Azul claro - botones, links */
--secondary-color: #50e3c2      /* Turquesa - acentos */
--dark-color: #333              /* Negro - texto principal */
--light-color: #f8f9fa          /* Blanco gris - fondos */
--text-color: #333              /* Gris oscuro - párrafos */
--text-light: #666              /* Gris - texto secundario */
--border-color: #ddd            /* Gris claro - bordes */
--shadow: 0 2px 10px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.2)
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.15)

/* Animation Variables */
--transition-duration: 0.3s
--transition-easing: cubic-bezier(0.34, 1.56, 0.64, 1)
--perspective: 1000px
```

### Typography
```css
body          → Segoe UI, 16px / 1.6 line-height
h1            → 2.5rem / 700 weight
h2            → 2rem / 600 weight
h3            → 1.5rem / 600 weight (cards)
p             → 1rem / 400 weight
small/tag     → 0.875rem / 500 weight
```

### Spacing Scale (8px grid)
```css
--gap-xs:  0.5rem  (4px)
--gap-sm:  1rem    (8px)
--gap-md:  1.5rem  (12px)
--gap-lg:  2rem    (16px)
--gap-xl:  3rem    (24px)
--gap-2xl: 4rem    (32px)
```

## 📐 Component Naming (BEM)

### Portfolio Card
```
.portfolio-card                  /* Block */
├── .portfolio-card__figure      /* Image container */
├── .portfolio-card__image       /* Image element */
├── .portfolio-card__overlay     /* Hover overlay */
├── .portfolio-card__content     /* Content wrapper */
├── .portfolio-card__title       /* h3 */
├── .portfolio-card__description /* p */
├── .portfolio-card__tags        /* Container */
└── .portfolio-card__link        /* CTA button/link */

/* Modifiers */
.portfolio-card--featured        /* Highlight specific card */
.portfolio-card--loading         /* Skeleton state */
```

### Team Card
```
.team-card                       /* Block */
├── .team-card__avatar           /* Image circular */
├── .team-card__content          /* Content wrapper */
├── .team-card__name             /* h3 */
├── .team-card__role             /* p */
├── .team-card__bio              /* Description */
└── .team-card__socials          /* Social links */
```

### Testimonial Card
```
.testimonial-card                /* Block */
├── .testimonial-card__header    /* Avatar + meta */
├── .testimonial-card__avatar    /* Image circular */
├── .testimonial-card__meta      /* Name + role */
├── .testimonial-card__author    /* Name */
├── .testimonial-card__role      /* Title/company */
├── .testimonial-card__text      /* Quote */
└── .testimonial-card__rating    /* Stars */
```

### Tag Component
```
.tag                             /* Standalone tag */
├── .tag--primary                /* Blue background */
├── .tag--secondary              /* Turquoise background */
└── .tag--outline                /* Border only */
```

## 📋 HTML Patterns

### Image Best Practices
```html
<!-- Lazy loading for performance -->
<img src="url" alt="descriptive text" loading="lazy" width="600" height="400" />

<!-- Responsive images with srcset -->
<img 
  src="project-600.jpg"
  srcset="project-300.jpg 300w, project-600.jpg 600w, project-1200.jpg 1200w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Proyecto"
  loading="lazy"
/>
```

### Accessibility
```html
<!-- Links with aria-label if text is missing -->
<a href="#" aria-label="Ver proyecto completo" class="portfolio-card__link">
  Ver proyecto →
</a>

<!-- Images with meaningful alt text -->
<img alt="Landing page responsive para marca de moda con colores vibrantes" src="..." />

<!-- Semantic structure -->
<article class="portfolio-card">          <!-- Use <article>, not <div> -->
  <figure class="portfolio-card__figure"> <!-- Use <figure> for images with captions -->
    <img ... />
    <figcaption>Optional caption</figcaption>
  </figure>
</article>
```

## 🎯 Responsive Rules

### Breakpoints
```css
/* Mobile First */
.portfolio-card { /* 1 column */ }

@media (min-width: 640px) {
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .portfolio-grid { grid-template-columns: repeat(3, 1fr); }
}
```

### Image Sizing
- **Portfolio**: 600x400px (native), scale to 100% on mobile, 50% tablet, 33% desktop
- **Team**: 300x300px (circular avatars), 100% on mobile, adapt tablets
- **Testimonials**: 80x80px (avatar), fixed circular, adapt on mobile

## 🎬 Animation States

### CSS Classes for JS
```css
.is-visible      /* Added when card enters viewport */
.is-hovered      /* Added on mouse-enter */
.is-focused      /* Added on keyboard focus */
.is-loading      /* Skeleton state before image loads */
.animated        /* Persistent marker after animation */
```

### Usage in JS
```javascript
card.classList.add('is-visible');    // Trigger animation
card.classList.add('is-hovered');    // On hover
card.classList.add('is-focused');    // On keyboard navigate
```

## ✅ Quality Checklist

- [ ] HTML semántico (✋ no divs innecesarios)
- [ ] BEM naming consistente
- [ ] ALT text en todas las imágenes (descriptivo, no "image 1")
- [ ] `loading="lazy"` en images
- [ ] `aria-label` en links/botones sin texto visible
- [ ] Responsive: mobile, tablet, desktop probado
- [ ] Contraste de color ≥ 4.5:1 (WCAG AA)
- [ ] Keyboard navigation funcionando (Tab, Enter)
- [ ] Animaciones suaves (60fps, DevTools Performance)
- [ ] Imágenes optimizadas (no >200KB cada una)
