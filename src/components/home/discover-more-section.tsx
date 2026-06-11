import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function DiscoverMoreSection() {
  return (
    <section id="discover-more-section" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">
          Discover More About Runwal Raaya
        </h2>
        <p className="font-body text-lg text-foreground max-w-2xl mx-auto mb-8">
          Explore the serene and luxurious lifestyle that awaits you at Runwal Raaya. 
          Download our brochure or schedule a site visit today to experience the epitome of plotted development.
        </p>
        <div className="space-x-4">
          <Link href="#download-brochure" passHref>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md shadow-md transform transition-transform hover:scale-105">
              Download Brochure
            </Button>
          </Link>
          <Link href="#schedule-visit" passHref>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-md shadow-md transform transition-transform hover:scale-105">
              Schedule Site Visit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
