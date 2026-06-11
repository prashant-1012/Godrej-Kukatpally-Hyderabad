
import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/privacy-policy/privacy-policy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy - Runwal Raaya WORLI',
  description: 'Privacy Policy for Runwal Raaya WORLI.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
