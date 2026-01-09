"use client";
import Link from "next/link";

export default function Letter() {
  // REPLACE THIS WITH YOUR SONG ID
  const YOUTUBE_ID = "ho2SnjI4-58"; 

  return (
    // 1. Layout changed to 'justify-between' so footer sits at bottom
    // 2. Removed padding here so footer can be full width
    <main className="min-h-screen w-full flex flex-col items-center justify-between font-serif">
      
      {/* WRAPPER: Centers the letter and provides padding so it doesn't touch edges */}
      <div className="grow flex items-center justify-center w-full p-4">
        
        {/* THE NOTEBOOK PAPER */}
        <div className="paper-container relative w-full max-w-lg bg-white p-8 md:p-12 text-gray-800 leading-relaxed shadow-xl">
          
          {/* The Red Margin Line */}
          <div className="margin-line absolute top-0 bottom-0 left-12 border-l border-red-300"></div>

          {/* The Letter Content */}
          <div className="relative z-10 font-serif text-[12px] md:text-[24px] leading-[1.8rem]">
            <p>
              My Dearest,
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris risus, lobortis a neque aliquet, ornare rutrum purus. Integer hendrerit ac est non cursus.
              <br/><br/>
              I love you more than words can write.
              <br/><br/>
              Yours,<br/>
              [Your Name]
            </p>
          </div>

          {/* CSS for the Lined Paper */}
          <style jsx>{`
            .paper-container {
              background-color: #fff;
              background-image: linear-gradient(#f5f5f0 1.7rem, #ccc 1.8rem);
              background-size: 100% 1.8rem;
              border-radius: 10px;
              box-shadow: 0 0 5px rgba(0,0,0,0.5);
            }
            .paper-container::before,
            .paper-container::after {
              content: "";
              position: absolute;
              bottom: 12px;
              width: 40%;
              height: 10px;
              box-shadow: 0 5px 14px rgba(0,0,0,0.5);
              z-index: -1;
              transition: all 0.3s ease;
            }
            .paper-container::before {
              left: 10px;
              transform: skew(-5deg) rotate(-5deg);
            }
            .paper-container::after {
              right: 10px;
              transform: skew(5deg) rotate(5deg);
            }
            .paper-container:hover::before,
            .paper-container:hover::after {
              box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            }
          `}</style>
        </div>
      </div>
      
      {/* Background Music Player */}
      <div className="fixed bottom-4 right-4 z-50 opacity-50 hover:opacity-100 transition-opacity">
        <iframe 
          width="250" 
          height="80" 
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_ID}&controls=1`}
          title="Background Music"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ borderRadius: '12px' }}
        />
      </div>

      {/* NEW FOOTER */}
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