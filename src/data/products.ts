export type Product = {
  id: number
  name: string
  description: string
  category: 'House Plants' | 'Succulents'
  price: number
  size: 'Small' | 'Medium' | 'Large'
  light: 'Low' | 'Medium' | 'Bright'
  petSafe: boolean
  imageUrl: string
  featuredScore: number
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    description: 'A bold, fast-growing statement plant with iconic split leaves that thrives in bright, indirect light.',
    category: 'House Plants',
    price: 42,
    size: 'Large',
    light: 'Medium',
    petSafe: false,
    imageUrl: '/monstera-deliciosa.png',
    featuredScore: 94,
  },
  {
    id: 2,
    name: 'Pilea Peperomioides',
    description: 'Cheerful and compact with round, coin-shaped leaves — easy to care for and quick to produce offshoots.',
    category: 'House Plants',
    price: 29,
    size: 'Medium',
    light: 'Bright',
    petSafe: true,
    imageUrl: '/pilea-peperomioides.png',
    featuredScore: 90,
  },
  {
    id: 3,
    name: 'Snake Plant Laurentii',
    description: 'Nearly indestructible with striking upright leaves edged in gold — one of the best plants for low-light spaces.',
    category: 'House Plants',
    price: 34,
    size: 'Medium',
    light: 'Low',
    petSafe: false,
    imageUrl: '/snake-plant-laurentii.png',
    featuredScore: 91,
  },
  {
    id: 4,
    name: 'String of Pearls',
    description: 'A cascading succulent with bead-like foliage that looks stunning in a hanging pot or on a high shelf.',
    category: 'Succulents',
    price: 26,
    size: 'Small',
    light: 'Bright',
    petSafe: false,
    imageUrl: '/string-of-pearls.png',
    featuredScore: 89,
  },
  {
    id: 5,
    name: 'Echeveria Elegans',
    description: 'A classic rosette succulent with soft silvery-blue leaves — low maintenance and endlessly elegant.',
    category: 'Succulents',
    price: 18,
    size: 'Small',
    light: 'Bright',
    petSafe: true,
    imageUrl: '/echeveria.jpg',
    featuredScore: 85,
  },
  {
    id: 6,
    name: 'Raven ZZ Plant',
    description: 'A dramatic deep-purple variety of the famously resilient ZZ plant — almost impossible to neglect to death.',
    category: 'House Plants',
    price: 38,
    size: 'Medium',
    light: 'Low',
    petSafe: false,
    imageUrl: '/raven-zz-plant.png',
    featuredScore: 92,
  },
  {
    id: 7,
    name: 'Zebra Haworthia',
    description: 'A petite, architectural succulent with bold white stripes — perfect for a desk or windowsill.',
    category: 'Succulents',
    price: 16,
    size: 'Small',
    light: 'Medium',
    petSafe: true,
    imageUrl: '/zebra.jpg',
    featuredScore: 84,
  },
  {
    id: 8,
    name: 'Burgundy Rubber Plant',
    description: 'Rich, glossy burgundy leaves and a sculptural form make this one of the most stylish plants you can own.',
    category: 'House Plants',
    price: 46,
    size: 'Large',
    light: 'Medium',
    petSafe: false,
    imageUrl: '/rubberburgundy.png',
    featuredScore: 88,
  },
  {
    id: 9,
    name: 'Lithops',
    description: 'Fascinating living stones that mimic pebbles — a conversation-starting collector\'s plant that thrives on neglect.',
    category: 'Succulents',
    price: 14,
    size: 'Small',
    light: 'Bright',
    petSafe: true,
    imageUrl: '/lithops.png',
    featuredScore: 83,
  },
]
