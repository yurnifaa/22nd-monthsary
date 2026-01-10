"use client";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Letter() {
  // STATE: Track if music is playing
  const [isPlaying, setIsPlaying] = useState(false);
  
  // REF: Reference to the audio element
  const audioRef = useRef(null);

  // FUNCTION: Play/Pause when vinyl is clicked
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-between font-serif">
      
      <audio ref={audioRef} src="/song.mp3" loop />

      {/* LETTER SECTION */}
      <div className="grow flex flex-col items-center justify-center w-full p-4">
        
        {/* The Paper */}
        <div className="paper-container relative w-full max-w-lg bg-white p-8 md:p-12 text-gray-800 leading-relaxed shadow-xl">
          <div className="absolute top-0 bottom-0 left-12 border-l border-red-300"></div>
          <div className="relative z-10 pl-3 font-tangerine md:text-[30px] leading-[1.8rem] font-semibold">
            <p>
              My Dearest Karylle,
              <br/><br/>
              A year and two with you and i feel as thought our relationship has not aged a bit. Waking up just feels like I’m falling in love with you all over again. No combination of words in any language can ever begin to even define the love that i have for you. I wish to share the rest of my living months with you; all of my mornings, my afternoons, and my evenings with you. I hope you know how grateful I am to share this lifetime with you and how much good you have brought in my life. 
              <br/><br/>
              I love you inevitably, irrevocably, and most of all, unconditionally. Happy 22nd!
              <br/><br/>
              Forever Yours,<br/>
              Jana
            </p>
          </div>
        </div>

        {/* VINYL RECORD PLAYER */}
        <div 
          className="vinyl-wrapper cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-2"
          onClick={togglePlay}
        >
          {/* Helper Text */}
          {!isPlaying && (
             <p className="text-white text-[24px] font-tangerine animate-bounce drop-shadow-md">
               Tap to play our song ♪
             </p>
          )}

          <div className="vinyl-container">
            {/* The Record spins only when playing */}
            <div 
              className="plate-black" 
              style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
            >
              <div className="plate-border">
                <div className="plate-white">
                  <div className="plate-center"></div>
                </div>
              </div>
            </div>
            
            {/* The Arm moves when playing */}
            <div 
              className="player-arm transition-transform duration-500 origin-top-right"
              style={{ transform: isPlaying ? 'rotate(-45deg)' : 'rotate(0deg) translate(5px, -5px)' }}
            >
              <div className="player-arm-rect"></div>
              <div className="player-arm-circ"></div>
            </div>
          </div>
        </div>

      </div>
      
      {/* FOOTER */}
      <footer className="w-full relative z-10">
        <div className="bg-black mask-t-from-30% to-transparent w-full pt-16 pb-12 flex flex-col items-center justify-end">
          <hr className="border-pink-300/30 mb-8 w-3/4 max-w-2xl mx-auto" />  
          <Link href="/home" className="text-white text-[35px] font-tangerine hover:scale-110 transition-transform text-shadow-lg">
            ← Back to Home
          </Link>
        </div>
      </footer>

    </main>
  );
}