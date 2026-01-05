"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, UserCircle } from "lucide-react";
import { useGeolocation } from "@/hooks/useGeolocation";
import { calculateDistance } from "@/lib/utils";

// Mock data for Udaipur prototype
const NEARBY_PLACES = [
  { name: "Ambrai Ghat", lat: 24.5702, lng: 73.6825, tags: ["Scenic", "Sunset"] },
  { name: "Badi Lake", lat: 24.6046, lng: 73.6454, tags: ["Hidden Gem", "Nature"] },
  { name: "Ahar Cenotaphs", lat: 24.5945, lng: 73.7142, tags: ["Heritage", "Quiet"] },
];

export default function Home() {
  const { location, error } = useGeolocation();

  return (
    <div className="flex h-screen bg-slate-50">
      {/* 1. SIDEBAR */}
      <aside className="w-64 bg-white border-r flex flex-col p-6 space-y-8">
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-blue-600">LakeCity AI</h1>
        </div>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start gap-2">
            <UserCircle size={18} /> Login
          </Button>
          <Button className="w-full">Sign Up</Button>
        </div>
        <nav className="flex-1 space-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase">Menu</p>
          <Button variant="ghost" className="w-full justify-start">🏠 Home</Button>
          <Button variant="ghost" className="w-full justify-start">✨ AI Planner</Button>
        </nav>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-8">
         
          <div className="w-1/2">
            <Input placeholder="Search Udaipur locations..." className="bg-slate-100" />
          </div>
          <div className="flex items-center gap-2">
            {error ? (
              <span className="text-red-500 text-xs">{error}</span>
            ) : location ? (
              <span className="text-green-600 text-xs flex items-center gap-1 font-medium">
                <MapPin size={14} />
                {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
              </span>
            ) : (
              <span className="text-slate-400 text-xs animate-pulse">Locating...</span>
            )}
          </div>
        </header>

        {/* LOCATION LIST */}
        <section className="p-8 space-y-4 overflow-y-auto">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <MapPin size={18} className="text-red-500" /> Nearby in Udaipur
          </h2>
          
          {NEARBY_PLACES.map((place, index) => {
            const distance = location
              ? `${calculateDistance(location.lat, location.lng, place.lat, place.lng).toFixed(1)} km`
              : "Calculating...";

            return (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-800">{place.name}</h3>
                  <p className="text-sm text-slate-500">{distance} from your location</p>
                </div>
                <div className="flex gap-2">
                  {place.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </section>
      </main>
    </div>
  );
}