// Portfolio Projects Configuration
// URLs from Unsplash - Replace with your own project images

const portfolioProjects = [
  {
    id: 'proyecto-1',
    titulo: 'Landing Page Responsive - Marca de Moda',
    descripcion: 'Diseño y desarrollo de landing page responsive para marca de moda con optimización SEO.',
    imagen: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    enlace: '#proyecto-1',
    color: 'var(--primary-color)'
  },
  {
    id: 'proyecto-2',
    titulo: 'Identidad Visual Completa y Manual de Marca',
    descripcion: 'Desarrollo de identidad visual completa incluyendo logo, paleta de colores y guía de estilo.',
    imagen: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80&fm=webp',
    tecnologias: ['Branding', 'Diseño Gráfico', 'Manual de Marca'],
    enlace: '#proyecto-2',
    color: 'var(--secondary-color)'
  },
  {
    id: 'proyecto-3',
    titulo: 'Plataforma Web E-commerce con UX Optimizada',
    descripcion: 'Plataforma de e-commerce con interfaz intuitiva, carrito de compras y pasarela de pago segura.',
    imagen: 'https://images.unsplash.com/photo-1460925895917-aaf19ac89c19?w=600&h=400&fit=crop',
    tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'UX/UI'],
    enlace: '#proyecto-3',
    color: 'var(--primary-color)'
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioProjects;
}
