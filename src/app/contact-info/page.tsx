
import type { Metadata } from 'next';
import ContactInfoContent from '@/components/contact-info/contact-info-content';

export const metadata: Metadata = {
  title: 'Contact Us - Runwal Raaya WORLI',
  description: 'Contact Sun Realty, authorized channel partner for Runwal Raaya.',
};

export default function ContactInfoPage() {
  return <ContactInfoContent />;
}
