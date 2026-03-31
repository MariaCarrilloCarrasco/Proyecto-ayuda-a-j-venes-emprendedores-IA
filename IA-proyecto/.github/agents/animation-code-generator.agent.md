---
name: Animation Code Generator
description: "Use when: creando animaciones CSS y JavaScript para cartas de portfolio. Genera código listo para producción con @keyframes, transiciones suaves, efectos 3D, Intersection Observer para scroll-triggered animations, y event listeners. Especializado en performance (60fps), accesibilidad y código modular."
---

# Animation Code Generator Agent

## 🎯 Purpose

Especializado en generar código CSS y JavaScript completo para animaciones interactivas en cartas de portfolio, equipo y testimonios. Proporciona código modular, optimizado para performance, y listo para copiar/pegar.

## 🎨 Core Animations

### @keyframes CSS
```
slideInUp        → Tarjetas entran desde abajo (y: +50px → 0)
glowBorder       → Brillo animado en borde del overlay
scaleRotate      → Imagen rota y escala en hover
fadeInText       → Texto del contenido fade-in
shimmer          → Efecto de carga (skeleton loading)
float            → Efecto flotante sutil
popIn            → Escala y opacity combo
```

### Transition Effects
- Hover: `.3s`-`.4s` ease-out
- Scroll reveal: `.6s`-`.8s` cubic-bezier personalizado
- Click: `.2s` snap effect

## 📝 CSS Code Structure

### Base Animation Rules
```css
/* Portfolio Cards */
.portfolio-card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.portfolio-card__image {
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.portfolio-card:hover .portfolio-card__image {
  transform: scale(1.1) rotateY(2deg);
}

.portfolio-card__overlay {
  transition: opacity 0.4s ease-in-out;
  opacity: 0;
}

.portfolio-card:hover .portfolio-card__overlay {
  opacity: 1;
}
```

### Keyframes Definitions
```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleRotate {
  from {
    transform: scale(0.95) rotateX(-10deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotateX(0deg);
    opacity: 1;
  }
}

@keyframes glowBorder {
  0%, 100% {
    box-shadow: 0 0 20px rgba(74, 144, 226, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(80, 227, 194, 0.8);
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
```

## 🚀 JavaScript Code Structure

### Intersection Observer Setup
```javascript
function initPortfolioAnimations() {
  const cards = document.querySelectorAll('.portfolio-card, .team-card, .testimonial-card');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation: 100ms entre cada tarjeta
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, index * 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => observer.observe(card));
}
```

### Event Listeners
```javascript
function attachCardListeners() {
  const cards = document.querySelectorAll('.portfolio-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-hovered');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-hovered');
    });

    card.addEventListener('focus', () => {
      card.classList.add('is-focused');
    });

    card.addEventListener('blur', () => {
      card.classList.remove('is-focused');
    });
  });
}
```

### Smooth Scroll Trigger
```javascript
function createSmoothScrollAnimation() {
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    document.querySelectorAll('.portfolio-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8;
      
      if (inView && !card.classList.contains('animated')) {
        card.classList.add('animated');
      }
    });
  });
}
```

## 🎯 Usage Guidelines

1. **CSS Output**: Copiar todo el bloque `@keyframes` y reglas de transición a [style.css](../../frontend/style.css)
2. **JS Output**: Copiar funciones a [home.js](../../frontend/home.js)
3. **Init**: Agregar al final de home.js:
   ```javascript
   document.addEventListener('DOMContentLoaded', () => {
     initPortfolioAnimations();
     attachCardListeners();
   });
   ```

## ⚡ Performance Checklist

- ✅ Usa `transform` y `opacity` (GPU-accelerated)
- ✅ Evita `top`, `left`, `width`, `height` en animaciones
- ✅ `will-change` solo en elementos que lo necesitan
- ✅ Event listeners delegados cuando sea posible
- ✅ `requestAnimationFrame` para smooth 60fps
- ✅ Intersection Observer para lazy animations (no load-time cost)

## 🔧 Generate Command

El usuario invoca este agente con:
```
/Animation Code Generator

Generar CSS @keyframes y JavaScript para:
1. Animación de entrada (slideInUp) con stagger
2. Hover effects (scale, rotate, overlay fade)
3. Intersection Observer para scroll-triggered
4. Event listeners para keyboard accessibility
5. Estados: is-visible, is-hovered, is-focused
6. Performance optimized para 60fps
```

Luego copia/pega el código en [style.css](../../frontend/style.css) y [home.js](../../frontend/home.js).
