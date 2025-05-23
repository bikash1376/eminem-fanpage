"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Link from 'next/link';

const ALBUMS = [
  {
    id: 1,
    title: "The Death of Slim Shady",
    year: 2025,
    image: "https://i.ytimg.com/vi/0QvdDX2Q7rI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDAA3El8in370jcVcZKm0EfGpSBhQ",
    type: "Studio Album",
    playlistUrl: "https://www.youtube.com/playlist?list=PLN1mxegxWPd0GfRvWy_WzwpNKnqSWTV5U"
  },
  {
    id: 2,
    title: "Music To Be Murdered By",
    year: 2020,
    image: "https://i.ytimg.com/vi/xVpiQQsq44Y/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYUiBPKGUwDw==&rs=AOn4CLCGh52Z-O_T97bShbZBaVMDfmJeCg",
    type: "Studio Album",
    playlistUrl: "https://www.youtube.com/playlist?list=PLN1mxegxWPd3Gtec8sCAsmSv_Gf9u0FEE"
  },
  {
    id: 3,
    title: "Kamikaze",
    year: 2018,
    image: "https://i9.ytimg.com/s_p/OLAK5uy_nId4aStP-eFWiSYeOJGwcoty17mIZjW8A/maxresdefault.jpg?sqp=CKTgwcEGir7X7AMICPPhmr0GEAE=&rs=AOn4CLD2W2PN53W1jm2TtuQFB2DSZDIZQQ&v=1738977523",
    type: "Studio Album",
    playlistUrl: "https://youtube.com/playlist?list=OLAK5uy_nId4aStP-eFWiSYeOJGwcoty17mIZjW8A&si=gEoNPpRsJLxpX1lA"
  },
  {
    id: 4,
    title: "Revival",
    year: 2017,
    image: "https://i9.ytimg.com/s_p/OLAK5uy_m8R1SwPPUCgq777T9Nt-zLRzaekFmhet0/maxresdefault.jpg?sqp=CNDiwcEGir7X7AMICM2Bvr0GEAE=&rs=AOn4CLAmL1Xhgx_wehp2CP0IeHYFf3K4fA&v=1739555021",
    type: "Studio Album",
    playlistUrl: "https://youtube.com/playlist?list=OLAK5uy_m8R1SwPPUCgq777T9Nt-zLRzaekFmhet0&si=rFk7w_oQYmeCLjdY"
  }
];

export default function DiscographyPage() {
  const [selectedType, setSelectedType] = useState('all');

  const handlePlaylistClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-16 text-center">DISCOGRAPHY</h1>
        <div className="w-20 h-1 bg-white mx-auto mb-12"></div>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant={selectedType === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedType('all')}
            className="rounded-none"
          >
            ALL
          </Button>
          <Button 
            variant={selectedType === 'Studio Album' ? 'default' : 'outline'}
            onClick={() => setSelectedType('Studio Album')}
            className="rounded-none"
          >
            STUDIO ALBUMS
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALBUMS.filter(album => selectedType === 'all' || album.type === selectedType).map((album) => (
            <div key={album.id} className="group relative">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="rounded-full aspect-square"
                    onClick={() => handlePlaylistClick(album.playlistUrl)}
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{album.title}</h3>
                <p className="text-gray-400">{album.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="mt-12 mb-20 rounded-none bg-white text-black hover:bg-gray-200"
          >
            <Link href="https://www.youtube.com/@eminem/playlists" target="_blank" rel="noopener noreferrer">VIEW MORE</Link>
          </Button>
        </div>
    </div>
  );
}