import Link from "next/link";
import { MdAccessTime, MdOutlineChurch, MdPsychology } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { FaRegSadCry } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

const events = [
  { 
    time: "10:00 AM", 
    title: "The Beginning | Blumentritt Station",
    activity: "I shall meet you at Blumentritt station so that we can transport together on a Mabini jeep to PICC xd.", 
    icon: <MdAccessTime className="h-6 w-6 text-white" />
  },
  { 
    time: "11:00 AM", 
    title: "The Feast at the Bay Area",
    activity: "We thank the Lord first for the 22 months we've been able to spend together filled with love and security.", 
    icon: <MdOutlineChurch className="h-6 w-6 text-white" />
  },
  { 
    time: "01:00 PM", 
    title: "Lunch Break First!",
    activity: "We will eat at a near by restaurant in PICC to recharge before we set-off to BGC!", 
    icon: <IoFastFoodOutline className="h-6 w-6 text-white" />
  },
  { 
    time: "03:00 PM", 
    title: "The Mind Museum",
    activity: "We shall enjoy the wonders of science and technology together.", 
    icon: <MdPsychology className="h-6 w-6 text-white" />
  },
  { 
    time: "06:00 PM", 
    title: "Hold On! Dinner First...",
    activity: "Before going home, let's share a warm hot meal together before we part ways T_T.", 
    icon: <CiBowlNoodles className="h-6 w-6 text-white" />
  },
  { 
    time: "07:00 PM", 
    title: "The End! I'm going to miss you...",
    activity: "We'll travel back and head home with our hearts full and happy hehe xd.", 
    icon: <FaRegSadCry className="h-6 w-6 text-white" />
  },
];

export default function DateTimeline() {
  return (
    <main className="min-h-screen w-full bg-transparent pt-6 pb-0 sm:pt-12 sm:pb-0 flex flex-col justify-between font-serif">
      
      <div className="py-3 sm:max-w-5xl sm:mx-auto w-full px-2 sm:px-0">

        <h1 className="text-7xl md:text-[80px] font-bold text-center text-white font-tangerine mb-8 md:mb-12 text-shadow-lg leading-tight">
          Sunday, January 11, 2026
        </h1>

        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          <div className="hidden sm:block w-1 bg-pink-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {events.map((event, index) => (
            <div key={index} className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                
                <div className={`flex w-full mx-auto items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                    
                    <div className="p-4 md:p-6 w-full bg-white/80 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border-t-4 border-pink-400 relative">
                      <h3 className="text-pink-500/90 font-bold text-md md:text-lg mb-1">{event.time}</h3>
                      <h4 className="text-gray-900 text-3xl md:text-[36px] font-bold text-shadow-lg font-tangerine mb-2 leading-none">{event.title}</h4>
                      <p className="text-gray-600 font-serif leading-relaxed text-sm md:text-base">
                        {event.activity}
                      </p>
                    </div>

                  </div>
                </div>

                <div className="hidden sm:flex rounded-full bg-pink-400 border-4 border-white w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 items-center justify-center shadow-md z-10">
                  {event.icon}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      <footer className="mt-10 md:mt-15 w-full relative z-10">
        <div className="bg-black mask-t-from-30% to-transparent w-full pt-12 md:pt-16 pb-8 md:pb-12 flex flex-col items-center justify-end">
          <hr className="border-pink-300/30 mb-6 md:mb-8 w-3/4 max-w-2xl mx-auto" />  
          <Link href="/home" className="text-white text-3xl md:text-[35px] font-tangerine hover:scale-110 transition-transform text-shadow-lg">
            ← Back to Home
          </Link>
        </div>
      </footer>

    </main>
  );
}