import { Creator } from '../types';

export const NICHES_DATA: string[] = [
  'Tech & AI',
  'Beauty & Skincare',
  'Lifestyle & Travel',
  'Food & Culinary',
  'Gaming',
  'Fashion'
];

export const CREATORS_DATA: Creator[] = [
  {
    id: '1',
    name: 'Aziz Amnan',
    title: 'Tech & Automation Specialist',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80',
    verified: true,
    niches: ['Tech & AI', 'Lifestyle & Travel'],
    followers: '195K',
    engagementRate: '5.8%',
    location: 'Jakarta, Indonesia',
    bio: 'Membahas otomasi bisnis, implementasi workflow AI, dan tips produktivitas modern.',
    platforms: [
      { platform: 'tiktok', followers: '120K', handle: '@aziz.amnan' },
      { platform: 'instagram', followers: '55K', handle: '@azizamnan' },
      { platform: 'youtube', followers: '20K', handle: 'Aziz Amnan Tech' }
    ]
  },
  {
    id: '2',
    name: 'Sarah Clarissa',
    title: 'Beauty & Skincare Reviewer',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    verified: true,
    niches: ['Beauty & Skincare', 'Fashion'],
    followers: '380K',
    engagementRate: '4.9%',
    location: 'Bandung, Indonesia',
    bio: 'Review mendalam produk perawatan kulit harian dan tren kecantikan lokal.',
    platforms: [
      { platform: 'instagram', followers: '210K', handle: '@sarahclarissa' },
      { platform: 'tiktok', followers: '170K', handle: '@sarahbeauty' }
    ]
  },
  {
    id: '3',
    name: 'Dimas Pratama',
    title: 'Gaming & Gadget Explorer',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&auto=format&fit=crop&q=80',
    verified: false,
    niches: ['Gaming', 'Tech & AI'],
    followers: '215K',
    engagementRate: '6.4%',
    location: 'Surabaya, Indonesia',
    bio: 'Live streaming game, perakitan PC gaming, dan review perangkat keras terkini.',
    platforms: [
      { platform: 'youtube', followers: '140K', handle: 'DimasPratamaID' },
      { platform: 'tiktok', followers: '75K', handle: '@dimasplay' }
    ]
  },
  {
    id: '4',
    name: 'Nadia Salsabila',
    title: 'Fashion & Aesthetic Lifestyle',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    verified: true,
    niches: ['Fashion', 'Lifestyle & Travel'],
    followers: '310K',
    engagementRate: '4.1%',
    location: 'Jakarta, Indonesia',
    bio: 'Inspirasi busana harian wanita modern dan ulasan destinasi liburan estetik.',
    platforms: [
      { platform: 'instagram', followers: '230K', handle: '@nadiasalsa' },
      { platform: 'tiktok', followers: '80K', handle: '@nadiastyle' }
    ]
  },
  {
    id: '5',
    name: 'Chef Kevin',
    title: 'Culinary Master & Home Cook',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    verified: false,
    niches: ['Food & Culinary'],
    followers: '145K',
    engagementRate: '7.2%',
    location: 'Yogyakarta, Indonesia',
    bio: 'Kreasi resep masakan Nusantara praktis dan eksplorasi jajanan legendaris.',
    platforms: [
      { platform: 'tiktok', followers: '95K', handle: '@chefkevin.cook' },
      { platform: 'youtube', followers: '50K', handle: 'Dapur Chef Kevin' }
    ]
  }
];