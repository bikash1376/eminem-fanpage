"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 500, 0.2);
      const scale = Math.max(1 + scrollY / 2000, 1);
      const translateY = scrollY * 0.5;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `scale(${scale}) translateY(-${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="h-screen relative overflow-hidden">
      <div 
        ref={heroRef} 
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/PV6uLfBOqOE?si=Zi-n5k3R6J-Ayj86&start=18&autoplay=1&mute=1&controls=0&loop=1&playlist=PV6uLfBOqOE&modestbranding=1&rel=0"
            title="YouTube video player"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] pointer-events-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"
      />
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="block">MARSHALL</span>
          <span className="block mt-2">MATHERS</span>
        </h1>
        <div className="w-20 h-1 bg-white mb-6"></div>
        <p className="text-xl md:text-2xl max-w-xl mb-8 text-gray-200">
          The Legacy Continues
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="rounded-none bg-white text-black hover:bg-gray-200">
            <Link href="/discography">
              EXPLORE MUSIC
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-none">
            <Link href="/about">ABOUT</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}