import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Mouse',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600',
    price: 799,
    description: 'Ergonomic wireless mouse with silent clicks.',
    stockCount: 25,
    addedDate: new Date(Date.now() - 1000 * 60 * 5),
    rating: 4
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600',
    price: 2499,
    description: 'RGB mechanical keyboard with blue switches.',
    stockCount: 7,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 3),
    rating: 5
  },
  {
    id: 3,
    name: 'Laptop Stand',
    image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600',
    price: 1199,
    description: 'Adjustable aluminum stand for laptops.',
    stockCount: 18,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 24),
    rating: 4
  },
  {
    id: 4,
    name: 'USB-C Hub',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600',
    price: 1899,
    description: 'Multi-port USB-C hub with HDMI and SD card support.',
    stockCount: 4,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 26),
    rating: 3
  },
  {
    id: 5,
    name: 'Noise Cancelling Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    price: 5999,
    description: 'Premium over-ear headphones with ANC.',
    stockCount: 10,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 40),
    rating: 5
  },
  {
    id: 6,
    name: 'Portable SSD',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600',
    price: 7499,
    description: 'Fast portable SSD with 1TB storage.',
    stockCount: 14,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 48),
    rating: 4
  },
  {
    id: 7,
    name: 'Smart Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
    price: 3299,
    description: 'Fitness tracking smartwatch with heart-rate monitor.',
    stockCount: 3,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 52),
    rating: 4
  },
  {
    id: 8,
    name: 'Bluetooth Speaker',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600',
    price: 2199,
    description: 'Portable speaker with deep bass and long battery life.',
    stockCount: 22,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 60),
    rating: 4
  },
  {
    id: 9,
    name: 'Webcam',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600',
    price: 2799,
    description: '1080p webcam ideal for meetings and streaming.',
    stockCount: 11,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 72),
    rating: 3
  },
  {
    id: 10,
    name: 'Desk Lamp',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
    price: 999,
    description: 'LED desk lamp with adjustable brightness.',
    stockCount: 28,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 80),
    rating: 4
  },
  {
    id: 11,
    name: 'Monitor 24-inch',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=600',
    price: 10499,
    description: 'Full HD monitor with slim bezels.',
    stockCount: 6,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 96),
    rating: 5
  },
  {
    id: 12,
    name: 'Gaming Chair',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600',
    price: 8999,
    description: 'Comfortable gaming chair with lumbar support.',
    stockCount: 2,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 110),
    rating: 4
  },
  {
    id: 13,
    name: 'Graphic Tablet',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
    price: 4599,
    description: 'Digital tablet for design and illustration work.',
    stockCount: 13,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 132),
    rating: 5
  },
  {
    id: 14,
    name: 'Phone Tripod',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
    price: 699,
    description: 'Compact tripod for phones and action cameras.',
    stockCount: 19,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 156),
    rating: 3
  },
  {
    id: 15,
    name: 'Power Bank',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600',
    price: 1499,
    description: '10000mAh power bank with fast charging.',
    stockCount: 9,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 180),
    rating: 4
  },
  {
    id: 16,
    name: 'Wireless Charger',
    image: 'https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=600',
    price: 1299,
    description: 'Quick wireless charging pad for smartphones.',
    stockCount: 15,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 220),
    rating: 4
  }
];