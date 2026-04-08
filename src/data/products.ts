export type Product = {
  id: number
  name: string
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
    category: 'Succulents',
    price: 14,
    size: 'Small',
    light: 'Bright',
    petSafe: true,
    imageUrl: '/lithops.png',
    featuredScore: 83,
  },
]
