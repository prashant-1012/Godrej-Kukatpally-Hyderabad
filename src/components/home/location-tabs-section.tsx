
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils';

interface LocationItem {
  name: string;
  distance: string;
}

interface LocationCategory {
  title: string;
  items: LocationItem[];
}

const locationData: LocationCategory[] = [
  {
    title: "Connectivity",
    items: [
      { name: "NH 65", distance: "3 Mins" },
      { name: "Kukatpally Metro Station", distance: "8 Mins" },
      { name: "Outer Ring Road (ORR)", distance: "9 Mins" },
      { name: "Bharatnagar Railway Station", distance: "10 Mins" },
      { name: "Begumpet Railway Station", distance: "14 Mins" },
      { name: "Lingampally Railway Station", distance: "18 Mins" },
      { name: "Inner Ring Road", distance: "22 Mins" },
      { name: "Rajiv Gandhi International Airport", distance: "28 Mins" },
    ],
  },
  {
    title: "Schools & Colleges",
    items: [
      { name: "Geethanjali Model School", distance: "3 Mins" },
      { name: "Samskruti International School", distance: "4 Mins" },
      { name: "Mount Litera Zee School & Kidzee Rainbow Vistas", distance: "4 Mins" },
      { name: "Birla Open Minds Pre School Kukatpally", distance: "4 Mins" },
      { name: "CGR International School", distance: "11 Mins" },
      { name: "Tapasya College Of Commerce & Management", distance: "12 Mins" },
      { name: "Siddhartha Degree And PG College", distance: "15 Mins" },
      { name: "Osmania University", distance: "30 Mins" },
    ],
  },
  {
    title: "Hospitals",
    items: [
      { name: "Sree Manju Hospitals", distance: "4 Mins" },
      { name: "NextGen Hospitals", distance: "7 Mins" },
      { name: "Prathima Hospitals", distance: "10 Mins" },
      { name: "Pace Hospitals", distance: "10 Mins" },
      { name: "Apollo Spectra Hospitals", distance: "13 Mins" },
    ],
  },
  {
    title: "Malls",
    items: [
      { name: "NSL Centrum Mall", distance: "4 Mins" },
      { name: "Nexus Hyderabad Mall", distance: "6 Mins" },
      { name: "LuLu Mall Hyderabad", distance: "9 Mins" },
      { name: "Inorbit Mall", distance: "14 Mins" },
      { name: "Sarath City Capital Mall", distance: "15 Mins" },
    ],
  },
  {
    title: "Business Hubs",
    items: [
      { name: "Mindspace IT Park", distance: "5 Mins" },
      { name: "Hitec City", distance: "5–10 Mins" },
      { name: "Cyber Towers", distance: "6 Mins" },
      { name: "Madhapur IT Hub", distance: "8 Mins" },
      { name: "Tech Mahindra", distance: "8 Mins" },
      { name: "Cognizant", distance: "9 Mins" },
      { name: "Gachibowli", distance: "10 Mins" },
      { name: "Kondapur", distance: "10 Mins" },
      { name: "TCS", distance: "12 Mins" },
      { name: "Wipro", distance: "12 Mins" },
      { name: "Infosys", distance: "14 Mins" },
      { name: "Nanakramguda", distance: "14 Mins" },
      { name: "Financial District", distance: "16 Mins" },
    ],
  },
];

interface LocationTabsSectionProps {
  onOpenEnquirePopup: () => void;
}

export function LocationTabsSection({ onOpenEnquirePopup }: LocationTabsSectionProps) {
  const [activeTab, setActiveTab] = useState(locationData[0].title);

  return (
    <section className="py-16 sm:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-6">
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full py-2.5 h-auto text-sm font-semibold text-custom-gold border-custom-gold shadow-sm focus:ring-custom-gold/80">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {locationData.map((category) => (
                  <SelectItem key={category.title} value={category.title} className="text-sm">
                    {category.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop TabsList */}
          <TabsList className="hidden md:grid grid-cols-2 gap-x-2 gap-y-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 w-full bg-transparent p-0 mb-12">
            {locationData.map((category) => (
              <TabsTrigger
                key={category.title}
                value={category.title}
                className={cn(
                  "px-3 py-2.5 text-xs sm:text-sm font-semibold rounded-lg shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ring-offset-background transition-all w-full h-auto",
                  activeTab === category.title
                    ? "bg-card text-custom-gold border border-custom-gold scale-105 z-10"
                    : "bg-custom-gold text-primary-foreground hover:bg-custom-gold/90"
                )}
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Shared Content Area */}
          {locationData.map((category) => (
            <TabsContent
              key={category.title}
              value={category.title}
              className="bg-card text-card-foreground p-6 md:p-8 rounded-xl shadow-xl border border-border mt-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="h-2.5 w-2.5 bg-custom-gold rounded-full mr-3 shrink-0"></span>
                    <span className="text-sm text-foreground">{item.name} – {item.distance}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="text-center mt-10 animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out delay-200">
          <Button
            onClick={onOpenEnquirePopup}
            size="lg"
            className="bg-custom-gold hover:bg-custom-gold/90 text-primary-foreground rounded-lg shadow-md px-8 transition-transform hover:scale-105"
          >
            Request Location Details
          </Button>
        </div>
      </div>
    </section>
  );
}

