"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20 md:py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-16 text-center">NEWS</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Latest News Item */}
              <div className="bg-gray-900 p-8">
                <h2 className="text-3xl font-bold mb-4">New Album Announcement</h2>
                <p className="text-gray-300 mb-6">
                  Eminem has been working on new material in the studio, according to close sources.
                  The upcoming album is expected to showcase his signature style while pushing new boundaries.
                </p>
                <Button variant="outline" className="rounded-none">
                  <Link href="https://rebelmusic.info/eminem-albums-release-dates/" target="_blank">
                  Read More
                  </Link>
                </Button>
              </div>

              {/* Previous News Item */}
              <div className="bg-gray-900 p-8">
                <h2 className="text-3xl font-bold mb-4">Eminem Bought His Old House to Help a Family in Need</h2>
                <p className="text-gray-300 mb-6">
                Eminem Buys Back His Old House to Help a Family in Need – What Happens After is Incredible! In an extraordinary act of compassion, Marshall Mathers, better known as Eminem
                </p>
                <Button variant="outline" className="rounded-none">
                <Link href="https://news75today.com/phamhuyen/eminem-bought-his-old-house-to-help-a-family-in-need-but-what-happened-next-was-shocking/" target="_blank">
                  Read More
                  </Link>
                </Button>
              </div>

              {/* Archive News Item */}
              <div className="bg-gray-900 p-8">
                <h2 className="text-3xl font-bold mb-4">Eminem Gives Sweet Shout-Out</h2>
                <p className="text-gray-300 mb-6">
                Eminem Gives Sweet Shout-Out in Honor of Daughter Hailie's Wedding Anniversary During Surprise Appearance at Jelly Roll Concert. Hailie and husband Evan McClintock celebrated their anniversary on Sunday, May 18
                </p>
                <Button variant="outline" className="rounded-none">
                  <Link href="https://www.msn.com/en-us/music/celebrity/eminem-gives-sweet-shout-out-in-honor-of-daughter-hailies-wedding-anniversary-during-surprise-appearance-at-jelly-roll-concert/ar-AA1F9EvI">Read More</Link>
                  
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}