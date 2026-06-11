
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-8 border-t border-border/50 animate-in fade-in duration-700 ease-out delay-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Container */}
        <div className="flex justify-center items-center mb-6">
          <Image 
            src="https://files.fivemerr.com/images/81bbf275-4db8-4a1f-b4a6-0fb21b75ec3c.png" 
            alt="Runwal Raaya Logo" 
            data-ai-hint="runwal raaya logo" 
            width={152} 
            height={50}
            className="object-contain"
          />
        </div>

        {/* Disclaimer */}
        <div className="mb-6 text-xs text-muted-foreground max-w-3xl mx-auto font-semibold">
          <p>
            Disclaimer: Sun Realty is an authorized channel partner for Runwal Raaya. All project images are for representation purposes only and subject to change. All details are sourced from the developer.
          </p>
        </div>

        {/* MahaRERA Info */}
        <div className="mb-4 text-sm text-muted-foreground font-semibold">
          <p>RERA No: A51900038861 | Project MahaRERA No. – P51900080218</p>
          <Link 
            href="https://maharera.maharashtra.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-accent hover:underline"
          >
            (https://maharera.maharashtra.gov.in/)
          </Link>
        </div>

        {/* Footer Links */}
        <div className="mb-4 text-sm font-semibold flex justify-center items-center flex-wrap gap-x-4 gap-y-2">
          <Link href="/about-us" className="text-accent hover:underline">
            About Us
          </Link>
          <span className="text-muted-foreground hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
          <span className="text-muted-foreground hidden sm:inline">|</span>
          <Link href="/terms-of-use" className="text-accent hover:underline">
            Terms & Conditions
          </Link>
           <span className="text-muted-foreground hidden sm:inline">|</span>
          <Link href="/contact-info" className="text-accent hover:underline">
            Contact Info
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-muted-foreground font-semibold">
          <p>All Rights Reserved. © 2025 Method & Madness Technology Pvt. Ltd</p>
        </div>
      </div>
    </footer>
  );
}
