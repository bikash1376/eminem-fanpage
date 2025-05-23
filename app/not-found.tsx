import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <div className="w-20 h-1 bg-white mb-8"></div>
      <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Looks like you've ventured into uncharted territory. This page doesn't exist or has been moved.
      </p>
      <Button asChild className="rounded-none">
        <Link href="/">RETURN HOME</Link>
      </Button>
    </div>
  );
}