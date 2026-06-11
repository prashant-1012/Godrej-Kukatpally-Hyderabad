
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Home, LayoutDashboard, Wifi, MapPin, Images, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinksConfig = [
  { href: '/#overview', label: 'Overview', icon: Home },
  { href: '/#floor-plan', label: 'Floor Plan & Pricing', icon: LayoutDashboard },
  { href: '/#location', label: 'Location', icon: MapPin },
  { href: '/#amenities', label: 'Amenities', icon: Wifi },
  { href: '/#gallery', label: 'Gallery', icon: Images },
];

interface HeaderProps {
  onOpenEnquirePopup: () => void;
}

export function Header({ onOpenEnquirePopup }: HeaderProps) {
  const [activeLink, setActiveLink] = useState('Overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const currentLink = navLinksConfig.find(link => link.href.endsWith(hash));
      if (currentLink) {
        setActiveLink(currentLink.label);
      } else if (hash === '' || hash === '#') {
         const overviewLink = navLinksConfig.find(link => link.label === 'Overview');
         if (overviewLink) setActiveLink(overviewLink.label);
      }
    };

    window.addEventListener('hashchange', handleHashChange, false);
    handleHashChange(); 

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  const handleNavLinkClick = (label: string) => {
    setActiveLink(label);
  };

  return (
    <header className="bg-card shadow-md sticky top-0 z-50 animate-in fade-in duration-300 ease-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/#overview" className="flex items-center shrink-0" onClick={() => handleNavLinkClick('Overview')}>
            <Image
              src="/images/logo.png"
              alt="Godrej Kukatpally Logo"
              width={160}
              height={56}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5">
            {navLinksConfig.map((linkInfo) => {
              const IconComponent = linkInfo.icon;
              const isActive = activeLink === linkInfo.label;
              return (
                <Link
                  key={linkInfo.label}
                  href={linkInfo.href}
                  onClick={() => handleNavLinkClick(linkInfo.label)}
                  className={cn(
                    "flex items-center space-x-1.5 pb-1 font-medium group whitespace-nowrap transition-transform duration-200 ease-out hover:-translate-y-px",
                    isActive
                      ? "text-custom-gold border-b-2 border-custom-gold"
                      : "text-foreground hover:text-custom-gold hover:border-b-2 hover:border-custom-gold/50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <IconComponent
                    className={cn(
                      "h-4 w-4",
                      isActive ? "text-custom-gold" : "text-foreground group-hover:text-custom-gold"
                    )}
                  />
                  <span className="text-sm">{linkInfo.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Enquire Now Button (Large Screens) */}
          <div className="hidden lg:flex items-center shrink-0 ml-4">
            <Button
              onClick={onOpenEnquirePopup}
              className="bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground rounded-md px-5 py-2 text-sm shadow-md transform transition-transform hover:scale-105"
            >
              Enquire Now
            </Button>
          </div>
          
          {/* Mobile Menu Trigger and Enquire Now Button */}
          <div className="lg:hidden flex items-center space-x-2">
             <Button
                onClick={onOpenEnquirePopup}
                size="sm"
                className="bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground rounded-md px-3 py-1.5 text-xs shadow-md"
              >
                Enquire Now
              </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card p-0">
                <SheetHeader className="p-4 border-b border-border">
                  <SheetTitle className="text-lg font-semibold text-primary text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-1 p-4">
                  {navLinksConfig.map((linkInfo) => {
                    const IconComponent = linkInfo.icon;
                    const isActive = activeLink === linkInfo.label;
                    return (
                      <SheetClose asChild key={linkInfo.label}>
                        <Link
                          href={linkInfo.href}
                          onClick={() => handleNavLinkClick(linkInfo.label)}
                          className={cn(
                            "flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-colors",
                            isActive
                              ? "bg-primary/10 text-custom-gold"
                              : "text-foreground hover:bg-secondary/80 hover:text-primary"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <IconComponent className={cn("h-5 w-5", isActive ? "text-custom-gold" : "text-muted-foreground")} />
                          <span>{linkInfo.label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
