// ─────────────────────────────────────────
//  OHM Electromecánica — Contenido del sitio
//  Editá este archivo para actualizar textos
// ─────────────────────────────────────────

export const site = {
  name: 'OHM Electromecánica',
  tagline: 'Ingeniería de Alta Tensión',
  description:
    'Soluciones en instalaciones eléctricas industriales y comerciales para las empresas más exigentes de la región. Precisión, seguridad y tecnología de vanguardia.',
  location: 'Corrientes, Argentina',
  year: 2026,
  whatsapp: '+549XXXXXXXXXX',   // ← reemplazar
  email: 'ohm.ingelectromecanica@gmail.com', // ← reemplazar
  googleForm: 'https://forms.gle/2ToMMXqacap8Y9Zc8',   // ← reemplazar con el link real
};

export const stats = [
  { value: '10+',  label: 'Años de experiencia' },
  { value: '50+',  label: 'Proyectos ejecutados' },
  { value: '100%', label: 'Cumplimiento normativo' },
];

export const about = {
  sectionTag: 'Sobre OHM',
  title: 'Ingeniería con',
  titleEm: 'precisión',
  titleEnd: 'industrial',
  paragraphs: [
    'OHM Electromecánica es una empresa especializada en el diseño, ejecución y puesta en marcha de instalaciones eléctricas de mediana y alta complejidad.',
    'Trabajamos con clientes corporativos e industriales en la capital y en toda la provincia de Corrientes, brindando soluciones que combinan rigor técnico, materiales de primera línea y cumplimiento estricto de normativa vigente.',
  ],
  coverage: [
    'Corrientes Capital',
    'Interior de la provincia',
    'Proyectos de gran envergadura a convenir',
  ],
  certifications: [
    'Instalaciones bajo normas AEA 90364',
    'Habilitados ante DPEC',
  ],
};

export const services = [
  {
    num: '01',
    name: 'Instalaciones Eléctricas Industriales',
    desc: 'Diseño y ejecución de sistemas eléctricos para plantas industriales, galpones y complejos de producción de cualquier escala.',
    items: ['Media y baja tensión', 'Canalizaciones y bandejas', 'Puesta a tierra'],
  },
  {
    num: '02',
    name: 'Tableros Eléctricos',
    desc: 'Fabricación, montaje y puesta en servicio de tableros de distribución, comando y control a medida de cada proyecto.',
    items: ['Tableros de distribución', 'Tableros de comando', 'Automatización industrial'],
  },
  {
    num: '03',
    name: 'Instalaciones Eléctricas Comerciales',
    desc: 'Soluciones completas para locales comerciales, oficinas, shoppings y edificios corporativos con los más altos estándares.',
    items: ['Iluminación eficiente', 'Corrientes débiles', 'Instalaciones normalizadas'],
  },
];

export const portfolio = [
  { title: 'Planta Industrial – Corrientes', category: 'Instalación eléctrica completa', year: 2024, image: '/images/portfolio/parque.webp', featured: true },
  { title: 'Supermercado TATÚ - Corrientes',             category: 'Fabricación a medida',           year: 2024, image: '/images/portfolio/tatu.webp' },
  // { title: 'Local Comercial',                category: 'Instalación comercial',           year: 2023, image: '/images/portfolio/proyecto-3.jpg' },
  // { title: 'Galpón Industrial',              category: 'Interior Corrientes',             year: 2023, image: '/images/portfolio/proyecto-4.jpg' },
  // { title: 'Edificio Corporativo',           category: 'Corrientes Capital',              year: 2023, image: '/images/portfolio/proyecto-5.jpg' },
];

export const clients = [
  { name: 'Cosme', logo: '/images/clients/cosme-img.webp' },
  { name: 'Electropunto', logo: '/images/clients/electropunto-img.webp' },
  { name: 'Empresa / Organismo', logo: '' },
  { name: 'Empresa / Organismo', logo: '' },
  { name: 'Empresa / Organismo', logo: '' },
  { name: 'Empresa / Organismo', logo: '' },
  { name: 'Empresa / Organismo', logo: '' },
  { name: 'Empresa / Organismo', logo: '' },
  // Agregar más clientes acá (máx recomendado: 12)
];

export const staff = [
  { photo: '/images/staff/staff-1.webp' },
  { photo: '/images/staff/staff-2.webp' },
  { photo: '/images/staff/staff-3.webp' },
  { photo: '/images/staff/staff-4.webp' },
];

export const contact = {
  location:       'Corrientes, Argentina',
  coverage:       'Capital e interior de Corrientes',
  schedule:       'Lun–Vie, 8:00 – 18:00 hs',
  specialization: 'Industrial · Comercial · Tableros',
};
