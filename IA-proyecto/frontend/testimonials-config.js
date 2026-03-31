// Testimonials Configuration
// URLs from Unsplash - client profile photos

const testimonials = [
  {
    id: 'cliente-1',
    texto: '"El equipo llevó nuestra marca a un nivel profesional y generó resultados rápidos. Altamente recomendado."',
    autor: 'Cliente A',
    rol: 'CEO, Empresa Fashion',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
    rating: 5,
    empresa: 'Brand Fashion Inc.'
  },
  {
    id: 'cliente-2',
    texto: '"Excelente trabajo en diseño y desarrollo. Cumplieron deadlines y superaron expectativas en cada entrega."',
    autor: 'Client B',
    rol: 'Founder, Tech Startup',
    imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    rating: 5,
    empresa: 'NextGen Solutions'
  },
  {
    id: 'cliente-3',
    texto: '"Profesionales creativos con visión clara. Transformaron nuestras ideas en realidad digital impactante."',
    autor: 'María García',
    rol: 'Marketing Manager, E-commerce',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
    rating: 5,
    empresa: 'Shopping Online Plus'
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = testimonials;
}
