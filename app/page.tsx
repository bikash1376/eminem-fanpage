import Hero from '@/components/home/Hero';
import PhotoGrid from '@/components/home/PhotoGrid';
import FeaturedNews from '@/components/home/FeaturedNews';
import LatestRelease from '@/components/home/LatestRelease';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <PhotoGrid />
      <LatestRelease />
      <FeaturedNews />
    </div>
  );
}