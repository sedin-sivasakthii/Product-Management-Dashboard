import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Mouse',
    image: 'https://images.unsplash.com/photo-1754928661583-d04a5f4d9f7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpcmVsZXNzJTIwbW91c2V8ZW58MHx8MHx8fDA%3D',
    price: 799,
    description: 'Ergonomic wireless mouse with silent clicks.',
    stockCount: 25,
    addedDate: new Date(Date.now() - 1000 * 60 * 5),
    rating: 4
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    image: 'https://images.unsplash.com/photo-1625130694338-4110ba634e59?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2499,
    description: 'RGB mechanical keyboard with blue switches.',
    stockCount: 7,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 3),
    rating: 5
  },
  {
    id: 3,
    name: 'Laptop Stand',
    image: 'https://images.unsplash.com/photo-1663873148245-df991e1717ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwc3RhbmQlMjBBZGp1c3RhYmxlJTIwYWx1bWludW0lMjBzdGFuZCUyMGZvciUyMGxhcHRvcHMufGVufDB8fDB8fHww',
    price: 1199,
    description: 'Adjustable aluminum stand for laptops.',
    stockCount: 18,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 24),
    rating: 4
  },
  {
    id: 4,
    name: 'USB-C Hub',
    image: 'https://plus.unsplash.com/premium_photo-1761043248662-42f371ad31b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VVNCLUMlMjBIdWJ8ZW58MHx8MHx8fDA%3D',
    price: 1899,
    description: 'Multi-port USB-C hub with HDMI and SD card support.',
    stockCount: 4,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 26),
    rating: 3
  },
  {
    id: 5,
    name: 'Noise Cancelling Headphones',
    image: 'https://images.unsplash.com/photo-1612478120679-5b7412e15f84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 5999,
    description: 'Premium over-ear headphones with ANC.',
    stockCount: 10,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 40),
    rating: 5
  },
  {
    id: 6,
    name: 'Portable SSD',
    image: 'https://images.unsplash.com/photo-1720048171098-dba33b2c4806?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 7499,
    description: 'Fast portable SSD with 1TB storage.',
    stockCount: 14,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 48),
    rating: 4
  },
  {
    id: 7,
    name: 'Smart Watch',
    image: 'https://images.unsplash.com/photo-1637160151663-a410315e4e75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D',
    price: 3299,
    description: 'Fitness tracking smartwatch with heart-rate monitor.',
    stockCount: 3,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 52),
    rating: 4
  },
  {
    id: 8,
    name: 'Bluetooth Speaker',
    image: 'https://plus.unsplash.com/premium_photo-1729265794966-91ecc8eb23f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJsdWV0b290aCUyMFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D',
    price: 2199,
    description: 'Portable speaker with deep bass and long battery life.',
    stockCount: 22,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 60),
    rating: 4
  },
  {
    id: 9,
    name: 'Webcam',
    image: 'https://images.unsplash.com/photo-1622750342107-4b60e2704157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2ViY2FtfGVufDB8fDB8fHww',
    price: 2799,
    description: '1080p webcam ideal for meetings and streaming.',
    stockCount: 11,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 72),
    rating: 3
  },
  {
    id: 10,
    name: 'Desk Lamp',
    image: 'https://images.unsplash.com/photo-1621177555452-bedbe4c28879?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D',
    price: 999,
    description: 'LED desk lamp with adjustable brightness.',
    stockCount: 28,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 80),
    rating: 4
  },
  {
    id: 11,
    name: 'Monitor 24-inch',
    image: 'https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TW9uaXRvciUyMDI0LWluY2h8ZW58MHx8MHx8fDA%3D',
    price: 10499,
    description: 'Full HD monitor with slim bezels.',
    stockCount: 6,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 96),
    rating: 5
  },
  {
    id: 12,
    name: 'Gaming Chair',
    image: 'https://plus.unsplash.com/premium_photo-1678112179122-50605ebc5697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2FtaW5nJTIwQ2hhaXJ8ZW58MHx8MHx8fDA%3D',
    price: 8999,
    description: 'Comfortable gaming chair with lumbar support.',
    stockCount: 2,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 110),
    rating: 4
  },
  {
    id: 13,
    name: 'Graphic Tablet',
    image: 'https://plus.unsplash.com/premium_photo-1661290408732-e1f084f596a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEdyYXBoaWMlMjBUYWJsZXR8ZW58MHx8MHx8fDA%3D',
    price: 4599,
    description: 'Digital tablet for design and illustration work.',
    stockCount: 13,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 132),
    rating: 5
  },
  {
    id: 14,
    name: 'Phone Tripod',
    image: 'https://plus.unsplash.com/premium_photo-1679362665746-616b9adba66c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGhvbmUlMjBUcmlwb2R8ZW58MHx8MHx8fDA%3D',
    price: 699,
    description: 'Compact tripod for phones and action cameras.',
    stockCount: 19,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 156),
    rating: 3
  },
  {
    id: 15,
    name: 'Power Bank',
    image: 'https://images.unsplash.com/photo-1706275400998-7fc21c8cd8ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBvd2VyJTIwQmFua3xlbnwwfHwwfHx8MA%3D%3D',
    price: 1499,
    description: '10000mAh power bank with fast charging.',
    stockCount: 9,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 180),
    rating: 4
  },
  {
    id: 16,
    name: 'Wireless Charger',
    image: 'https://images.unsplash.com/photo-1633381638729-27f730955c23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2lyZWxlc3MlMjBDaGFyZ2VyfGVufDB8fDB8fHww',
    price: 1299,
    description: 'Quick wireless charging pad for smartphones.',
    stockCount: 15,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 220),
    rating: 4
  }
];