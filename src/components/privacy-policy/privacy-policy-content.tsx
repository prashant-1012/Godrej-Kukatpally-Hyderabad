
"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EnquireNowPopup } from '@/components/home/enquire-now-popup';

export default function PrivacyPolicyContent() {
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
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">Privacy Policy</h1>
          <div className="space-y-6 text-foreground/90 leading-relaxed text-sm sm:text-base">
            {currentDate && <p className="text-muted-foreground text-center mb-8">Last updated: {currentDate}</p>}
            
            <p>Welcome to Runwal Raaya (the "Site"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">1. Information We Collect</h2>
            <p>We may collect personal information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. You may be asked for, as appropriate, name, email address, phone number.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">2. How We Use Your Information</h2>
            <p>We may use the information we collect from you to:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
              <li>Improve our website in order to better serve you.</li>
              <li>Administer a contest, promotion, survey or other site feature.</li>
              <li>Send periodic emails regarding your order or other products and services.</li>
              <li>Follow up with them after correspondence (live chat, email or phone inquiries).</li>
            </ul>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">3. How We Protect Your Information</h2>
            <p>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">4. Sharing Your Personal Information</h2>
            <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
            
            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">5. Third-Party Websites</h2>
            <p>You may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. </p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">6. Changes to This Privacy Policy</h2>
            <p>We have the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage you to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">7. Your Acceptance of These Terms</h2>
            <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>

            <h2 className="font-semibold text-xl text-primary mt-6 mb-3">8. Contacting Us</h2>
            <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: [Placeholder Email] or [Placeholder Phone Number].</p>
          </div>
        </div>
      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={setShowEnquirePopup} />
    </div>
  );
}
