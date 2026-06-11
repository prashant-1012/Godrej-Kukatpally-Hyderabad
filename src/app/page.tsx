
"use client";

import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero-section';
import { ProjectOverviewSection } from '@/components/home/project-overview-section';
import { FloorPlanSection } from '@/components/home/floor-plan-section';
import { AmenitiesSection } from '@/components/home/amenities-section';
import { EnquireNowPopup } from '@/components/home/enquire-now-popup';
import { LocationTabsSection } from '@/components/home/location-tabs-section';


export default function Home() {
  const [showEnquirePopup, setShowEnquirePopup] = useState(false);
  const [initialPopupTriggered, setInitialPopupTriggered] = useState(false);

  const recurringTimerRef = useRef<NodeJS.Timeout | null>(null);
  const initialDelayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerPopup = () => {
    if (initialDelayTimerRef.current) {
      clearTimeout(initialDelayTimerRef.current); 
      initialDelayTimerRef.current = null;
    }
    setShowEnquirePopup(true);
    if (!initialPopupTriggered) {
      setInitialPopupTriggered(true); 
    }
  };

  useEffect(() => {
    if (!initialPopupTriggered && !showEnquirePopup) { 
      initialDelayTimerRef.current = setTimeout(() => {
        triggerPopup();
      }, 3000);
    }
    return () => {
      if (initialDelayTimerRef.current) {
        clearTimeout(initialDelayTimerRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  useEffect(() => {
    if (recurringTimerRef.current) {
      clearInterval(recurringTimerRef.current);
      recurringTimerRef.current = null;
    }

    if (initialPopupTriggered && !showEnquirePopup) {
      recurringTimerRef.current = setInterval(() => {
        setShowEnquirePopup(true); 
      }, 25000); 
    }

    return () => {
      if (recurringTimerRef.current) {
        clearInterval(recurringTimerRef.current);
      }
    };
  }, [showEnquirePopup, initialPopupTriggered]);

  const handlePopupOpenChange = (isOpen: boolean) => {
    setShowEnquirePopup(isOpen);
    if (isOpen && !initialPopupTriggered) {
      setInitialPopupTriggered(true);
      if (initialDelayTimerRef.current) {
        clearTimeout(initialDelayTimerRef.current); 
        initialDelayTimerRef.current = null;
      }
    }
  };
  
  const openEnquirePopup = () => {
    triggerPopup();
  };


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onOpenEnquirePopup={openEnquirePopup} />
      <main className="flex-grow">
        <HeroSection onOpenEnquirePopup={openEnquirePopup} />
        <ProjectOverviewSection onOpenEnquirePopup={openEnquirePopup} />
        <FloorPlanSection onOpenEnquirePopup={openEnquirePopup} />

        <AmenitiesSection />

        <section id="location" className="py-16 sm:py-24 bg-secondary/50 overflow-hidden animate-in fade-in duration-500 ease-out">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500 ease-out">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-custom-gold text-center mb-3 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
              Location Advantages
            </h2>
            <div className="h-1 w-16 bg-custom-gold mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-100"></div>
            <div className="max-w-4xl mx-auto rounded-l-xl rounded-r-[60px] overflow-hidden shadow-xl border border-border animate-in fade-in duration-700 ease-out delay-150">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8330.111025082397!2d72.81729091820522!3d19.001498344098163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60f42723070d171b%3A0xa9d873758ff2e7d5!2sRaaya%20by%20Runwal!5e0!3m2!1sen!2sin!4v1750661689442!5m2!1sen!2sin"
                className="w-full h-[450px] sm:h-[500px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Raaya by Runwal"
              ></iframe>
            </div>
          </div>
        </section>
        
        <LocationTabsSection onOpenEnquirePopup={openEnquirePopup} />

      </main>
      <Footer />
      <EnquireNowPopup isOpen={showEnquirePopup} onOpenChange={handlePopupOpenChange} />
    </div>
  );
}
