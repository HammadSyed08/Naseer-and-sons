import { Zap, Wrench, Paintbrush, Grid3X3, TowelRack } from 'lucide-react'

// Add or remove services here. Each must have an id, title, description, and a Lucide icon component.
export const services = [
  {
    id: 'electrician',
    title: 'Electrician',
    description: 'Wiring, repairs, panel upgrades, and new installations. Certified electricians for your safety.',
    icon: Zap,
  },
  {
    id: 'plumber',
    title: 'Plumber',
    description: 'Pipe fitting, leakage repair, bathroom & kitchen plumbing. Fast and reliable service.',
    icon: Wrench,
  },
  {
    id: 'painter',
    title: 'Painter',
    description: 'Interior & exterior painting, wall texture, and waterproofing. Transform your space.',
    icon: Paintbrush,
  },
  {
    id: 'tile-fixture',
    title: 'Tile Fixture',
    description: 'Floor and wall tile installation, marble work, and grouting. Perfect finishes guaranteed.',
    icon: Grid3X3,
  },
  {
    id: 'welder',
    title: 'Welder',
    description: 'Metal fabrication, repair, and welding services. Strong and durable connections guaranteed.',
    icon: TowelRack,
  },
]