
import type { Metadata } from 'next';
import AboutUsContent from '@/components/about-us/about-us-content';

export const metadata: Metadata = {
  title: 'About Us - Runwal Raaya WORLI',
  description: 'Learn more about Sun Realty, authorized channel partner for Runwal Raaya.',
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
