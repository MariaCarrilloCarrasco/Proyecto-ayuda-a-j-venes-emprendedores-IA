// Team Members Configuration
// URLs from Unsplash - Replace with your team photos

const teamMembers = [
  {
    id: 'laura',
    nombre: 'Laura',
    rol: 'Directora Creativa',
    descripcion: 'Especializada en estrategia visual y branding. 8+ años de experiencia liderando proyectos creativos.',
    imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    redes: [
      { nombre: 'LinkedIn', url: 'https://linkedin.com', icono: 'in' },
      { nombre: 'Twitter', url: 'https://twitter.com', icono: 'tw' }
    ]
  },
  {
    id: 'marcos',
    nombre: 'Marcos',
    rol: 'Desarrollador Frontend',
    descripcion: 'Experto en desarrollo web moderno. Apasionado por crear experiencias digitales intuitivas.',
    imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    redes: [
      { nombre: 'GitHub', url: 'https://github.com', icono: 'gh' },
      { nombre: 'LinkedIn', url: 'https://linkedin.com', icono: 'in' }
    ]
  },
  {
    id: 'elena',
    nombre: 'Elena',
    rol: 'Estratega de Marca',
    descripcion: 'Especialista en posicionamiento de marca y marketing digital. Resultados medibles garantizados.',
    imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    redes: [
      { nombre: 'LinkedIn', url: 'https://linkedin.com', icono: 'in' },
      { nombre: 'Twitter', url: 'https://twitter.com', icono: 'tw' }
    ]
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = teamMembers;
}
