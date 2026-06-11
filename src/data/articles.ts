export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  imageUrl: string;
  imageHint: string;
  excerpt: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Runwal Raaya - A Forest Themed Plotted Development in Chikhale, Near Pune',
    slug: 'runwal-raaya-forest-themed-plotted-development',
    category: 'Property',
    date: 'March 16, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'modern house nature',
    excerpt: 'Discover Runwal Raaya, a unique forest-themed plotted development offering a serene lifestyle amidst nature in Chikhale, near Pune. Experience luxury living with thoughtfully designed plots and world-class amenities.',
  },
  {
    id: '2',
    title: 'Runwal Group - Building Trust, One Home at a Time',
    slug: 'runwal-group-building-trust',
    category: 'Real Estate',
    date: 'March 15, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'architecture construction',
    excerpt: 'Learn about the legacy of Runwal Group, a name synonymous with trust and quality in the real estate sector. With decades of experience, Runwal Group has delivered homes that stand for excellence and customer satisfaction.',
  },
  {
    id: '3',
    title: 'Chikhale - The Emerging Real Estate Hotspot Near Pune',
    slug: 'chikhale-emerging-real-estate-hotspot',
    category: 'Location',
    date: 'March 14, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cityscape development',
    excerpt: 'Explore Chikhale, a rapidly developing locality near Pune that is becoming a prime destination for real estate investment. Its strategic location, infrastructure growth, and connectivity make it an attractive choice for homebuyers.',
  },
];
