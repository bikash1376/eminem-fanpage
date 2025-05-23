import Link from 'next/link';
import { Instagram, Twitter, Youtube, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">EMINEM</h3>
            <p className="text-gray-400 mb-4">
              Official fan website for Eminem, one of the greatest artists of all time.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/eminem" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com/eminem" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://youtube.com/eminem" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://music.apple.com/us/artist/eminem/111051" target="_blank" rel="noopener noreferrer" aria-label="Apple Music">
                <Music className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/videos" className="text-gray-400 hover:text-white transition-colors">Videos</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">MUSIC</h3>
            <ul className="space-y-2">
              <li><Link href="/discography" className="text-gray-400 hover:text-white transition-colors">Discography</Link></li>
              <li><Link href="https://www.eminem.com/lyrics/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Lyrics</Link></li>
              <li><a href="https://sxm.app.link/EminemSXM" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Shade 45</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Eminem Fan Website. This is an unofficial fan site. Not affiliated with Eminem or any of his companies.</p>
        </div>
      </div>
    </footer>
  );
}