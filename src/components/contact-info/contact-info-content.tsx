
"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EnquireNowPopup } from '@/components/home/enquire-now-popup';
import { Mail, Phone } from 'lucide-react';

export default function ContactInfoContent() {
  const [showEnquirePopup, setShowEnquirePopup] = useState(false);
  const openEnquirePopup = () => setShowEnquirePopup(true);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onOpenEnquirePopup={openEnquirePopup} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-in fade-in duration-500 ease-out">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">Contact Information</h1>
          <div className="space-y-6 text-foreground/90 leading-relaxed text-base">
            <p>Get in touch with us for any inquiries about Runwal Raaya.</p>
          </div>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
