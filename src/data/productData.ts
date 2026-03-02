export interface ProductData {
  id: string;
  category: 'aluminum' | 'generators' | 'elevators';
  typology: string;
  title: string;
  brand: string;
  description: string;
  heroImage: string;
  gallery: string[];
  features: string[];
  specs: Record<string, string>;
  performance?: {
    thermal?: string;
    acoustic?: string;
    structural?: string;
    power?: string;
    mobility?: string;
  };
  variants?: {
    label: string;
    options: { name: string; value: string; preview?: string; image?: string }[];
  }[];
  comparison?: {
    headers: string[];
    rows: { name: string; values: string[] }[];
  };
  brochures: {
    label: string;
    size: string;
    url: string;
    type: 'pdf' | 'dwg' | 'spec';
  }[];
}

export const PRODUCTS: Record<string, ProductData> = {
  'pvc-profiles': {
    id: 'pvc-profiles',
    category: 'aluminum',
    typology: 'PVC Systems',
    title: 'High-Performance PVC Profiles',
    brand: 'G-Tech',
    description: 'Durable, weather-resistant polymer profiles ideal for Ethiopia\'s diverse climate zones. Engineered for superior thermal insulation and low maintenance.',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000'
    ],
    features: [
      'UV Resistance',
      'Multi-Chambered Design',
      'Eco-Friendly Lead-Free PVC',
      'High Impact Strength',
      'Excellent Sound Insulation'
    ],
    specs: {
      'Profile Width': '60-70mm',
      'Chambers': '3-5 Chambers',
      'Glass Range': '4-32mm',
      'U-Value': '1.3 - 1.5 W/m²K'
    },
    brochures: []
  },
  'lorenzoline-70t': {
    id: 'lorenzoline-70t',
    category: 'aluminum',
    typology: 'Windows & Doors',
    title: '70T Thermal Series',
    brand: 'Lorenzoline',
    description: 'High-performance thermal break aluminum system designed for modern architectural requirements. Offers superior insulation and structural integrity with a sleek design.',
    heroImage: '/pictures-from-lorenzoline/Lorenzo_Products/windows/lorenzoline-70t-70th-yeni.jpg',
    gallery: [
      '/pictures-from-lorenzoline/Lorenzo_Products/windows/lorenzoline-70t-70th-yeni.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/project-support/pencere-sistemleri-22-400x420.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/sistemler/pencere-sistemleri-22-400x420.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/windows/70T-pencere-sistemi.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/windows/70T-pencere-sistemi-1.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/windows/77BF-katlanir-kapi-sistemi.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/windows/84T-pencere-sistemi.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/windows/90T-pencere-sistemi.jpg'
    ],
    features: [
      'Polyamide Thermal Break',
      'Multi-point Locking System',
      'EPDM Gasket Sealing',
      'Hidden Drainage System',
      'Euro-Groove Compatibility'
    ],
    specs: {
      'Frame Depth': '70mm',
      'Glass Thickness': '24-44mm',
      'Thermal Insulation (Uf)': '2.1 W/m²K',
      'Air Permeability': 'Class 4 (EN 12207)',
      'Water Tightness': 'Class 9A (EN 12208)',
      'Wind Resistance': 'Class C5 (EN 12210)'
    },
    performance: {
      thermal: 'Uf = 2.1 W/m²K (High Energy Efficiency)',
      acoustic: 'Rw = 45 dB (Superior Soundproofing)',
      structural: 'Class C5 Wind Load Resistance'
    },
    variants: [
      {
        label: 'Finish Options',
        options: [
          { name: 'Anodized Silver', value: '#C0C0C0' },
          { name: 'Anthracite Gray', value: '#363D44' },
          { name: 'Bronze', value: '#614E3F' }
        ]
      }
    ],
    comparison: {
      headers: ['Feature', '70T Series', '84T Series', '77BF Series'],
      rows: [
        { name: 'Frame Depth', values: ['70mm', '84mm', '77mm'] },
        { name: 'Max Glass', values: ['44mm', '56mm', '52mm'] },
        { name: 'U-Value (W/m²K)', values: ['2.1', '1.6', '1.8'] },
        { name: 'System Type', values: ['Hinged', 'Hinged', 'Bi-Fold'] }
      ]
    },
    brochures: [
      { label: 'Full 70T Catalogue', size: '4.2 MB', url: '/brochures/lorenzoline-70t.pdf', type: 'pdf' },
      { label: 'Technical Spec Sheet', size: '1.8 MB', url: '/brochures/70t-specs.pdf', type: 'spec' },
      { label: 'DWG Profile Section', size: '2.5 MB', url: '/brochures/70t-drawings.dwg', type: 'dwg' }
    ]
  },
  'lorenzoline-50f': {
    id: 'lorenzoline-50f',
    category: 'aluminum',
    typology: 'Facade Systems',
    title: '50F Curtain Wall',
    brand: 'Lorenzoline',
    description: 'Structural glazing and curtain wall system providing maximum transparency and architectural freedom for large-scale building envelopes.',
    heroImage: '/pictures-from-lorenzoline/Lorenzo_Products/facade-systems/50F-cephe-sistemleri.jpg',
    gallery: [
      '/pictures-from-lorenzoline/Lorenzo_Products/facade-systems/50F-cephe-sistemleri.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/facade-systems/80US-cephe-sistemleri-1.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/facade-systems/90US-cephe-sistemleri.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/facade-systems/50F-cephe-sistemleri-1.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/facade-systems/50F-cephe-sistemleri-2.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/facade-systems/60F-cephe-sistemleri.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/facade-systems/80US-cephe-sistemleri.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/facade-systems/90US-cephe-sistemleri-1.jpg'
    ],
    features: [
      'Slim Sightlines (50mm)',
      'Integrated Vent Options',
      'High Wind Load Resistance',
      'Efficient Water Drainage',
      'Structural Silicone Glazing'
    ],
    specs: {
      'Profile Width': '50mm',
      'Infill Thickness': '6-44mm',
      'Acoustic Rating': '42 dB',
      'Thermal (Uf)': '2.4 W/m²K'
    },
    performance: {
      structural: 'Structural Glazing (VEC) Compatible',
      thermal: 'Uf = 2.4 W/m²K',
      acoustic: 'Rw = 42 dB'
    },
    brochures: [
      { label: 'Facade Systems Guide', size: '5.1 MB', url: '/brochures/facade-guide.pdf', type: 'pdf' }
    ]
  },
  'lorenzoline-sliding': {
    id: 'lorenzoline-sliding',
    category: 'aluminum',
    typology: 'Sliding Systems',
    title: 'Sliding & Bi-Fold Series',
    brand: 'Lorenzoline',
    description: 'Architectural sliding and bi-folding systems designed for seamless indoor-outdoor transitions. Engineered for smooth operation and high structural stability.',
    heroImage: '/pictures-from-lorenzoline/Lorenzo_Products/sliding-systems/70MS-surme-sistemi.jpg',
    gallery: [
      '/pictures-from-lorenzoline/Lorenzo_Products/sliding-systems/70MS-surme-sistemi.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/sliding-systems/38sls-kaldir-sur-sistemi-100.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/sliding-systems/51ls-surme-sistemi-103.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/sliding-systems/38sls-kaldir-sur-sistemi.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/sliding-systems/51ls-surme-sistemi.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/sliding-systems/51ls-surme-sistemi-1.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/sliding-systems/70MS-surme-sistemi-1.jpg',
      '/pictures-from-lorenzoline/Lorenzo_Products/sliding-systems/sliding-systems-22-400x420.jpg'
    ],
    features: [
      'Heavy-Duty Stainless Steel Tracks',
      'Soft-Close Mechanism',
      'Slim Interlock Profiles',
      'Flush Threshold Options',
      'Bi-Folding Versatility'
    ],
    specs: {
      'Max Sash Weight': '300kg',
      'Frame Depth': '120mm',
      'Glass Thickness': '20-32mm',
      'Operation': 'Sliding / Bi-Fold'
    },
    performance: {
      structural: 'High Wind Resistance (Class C4)',
      thermal: 'Uf = 2.6 W/m²K',
      acoustic: 'Rw = 40 dB'
    },
    brochures: [
      { label: 'Sliding Systems Guide', size: '3.4 MB', url: '/brochures/sliding-guide.pdf', type: 'pdf' }
    ]
  },

  // GUCBIR GENERATORS
  'gucbir-perkins-100': {
    id: 'gucbir-perkins-100',
    category: 'generators',
    typology: 'Power Generation',
    title: 'Perkins 110kVA Industrial',
    brand: 'Gucbir',
    description: 'Engineered for reliability, this Perkins-powered generator provides stable backup and prime power for industrial facilities and large commercial buildings.',
    heroImage: '/Perkins 110kVA Industrial.png',
    gallery: [
      '/Perkins 110kVA Industrial.png',
      '/pictures-from-gucbir/Gucbir_Products/perkins/Perkins-Diesel-Generator-100-200-150x150.jpg',
      '/pictures-from-gucbir/Gucbir_Products/perkins/Gucbir-Perkins-Diesel-Generator-150x150.jpg',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/GJP110-1-300x180.webp',
      '/pictures-from-gucbir/Gucbir_Products/generator-cabin/sessiz-kabin-teknolojisi-1-1024x354.png',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/gucbir-jenerator-setleri.png'
    ],
    features: [
      'Perkins UK Engine',
      'Maranello/Stamford Alternator',
      'DeepSea/Datakom Controller',
      'Silent Canopy (72dB @ 7m)',
      'Anti-Vibration Mounts'
    ],
    specs: {
      'Standby Power': '110 kVA / 88 kW',
      'Prime Power': '100 kVA / 80 kW',
      'Engine Model': '1104C-44TAG2',
      'Cylinders': '4, Vertical In-line',
      'Aspiration': 'Turbocharged',
      'Fuel Consumption': '22.6 L/h (100% Load)'
    },
    performance: {
      power: '110kVA Standby / 100kVA Prime Power',
      structural: 'Silent Canopy Technology (72dB @ 7m)'
    },
    brochures: [
      { label: 'Perkins 110kVA Data', size: '2.4 MB', url: '/brochures/perkins-100.pdf', type: 'pdf' },
      { label: 'Maintenance Manual', size: '3.1 MB', url: '/brochures/manual.pdf', type: 'spec' }
    ]
  },
  'gucbir-portable-gjb7500': {
    id: 'gucbir-portable-gjb7500',
    category: 'generators',
    typology: 'Portable Units',
    title: 'GJB7500 Inverter Series',
    brand: 'Gucbir',
    description: 'Compact, ultra-quiet portable generator perfect for residential backup, mobile clinics, and sensitive electronic equipment.',
    heroImage: '/GJB7500 Inverter Series.png',
    gallery: [
      '/GJB7500 Inverter Series.png',
      '/pictures-from-gucbir/Gucbir_Products/portable-generators/03_GJB4000iS_beyaz-150x150.jpg',
      '/pictures-from-gucbir/Gucbir_Products/portable-generators/04_GJB2000iS_beyaz-150x150.jpg',
      '/pictures-from-gucbir/Gucbir_Products/portable-generators/02_GJB7500Ei_beyaz-150x150.jpg',
      '/pictures-from-gucbir/Gucbir_Products/portable-generators/05_GJB3000_beyaz-150x150.jpg'
    ],
    features: [
      'Inverter Technology (Clean Power)',
      'Parallel Connection Ready',
      'Economy Mode Switch',
      'USB Charging Ports',
      'Low Oil Shutdown'
    ],
    specs: {
      'Max Output': '7.5 kW',
      'Rated Output': '7.0 kW',
      'Noise Level': '58 dB @ 7m',
      'Run Time': '8.5h (50% Load)',
      'Weight': '42 kg'
    },
    brochures: [
      { label: 'Portable Series Guide', size: '1.2 MB', url: '/brochures/portable-guide.pdf', type: 'pdf' }
    ]
  },

  'gucbir-cummins-650': {
    id: 'gucbir-cummins-650',
    category: 'generators',
    typology: 'Power Generation',
    title: 'Cummins 650kVA Industrial',
    brand: 'Gucbir',
    description: 'Heavy-duty Cummins-powered generator engineered for high-load industrial facilities, with stable voltage regulation and robust canopy design for continuous operations.',
    heroImage: '/Cummins 650kVA Industrial.png',
    gallery: [
      '/Cummins 650kVA Industrial.png',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/gucbir-jenerator-setleri.png',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/gucbir-jenerator-2.png',
      '/pictures-from-gucbir/Gucbir_Products/generator-cabin/sessiz-kabin-teknolojisi-1-1024x354.png'
    ],
    features: [
      'Cummins Engine Platform',
      'Stamford/Leroy-Somer Alternator Options',
      'DeepSea/Datakom Control Panel',
      'Silent Canopy & Weatherproof Enclosure',
      'Site-Ready Skid Base & Lifting Points'
    ],
    specs: {
      'Standby Power': '650 kVA',
      'Prime Power': '590 kVA',
      'Frequency': '50 Hz',
      'Voltage': '400/230 V',
      'Noise Level': '72 dB @ 7m',
      'Fuel Consumption': '125 L/h (100% Load)'
    },
    performance: {
      power: '650kVA Standby / 590kVA Prime Power',
      structural: 'Silent canopy for industrial sites and commercial campuses'
    },
    brochures: [
      { label: 'Cummins Industrial Series', size: '3.0 MB', url: '/brochures/cummins-industrial.pdf', type: 'pdf' },
      { label: 'Installation & Maintenance', size: '2.1 MB', url: '/brochures/generator-maintenance.pdf', type: 'spec' }
    ]
  },

  'gucbir-cummins-1500': {
    id: 'gucbir-cummins-1500',
    category: 'generators',
    typology: 'Power Generation',
    title: 'Cummins 1500kVA Industrial',
    brand: 'Gucbir',
    description: 'High-capacity Cummins generator solution for mission-critical facilities requiring scalable power, parallel synchronization readiness, and long-duration resilience.',
    heroImage: '/Cummins 1500kVA Industrial.png',
    gallery: [
      '/Cummins 1500kVA Industrial.png',
      '/pictures-from-gucbir/Gucbir_Products/synchronization-systems-in-generators-modern-solutions-with-the-gucbir-generator-difference/gucbir-jenerator-setleri-1024x325.png',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/gucbir-jenerator-setleri.png',
      '/pictures-from-gucbir/Gucbir_Products/company-profile/gucbir-jenerator-uretim-alani.jpg'
    ],
    features: [
      'High-Capacity Cummins Platform',
      'Synchronization Panel Ready',
      'Industrial AVR & Stable Frequency Control',
      'Advanced Cooling for Continuous Duty',
      'Service Access Doors & Maintenance Design'
    ],
    specs: {
      'Standby Power': '1500 kVA',
      'Prime Power': '1360 kVA',
      'Frequency': '50 Hz',
      'Voltage': '400/230 V',
      'Noise Level': '74 dB @ 7m',
      'Fuel Consumption': '285 L/h (100% Load)'
    },
    performance: {
      power: '1500kVA Standby / 1360kVA Prime Power',
      structural: 'Parallel-ready integration for data centers, campuses, and utilities'
    },
    brochures: [
      { label: 'High Capacity Series', size: '3.8 MB', url: '/brochures/high-capacity-series.pdf', type: 'pdf' },
      { label: 'Synchronization Guide', size: '2.4 MB', url: '/brochures/synchronization-guide.pdf', type: 'spec' }
    ]
  },

  'gucbir-yuchai-200': {
    id: 'gucbir-yuchai-200',
    category: 'generators',
    typology: 'Power Generation',
    title: 'Yuchai 200kVA Industrial',
    brand: 'Gucbir',
    description: 'A balanced industrial diesel generator built for dependable standby power and efficient fuel consumption, ideal for factories, workshops, and mid-scale commercial buildings.',
    heroImage: '/Yuchai 200kVA Industrial.png',
    gallery: [
      '/Yuchai 200kVA Industrial.png',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/gucbir-jenerator-2.png',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/gucbir-jenerator-setleri.png',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/kabinsiz-dizel-jenenerator-2.png'
    ],
    features: [
      'Efficient Yuchai Engine Platform',
      'Industrial Control Panel Options',
      'Fast Service Access Design',
      'Silent or Open Type Configurations',
      'Anti-Vibration Mounting System'
    ],
    specs: {
      'Standby Power': '200 kVA',
      'Prime Power': '180 kVA',
      'Frequency': '50 Hz',
      'Voltage': '400/230 V',
      'Noise Level': '72 dB @ 7m',
      'Fuel Consumption': '44 L/h (100% Load)'
    },
    performance: {
      power: '200kVA Standby / 180kVA Prime Power',
      structural: 'Canopy and baseframe engineered for on-site deployment'
    },
    brochures: [
      { label: 'Industrial Diesel Overview', size: '2.6 MB', url: '/brochures/industrial-diesel.pdf', type: 'pdf' },
      { label: 'Service Checklist', size: '1.1 MB', url: '/brochures/service-checklist.pdf', type: 'spec' }
    ]
  },

  'gucbir-yuchai-900': {
    id: 'gucbir-yuchai-900',
    category: 'generators',
    typology: 'Power Generation',
    title: 'Yuchai 900kVA Industrial',
    brand: 'Gucbir',
    description: 'High output generator set designed for demanding industrial environments where continuous-duty capability and reliable electrical performance are mandatory.',
    heroImage: '/Yuchai 900kVA Industrial.png',
    gallery: [
      '/Yuchai 900kVA Industrial.png',
      '/pictures-from-gucbir/Gucbir_Products/company-profile/gucbir-jenerator-uretim-alani.jpg',
      '/pictures-from-gucbir/Gucbir_Products/synchronization-systems-in-generators-modern-solutions-with-the-gucbir-generator-difference/gucbir-jenerator-setleri-1024x325.png',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/gucbir-jenerator-setleri.png'
    ],
    features: [
      'High Output Yuchai Platform',
      'Synchronization Ready Architecture',
      'Industrial Cooling & Airflow Design',
      'Advanced Monitoring & Fault Logging',
      'Heavy-Duty Electrical Protection'
    ],
    specs: {
      'Standby Power': '900 kVA',
      'Prime Power': '820 kVA',
      'Frequency': '50 Hz',
      'Voltage': '400/230 V',
      'Noise Level': '74 dB @ 7m',
      'Fuel Consumption': '175 L/h (100% Load)'
    },
    performance: {
      power: '900kVA Standby / 820kVA Prime Power',
      structural: 'Designed for parallel systems and large-scale facilities'
    },
    brochures: [
      { label: 'High Output Guide', size: '3.2 MB', url: '/brochures/high-output-guide.pdf', type: 'pdf' },
      { label: 'Parallel Operation Notes', size: '1.9 MB', url: '/brochures/parallel-operation.pdf', type: 'spec' }
    ]
  },

  'gucbir-doosan-700': {
    id: 'gucbir-doosan-700',
    category: 'generators',
    typology: 'Power Generation',
    title: 'Doosan 700kVA Industrial',
    brand: 'Gucbir',
    description: 'Industrial generator solution built around the Doosan engine platform, optimized for reliability, easy maintenance access, and stable power output under heavy loads.',
    heroImage: '/Doosan 700kVA Industrial.png',
    gallery: [
      '/Doosan 700kVA Industrial.png',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/gucbir-jenerator-2.png',
      '/pictures-from-gucbir/Gucbir_Products/homepage_general/gucbir-jenerator-setleri.png',
      '/pictures-from-gucbir/Gucbir_Products/gucbir-quality-in-perkins-engine-generators/gucbir-jenerator-1024x1024.jpeg'
    ],
    features: [
      'Doosan Industrial Engine Platform',
      'High Efficiency Alternator Options',
      'Service-Friendly Layout',
      'Sound Insulation & Airflow Engineering',
      'Protection & Monitoring Suite'
    ],
    specs: {
      'Standby Power': '700 kVA',
      'Prime Power': '640 kVA',
      'Frequency': '50 Hz',
      'Voltage': '400/230 V',
      'Noise Level': '73 dB @ 7m',
      'Fuel Consumption': '138 L/h (100% Load)'
    },
    performance: {
      power: '700kVA Standby / 640kVA Prime Power',
      structural: 'Industrial canopy engineering and vibration isolation'
    },
    brochures: [
      { label: 'Doosan Industrial Series', size: '2.9 MB', url: '/brochures/doosan-industrial.pdf', type: 'pdf' },
      { label: 'Maintenance Interval Guide', size: '1.4 MB', url: '/brochures/maintenance-intervals.pdf', type: 'spec' }
    ]
  },

  // KERNEK ASANSOR ELEVATORS
  'kernek-mrl-luxury': {
    id: 'kernek-mrl-luxury',
    category: 'elevators',
    typology: 'Vertical Mobility',
    title: 'MRL Titanium Series',
    brand: 'Kernek Asansor',
    description: 'The pinnacle of vertical transportation, combining machine-room-less efficiency with Italian-inspired titanium and mirror finishes.',
    heroImage: '/pictures-from-kernekasansor/Kernek_Products/sayfa_135/428.png',
    gallery: [
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_135/428.png',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_135/429.jpg',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_135/430.jpg',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_135/431.jpg',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_135/432.jpg',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_135/433.jpg'
    ],
    features: [
      'Gearless Traction Drive',
      'Energy Regeneration System',
      'Touch Control Interface',
      'Antibacterial Cabin Walls',
      'Seismic Detection System'
    ],
    specs: {
      'Capacity': '630 - 1600 kg',
      'Speed': '1.0 - 2.5 m/s',
      'Max Travel': '120 meters',
      'Max Stops': '32',
      'Drive': 'Gearless PMSM'
    },
    performance: {
      mobility: '1.0 - 2.5 m/s Variable Speed',
      structural: 'Seismic Grade 4 Protection'
    },
    variants: [
      {
        label: 'Cabin Finish',
        options: [
          { name: 'Mirror Titanium', value: '#8A8D8F', image: '/pictures-from-kernekasansor/Kernek_Products/sayfa_135/428.png' },
          { name: 'Gold Mirror', value: '#D4AF37', image: '/pictures-from-kernekasansor/Kernek_Products/sayfa_135/429.jpg' },
          { name: 'Textured Black', value: '#1A1A1A', image: '/pictures-from-kernekasansor/Kernek_Products/sayfa_135/430.jpg' }
        ]
      }
    ],
    brochures: [
      { label: 'Luxury Series Catalogue', size: '6.5 MB', url: '/brochures/kernek-luxury.pdf', type: 'pdf' }
    ]
  },
  'kernek-panoramic': {
    id: 'kernek-panoramic',
    category: 'elevators',
    typology: 'Panoramic Lifts',
    title: 'Vision Glass Series',
    brand: 'Kernek Asansor',
    description: 'Architectural glass elevators designed to provide breathtaking views while enhancing the building\'s aesthetic value.',
    heroImage: '/pictures-from-kernekasansor/Kernek_Products/sayfa_131/411.png',
    gallery: [
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_131/411.png',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_131/408.jpg',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_132/414.jpg',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_133/420.jpg'
    ],
    features: [
      'Safety Laminated Glass',
      'Customizable Frame Colors',
      'Integrated LED Lighting',
      'Silent Door Operators'
    ],
    specs: {
      'Configuration': 'Square / Round / Hex',
      'Glass Type': '10+10mm Laminated',
      'Load Range': '450 - 2000 kg',
      'Opening Type': 'Automatic Center'
    },
    brochures: []
  },
  'kernek-components': {
    id: 'kernek-components',
    category: 'elevators',
    typology: 'Components',
    title: 'Control & Safety Systems',
    brand: 'Kernek Asansor',
    description: 'High-precision elevator components including advanced control panels and safety gear for reliable vertical transportation.',
    heroImage: '/pictures-from-kernekasansor/Kernek_Products/sayfa_137/469.jpg',
    gallery: [
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_137/469.jpg',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_137/468.jpg',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_137/471.jpg',
      '/pictures-from-kernekasansor/Kernek_Products/sayfa_137/474.jpg'
    ],
    features: [
      'VVVF Drive Control',
      'Remote Monitoring Ready',
      'Energy Efficient Inverters',
      'Certified Safety Gear'
    ],
    specs: {
      'Control': 'Serial Communication',
      'Protocol': 'CAN-bus',
      'Safety': 'EN 81-20/50',
      'Voltage': '380-400V 3Phase'
    },
    brochures: []
  },
};
