import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export default function CustomSongCart() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 space-y-12">
      {/* Home Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">🎵 Custom Song Creations</h1>
        <p className="text-lg">Book a unique, personalized song for any occasion.</p>
        <Button className="mt-4">Book Your Song</Button>
      </section>

      {/* Booking Form */}
      <section className="max-w-xl mx-auto">
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold">Customize Your Song</h2>
            <Input placeholder="Your Name" />
            <Input placeholder="Recipient's Name" />
            <Input placeholder="Occasion (e.g., Birthday, Wedding)" />
            <Input placeholder="Preferred Style (e.g., Romantic, Happy)" />
            <Textarea placeholder="Special message or lyrics you'd like to include" />
            <Button className="w-full">Add to Cart</Button>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="text-center space-y-2">
        <h2 className="text-2xl font-bold">📞 Contact Us</h2>
        <p>Email: custommusic@example.com</p>
        <p>Phone: +1 234 567 890</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        &copy; 2025 Custom Song Creations. All rights reserved.
      </footer>
    </div>
  );
}
