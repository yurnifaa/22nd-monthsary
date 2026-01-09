// src/app/pictures/page.js
"use client";
import DomeGallery from "@/components/DomeGallery";
import Link from "next/link";

export default function PicturesPage() {

  const myImages = [
    { src: 'https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop', alt: 'Abstract art' },
    { src: 'https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop', alt: 'Modern sculpture' },
    { src: 'https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop', alt: 'Digital artwork' },
    { src: 'https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop', alt: 'Contemporary art' },
    // Add more...
  ];

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      
      <DomeGallery 
        images={myImages} 
        overlayBlurColor="#4a0e26" 
        grayscale={false}
      />

      <div className="absolute bottom-0 left-0 w-full z-50 pointer-events-none">
        <div className="bg-linear-to-t from-black/90 to-transparent w-full pt-20 pb-10 flex flex-col items-center justify-end pointer-events-auto">
          <hr className="border-pink-300/30 mb-6 w-3/4 max-w-2xl mx-auto" />  
          <Link href="/home" className="text-white text-[35px] font-tangerine hover:scale-110 transition-transform text-shadow-lg cursor-pointer">
            ← Back to Home
          </Link>
        </div>
      </div>

    </main>
  );
}