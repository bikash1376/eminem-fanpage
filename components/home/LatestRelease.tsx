"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LatestRelease() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

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
                  THE DEATH OF SLIM SHADY
                </h3>
                <p className="text-gray-400 mb-6">Eminem • 2025</p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-gray-800 hover:bg-gray-800/50 px-2 rounded transition-colors">
                    <div className="flex items-center">
                      <span className="text-white mr-4">01</span>
                      <span>Slim Shady's Return</span>
                    </div>
                    <span className="text-gray-400">3:45</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-800 hover:bg-gray-800/50 px-2 rounded transition-colors bg-gray-800/30">
                    <div className="flex items-center">
                      <span className="text-white mr-4">02</span>
                      <span>Last One Standing</span>
                    </div>
                    <span className="text-gray-400">4:12</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-800 hover:bg-gray-800/50 px-2 rounded transition-colors">
                    <div className="flex items-center">
                      <span className="text-white mr-4">03</span>
                      <span>Detroit Nights</span>
                    </div>
                    <span className="text-gray-400">3:58</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-800 hover:bg-gray-800/50 px-2 rounded transition-colors">
                    <div className="flex items-center">
                      <span className="text-white mr-4">04</span>
                      <span>Legacy (feat. Dr. Dre)</span>
                    </div>
                    <span className="text-gray-400">5:21</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-800 hover:bg-gray-800/50 px-2 rounded transition-colors">
                    <div className="flex items-center">
                      <span className="text-white mr-4">05</span>
                      <span>The Final Verse</span>
                    </div>
                    <span className="text-gray-400">4:45</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">1:58</span>
                    <span className="text-sm text-gray-400">4:12</span>
                  </div>
                  <div className="h-1 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <SkipBack size={20} />
                    </button>
                    <button
                      onClick={togglePlay}
                      className="bg-white text-black rounded-full p-3 hover:bg-gray-200 transition-colors"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <SkipForward size={20} />
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Volume2 size={18} className="text-gray-400" />
                    <div className="w-20 h-1 bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-gray-400 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
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
