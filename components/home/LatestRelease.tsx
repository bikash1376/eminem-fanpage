"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LatestRelease() {
  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            LATEST RELEASE
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Album Cover */}
            <div className="lg:w-2/5 relative aspect-square shadow-inset-vertical">
              <Image
                src="https://pbs.twimg.com/media/GSiH4udagAATKU4?format=jpg&name=large"
                alt="Latest Eminem Album"
                fill
                className="object-cover"
              />
            </div>

            {/* Player */}
            <div className="lg:w-3/5 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  THE REAL SLIM SHADY
                </h3>
                <p className="text-gray-400 mb-6">Eminem • 2025</p>

                <div className="space-y-4 mb-8">
                  <iframe 
                    style={{borderRadius: "12px"}} 
                    src="https://open.spotify.com/embed/track/3yfqSUWxFvZELEM4PmlwIR?utm_source=generator" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            className="rounded-none border-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW FULL DISCOGRAPHY
          </Button>
        </div>
      </div>
    </section>
  );
}
