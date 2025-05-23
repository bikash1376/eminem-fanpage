"use client";

import { Button } from '@/components/ui/button';
import { Disc as Discord, MessageSquare } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-16 text-center">COMMUNITY</h1>
        <div className="w-20 h-1 bg-white mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <Discord className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Join Our Discord</h2>
              <p className="text-gray-400 mb-6">Connect with other fans, share your favorite moments, and stay updated with exclusive content.</p>
              <Button asChild size="lg" className="rounded-none">
                <a href="https://discord.gg/eminem" target="_blank" rel="noopener noreferrer">
                  JOIN DISCORD
                </a>
              </Button>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <MessageSquare className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Reddit Community</h2>
              <p className="text-gray-400 mb-6">Join discussions, share theories, and connect with the worldwide Eminem community.</p>
              <Button asChild size="lg" className="rounded-none">
                <a href="https://reddit.com/r/eminem" target="_blank" rel="noopener noreferrer">
                  JOIN SUBREDDIT
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">"Not Afraid to Stand Together"</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join thousands of fans worldwide in our growing community. Share your passion for music, connect with fellow fans, and stay updated with exclusive content and discussions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}