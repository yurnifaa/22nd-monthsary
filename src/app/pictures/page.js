// src/app/pictures/page.js
"use client";
import DomeGallery from "@/components/DomeGallery";
import Link from "next/link";

export default function PicturesPage() {

  const myImages = [
    { src: '/photos/jarylle (1).jpg', alt: 'Jarylle (1)' },
    { src: '/photos/jarylle (2).jpg', alt: 'Jarylle (2)' },
    { src: '/photos/jarylle (3).jpg', alt: 'Jarylle (3)' },
    { src: '/photos/jarylle (4).jpg', alt: 'Jarylle (4)' },
    { src: '/photos/jarylle (5).jpg', alt: 'Jarylle (5)' },
    { src: '/photos/jarylle (6).jpg', alt: 'Jarylle (6)' },
    { src: '/photos/jarylle (7).jpg', alt: 'Jarylle (7)' },
    { src: '/photos/jarylle (8).jpg', alt: 'Jarylle (8)' },
    { src: '/photos/jarylle (9).jpg', alt: 'Jarylle (9)' },
    { src: '/photos/jarylle (10).jpg', alt: 'Jarylle (10)' },
    { src: '/photos/jarylle (11).jpg', alt: 'Jarylle (11)' },
    { src: '/photos/jarylle (12).jpg', alt: 'Jarylle (12)' },
    { src: '/photos/jarylle (13).jpg', alt: 'Jarylle (13)' },
    { src: '/photos/jarylle (14).jpg', alt: 'Jarylle (14)' },
    { src: '/photos/jarylle (15).jpg', alt: 'Jarylle (15)' },
    { src: '/photos/jarylle (16).jpg', alt: 'Jarylle (16)' },
    { src: '/photos/jarylle (17).jpg', alt: 'Jarylle (17)' },
    { src: '/photos/jarylle (18).jpg', alt: 'Jarylle (18)' },
    { src: '/photos/jarylle (19).jpg', alt: 'Jarylle (19)' },
    { src: '/photos/jarylle (20).jpg', alt: 'Jarylle (20)' },
    { src: '/photos/jarylle (21).jpg', alt: 'Jarylle (21)' },
    { src: '/photos/jarylle (22).jpg', alt: 'Jarylle (22)' },
    { src: '/photos/jarylle (23).jpg', alt: 'Jarylle (23)' },
    { src: '/photos/jarylle (24).jpg', alt: 'Jarylle (24)' },
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