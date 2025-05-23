"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Lil Wayne named Eminem in his top 5 rappers",
    summary: "During a recent interview, Lil Wayne praised Eminem's technical skill and influence on hip-hop.",
    image: "https://townsquare.media/site/252/files/2011/12/eminem_weezy.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
    category: "top5",
    date: "06.29.2024",
    url: "https://eminem.news/lil-wayne-top5.html"
  },
  {
    id: 2,
    title: "Goldins Auctions Unveils Rare Eminem Artifact in Netflix Show",
    summary: "A never-before-seen Eminem collectible was featured in a recent episode of a popular Netflix auction series.",
    image: "https://eminem.news/wp-content/uploads/2023/08/Eminem-Signs-Infinite.jpg",
    category: "netflix",
    date: "06.15.2024",
    url: "https://eminem.news/goldins-infinite.html"
  },
  {
    id: 3,
    title: "'The Eminem Show' Certified 18x Platinum in Australia",
    summary: "Eminem's landmark 2002 album continues to achieve new sales milestones over two decades after its release.",
    image: "https://eminem.news/wp-content/uploads/2024/06/Eminem-Detroit-Show-5.jpg",
    category: "show",
    date: "06.02.2024",
    url: "https://eminem.news/tes-18x-platinum-aria.html"
  },
  // {
  //   id: 4,
  //   title: "Eminem Announces New Album 'The Death of Slim Shady'",
  //   summary: "The legendary rapper teases his return with a cryptic trailer for his upcoming album.",
  //   image: "https://images.pexels.com/photos/8468544/pexels-photo-8468544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   category: "album",
  //   date: "05.29.2024",
  //   url: "/news/eminem-announces-new-album"
  // }
];

export default function FeaturedNews() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  
  useEffect(() => {
    const showItems = () => {
      const newVisibleItems: number[] = [];
      
      NEWS_ITEMS.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * 200);
      });
      
      return newVisibleItems;
    };
    
    showItems();
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">FEATURED NEWS</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large featured news */}
          <div className={cn(
            "col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden group transition-opacity duration-700",
            visibleItems.includes(0) ? "opacity-100" : "opacity-0"
          )}>
            <Link href={NEWS_ITEMS[0].url} className="block h-full">
              <div className="relative h-[600px]">
                <Image
                  src={NEWS_ITEMS[0].image}
                  alt={NEWS_ITEMS[0].title}
                  fill
                  className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block bg-white text-black text-xs px-2 py-1 mb-4">
                    #{NEWS_ITEMS[0].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                    {NEWS_ITEMS[0].title}
                  </h3>
                  <p className="text-gray-300 mb-4 max-w-2xl">
                    {NEWS_ITEMS[0].summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{NEWS_ITEMS[0].date}</span>
                    <span className="text-white flex items-center group-hover:translate-x-2 transition-transform">
                      READ MORE <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Smaller news items */}
          {NEWS_ITEMS.slice(1).map((item, index) => (
            <div 
              key={item.id}
              className={cn(
                "col-span-1 relative overflow-hidden group transition-opacity duration-700",
                visibleItems.includes(index + 1) ? "opacity-100" : "opacity-0"
              )}
            >
              <Link href={item.url} className="block h-full">
                <div className="relative h-[280px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                    <span className="inline-block bg-white text-black text-xs px-2 py-1 mb-3">
                      #{item.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">{item.date}</span>
                      <span className="text-white flex items-center group-hover:translate-x-2 transition-transform">
                        READ MORE
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors"
          >
            VIEW ALL NEWS <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}