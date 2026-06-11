
import type { Metadata } from 'next';
import TermsOfUseContent from '@/components/terms-of-use/terms-of-use-content';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Runwal Raaya WORLI',
  description: 'Terms and Conditions for Runwal Raaya WORLI.',
};

export default function TermsOfUsePage() {
  return <TermsOfUseContent />;
}
