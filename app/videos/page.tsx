"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import VideoModal from "../components/VideoModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VIDEOS = [
  {
    id: 1,
    title: "Eminem - Houdini [Official Music Video]",
    thumbnail: "https://i.ytimg.com/vi/22tVWwmTie8/maxresdefault.jpg",
    duration: "2:45",
    videoId: "22tVWwmTie8",
  },
  {
    id: 2,
    title: "Eminem - Venom",
    thumbnail: "https://i.ytimg.com/vi/8CdcCD5V-d8/maxresdefault.jpg",
    duration: "4:12",
    videoId: "8CdcCD5V-d8",
  },
  {
    id: 3,
    title: "Eminem - Godzilla (Lyric Video) ft. Juice WRLD",
    thumbnail: "https://i.ytimg.com/vi/3qFvCPmee8U/maxresdefault.jpg",
    duration: "3:58",
    videoId: "3qFvCPmee8U",
  },
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-16 text-center">
          MUSIC VIDEOS
        </h1>
        <div className="w-20 h-1 bg-white mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS.map((video) => (
            <div key={video.id} className="group relative">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  onClick={() => setSelectedVideo(video.videoId)}
                >
                  <div className="rounded-full bg-white p-4">
                    <Play className="h-8 w-8 text-black" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black px-2 py-1 text-sm">
                  {video.duration}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{video.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="mt-12 rounded-none bg-white text-black hover:bg-gray-200"
          >
            <Link href="/discography">VIEW DISCOGRAPHY</Link>
          </Button>
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo || ""}
      />
    </div>
  );
}
