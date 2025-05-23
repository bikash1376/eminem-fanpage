import Link from 'next/link';

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="font-bold text-2xl flex items-center"
      aria-label="Eminem"
    >
      <span className="bg-white text-black px-2">E</span>
      <span className="text-white ml-1">M</span>
    </Link>
  );
}