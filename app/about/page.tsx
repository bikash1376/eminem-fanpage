"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20 md:py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-16 text-center">ABOUT</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8 leading-tight">
                  Marshall Bruce Mathers III, better known by his pseudonym Eminem, also known as his alter ego Slim Shady
                </h2>
                <div className="w-16 h-1 bg-white mb-8"></div>
                <p className="text-gray-300 mb-6">
                  Eminem is an American rapper, singer-songwriter, composer, music producer, producer and actor.
                </p>
                <p className="text-gray-300 mb-6">
                  In addition to his solo career, he was a member of the group D12 and the hip-hop duo Bad Meets Evil.
                </p>
                <p className="text-gray-300">
                  He is the best-selling music artist in the world, as well as the best-selling artist of the 2000s.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  // src=""
                  src="https://images3.alphacoders.com/978/978116.jpg"
                  alt="Eminem portrait"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            
            <div className="mb-24">
              <p className="text-gray-300 mb-6">
                He has been named one of the greatest musicians of all time by many magazines, including Rolling Stone, which ranked Eminem number 83 on its list of the 100 Greatest Artists, as well as number 91 on its list of the 100 Greatest Songwriters of All Time.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                <div className="aspect-square relative">
                  <Image
                    src="https://www.pixelstalk.net/wp-content/uploads/images7/Eminem-Wallpaper-HD-Free-download.jpg"
                    alt="Eminem"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative">
                  <Image
                    src="https://wallpaperaccess.com/full/10485.png"
                    alt="Eminem"
                    fill
                    className="object-top object-cover"
                  />
                </div>
                <div className="aspect-square relative">
                  <Image
                    src="https://cdn.justjared.com/wp-content/uploads/2022/11/eminem-rock/eminem-rock-roll-induction-performance-hailie-jade-35.jpg"
                    alt="Eminem"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative">
                  <Image
                    src="https://variety.com/wp-content/uploads/2017/10/eminem.jpg"
                    alt="Eminem"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                If you count the studio work of his groups, then Eminem has 14 albums that reached number one on the Billboard 200.
              </p>
              <p className="text-gray-300">
                As a solo artist, Eminem has sold more than 100 million albums worldwide and more than 107 million of his records and 44 million copies of his albums in America alone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] order-2 md:order-1 shadow-inset-vertical-two">
                <Image
                  src="https://eminem.news/wp-content/uploads/2020/06/Shady-Records-Eminem-2048x1138.jpg"
                  alt="Eminem standing"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-8 leading-tight">
                  Eminem has his own record label, and also has his own radio station, Shade 45, on Sirius XM Radio
                </h2>
                <div className="w-16 h-1 bg-white mb-8"></div>
                <p className="text-gray-300 mb-6">
                  In 2002, Eminem starred in the semi-autobiographical hip-hop drama 8 Mile. He won an Oscar for the film's song, becoming the first rap artist to win the award. He also appeared in cameos in the films "Funny People" (2009), "The Interview" (2014) and "The Wash" (2001).
                </p>
                <p className="text-gray-300">
                  Eminem has developed other ventures, including Shady Records with manager Paul Rosenberg. He also has his own channel, Shade 45, on Sirius XM Radio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section ref={ref} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">AWARDS & ACHIEVEMENTS</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black p-8 flex flex-col items-center">
                <div className="text-5xl font-bold mb-4">15</div>
                <h3 className="text-xl font-semibold mb-2">Grammy Awards</h3>
                <p className="text-gray-400 text-center">Including Best Rap Album for "The Marshall Mathers LP"</p>
              </div>
              
              <div className="bg-black p-8 flex flex-col items-center">
                <div className="text-5xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Academy Award</h3>
                <p className="text-gray-400 text-center">For "Lose Yourself" from the film 8 Mile</p>
              </div>
              
              <div className="bg-black p-8 flex flex-col items-center">
                <div className="text-5xl font-bold mb-4">11</div>
                <h3 className="text-xl font-semibold mb-2">MTV Awards</h3>
                <p className="text-gray-400 text-center">Including multiple Video of the Year awards</p>
              </div>
            </div>
            
            <Button className="mt-12 rounded-none bg-white text-black hover:bg-gray-200">
              <Link href="/discography">
              VIEW DISCOGRAPHY
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}