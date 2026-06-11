
"use client"

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Amenity {
  id: string;
  name: string;
  imageUrl: string;
  imageHint: string;
}

const amenities: Amenity[] = [
  { id: '1', name: 'Clubhouse', imageUrl: 'https://files.fivemerr.com/images/1b4f6bcf-f1cf-4b39-b6b2-b740214a850b.webp', imageHint: 'clubhouse community' },
  { id: '5', name: 'Games Room', imageUrl: 'https://files.fivemerr.com/images/c6605b3e-222b-4866-880b-0c4c1af2c2e7.png', imageHint: 'games room' },
  { id: '3', name: 'Gym', imageUrl: 'https://files.fivemerr.com/images/9437b358-4902-4000-a1db-6bdc4b2f513f.jpg', imageHint: 'fitness gym' },
  { id: '4', name: 'Swimming Pool', imageUrl: 'https://files.fivemerr.com/images/1308e604-aeb5-43ab-a6c2-572e3727d6fb.png', imageHint: 'pool luxury' },
  { id: '2', name: '2.4 Acres of Green', imageUrl: 'https://files.fivemerr.com/images/2ab16a12-4d66-4d32-b8d7-ec7a2e04688a.png', imageHint: 'park nature' },
  { id: '6', name: 'Kids Play Area', imageUrl: 'https://files.fivemerr.com/images/f3def1cd-c410-4d52-9bb2-cc596716120a.webp', imageHint: 'playground kids' },
  { id: '7', name: 'Tennis Court', imageUrl: 'https://files.fivemerr.com/images/b4b1522d-3409-46c8-8c4d-f840bb2c6373.jpg', imageHint: 'tennis sport' },
  { id: '8', name: 'Yoga Deck', imageUrl: 'https://files.fivemerr.com/images/6a996d6c-b82d-4f49-a7e0-bb8588aceac3.jpg', imageHint: 'yoga meditation' },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 sm:py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500 ease-out">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-custom-gold text-center mb-3 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
          Amenities
        </h2>
        <div className="h-1 w-16 bg-custom-gold mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-100"></div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full animate-in fade-in slide-in-from-bottom-8 duration-500 ease-out delay-150"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {amenities.map((amenity, index) => (
              <CarouselItem key={amenity.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                  <Card className="overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-2xl">
                    <CardContent className="relative aspect-[4/3] p-0">
                      <Image
                        src={amenity.imageUrl}
                        alt={amenity.name}
                        data-ai-hint={amenity.imageHint}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md shadow">
                        *Artists Impression
                      </div>
                      <div className="absolute bottom-3 left-0 bg-background/80 text-foreground px-4 py-2 rounded-tr-xl rounded-br-xl text-sm font-semibold shadow-md">
                        {amenity.name}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-15px] sm:left-[-20px] md:left-[-25px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-foreground/60 hover:bg-foreground/80 text-background border-none transition-opacity hover:opacity-80" />
          <CarouselNext className="absolute right-[-15px] sm:right-[-20px] md:right-[-25px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-foreground/60 hover:bg-foreground/80 text-background border-none transition-opacity hover:opacity-80" />
        </Carousel>
        <p className="text-center text-muted-foreground font-body text-lg mt-12 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-300">
            Many more world-class amenities designed for your comfort and leisure. Contact us for the full list.
        </p>
      </div>
    </section>
  );
}
