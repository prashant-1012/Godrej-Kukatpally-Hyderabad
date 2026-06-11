
"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EnquireNowPopup } from '@/components/home/enquire-now-popup';

export default function TermsOfUseContent() {
  const [showEnquirePopup, setShowEnquirePopup] = useState(false);
  const openEnquirePopup = () => setShowEnquirePopup(true);
  
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onOpenEnquirePopup={openEnquirePopup} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-in fade-in duration-500 ease-out">
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">Terms & Conditions</h1>
          <div className="space-y-6 text-foreground/90 leading-relaxed text-sm sm:text-base">
            {currentDate && <p className="text-muted-foreground text-center mb-8">Last updated: {currentDate}</p>}

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using the Runwal Raaya website (the "Site"), you agree to be bound by these Terms & Conditions ("Terms"). If you disagree with any part of the terms, then you may not access the Site. These Terms apply to all visitors, users, and others who access or use the Site.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on the Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on the Site;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">3. Disclaimer</h2>
            <p>The materials on the Site are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. The information, images, and details provided are for representational purposes only and are subject to change without notice.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">4. Limitations</h2>
            <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Site, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">5. Accuracy of Materials</h2>
            <p>The materials appearing on the Site could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice. However, we do not make any commitment to update the materials.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">6. Links</h2>
            <p>We have not reviewed all of the sites linked to its website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">7. Modifications</h2>
            <p>We may revise these Terms & Conditions for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms & Conditions.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.</p>
            
            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">9. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at: [Placeholder Email] or [Placeholder Phone Number].</p>
          </div>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
