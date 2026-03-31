function CardProyecto({ titulo, descripcion, enlace }) {
    const card = document.createElement("article");
    card.className = "card-proyecto";

    const h3 = document.createElement("h3");
    h3.textContent = titulo;

    const p = document.createElement("p");
    p.textContent = descripcion;

    card.appendChild(h3);
    card.appendChild(p);

    if (enlace) {
        const a = document.createElement("a");
        a.href = enlace;
        a.textContent = "Ver más";
        a.className = "card-proyecto-link";
        card.appendChild(a);
    }

    return card;
}

const container = document.getElementById("servicios-container");

container.appendChild(
    CardProyecto({
        titulo: "Branding Estratégico",
        descripcion: "Creamos identidades visuales coherentes y memorables.",
        enlace: "branding.html",
    })
);
container.appendChild(
    CardProyecto({
        titulo: "Diseño Gráfico Creativo",
        descripcion: "Diseñamos materiales visuales impactantes y efectivos.",
        enlace: "diseno-grafico.html",
    })
);
container.appendChild(
    CardProyecto({
        titulo: "Desarrollo Web Moderno",
        descripcion: "Creamos sitios web funcionales y atractivos.",
        enlace: "desarrollo-web.html",
    })
);

/* contacto */
const form = document.getElementById('contactForm');
const respuestaDiv = document.getElementById('respuesta');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && asunto && mensaje) {
        respuestaDiv.classList.remove('error');
        respuestaDiv.classList.add('exito');
        respuestaDiv.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
        respuestaDiv.style.display = 'block';
        form.reset();

        setTimeout(() => {
            respuestaDiv.style.display = 'none';
        }, 5000);
    } else {
        respuestaDiv.classList.remove('exito');
        respuestaDiv.classList.add('error');
        respuestaDiv.textContent = 'Por favor, completa todos los campos requeridos.';
        respuestaDiv.style.display = 'block';
    }
});

// ====== PORTFOLIO ANIMATIONS ======
const AnimationController = {
    scrollTimeout: null,
    scrollListener: null,

    initPortfolioAnimations() {
        const cardSelectors = [
            '.portfolio-card',
            '.team-card',
            '.testimonial-card'
        ];

        const allCards = document.querySelectorAll(cardSelectors.join(', '));

        if (!allCards.length) return;

        let staggerIndex = 0;
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    staggerIndex++;
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, (staggerIndex - 1) * 100);

                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        allCards.forEach(card => {
            observer.observe(card);
        });

        window.cardObserver = observer;
    },

    attachCardListeners() {
        const cardSelectors = [
            '.portfolio-card',
            '.team-card',
            '.testimonial-card'
        ];

        const allCards = document.querySelectorAll(cardSelectors.join(', '));

        allCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('is-hovered');
            });

            card.addEventListener('mouseleave', () => {
                card.classList.remove('is-hovered');
            });

            card.addEventListener('focus', (e) => {
                if (e.target === card || card.contains(e.target)) {
                    card.classList.add('is-focused');
                }
            }, true);

            card.addEventListener('blur', (e) => {
                if (e.target === card || card.contains(e.target)) {
                    card.classList.remove('is-focused');
                }
            }, true);
        });
    },

    debounceScroll(callback, delay = 16) {
        return function() {
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                callback.call(this);
            }, delay);
        };
    },

    smoothScroll() {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const elements = document.querySelectorAll('[data-parallax]');

                    elements.forEach(el => {
                        const speed = el.dataset.parallax || 0.5;
                        el.style.transform = `translateY(${scrollY * speed}px)`;
                    });

                    ticking = false;
                });

                ticking = true;
            }
        };

        this.scrollListener = this.debounceScroll(onScroll, 16).bind(this);
        window.addEventListener('scroll', this.scrollListener, false);
    },

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initPortfolioAnimations();
                this.attachCardListeners();
                this.smoothScroll();
            });
        } else {
            this.initPortfolioAnimations();
            this.attachCardListeners();
            this.smoothScroll();
        }
    }
};

// Initialize animations
AnimationController.init();