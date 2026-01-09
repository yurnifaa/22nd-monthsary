import Link from "next/link";
import { MdAccessTime, MdOutlineChurch, MdRestaurant, MdStar } from "react-icons/md";

const events = [
  { 
    time: "10:00 AM", 
    title: "The Beginning",
    activity: "Meet up at Blumentritt station.", 
    icon: <MdAccessTime className="h-6 w-6 text-white" />
  },
  { 
    time: "11:00 AM", 
    title: "The Feast",
    activity: "We thank the Lord first for the 22 months we've spent together.", 
    icon: <MdOutlineChurch className="h-6 w-6 text-white" />
  },
  { 
    time: "01:00 PM", 
    title: "Lunch Break First!",
    activity: "Eat at a near by restaurant in PICC to recharge.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
    { 
    time: "03:00 PM", 
    title: "The Mind Museum",
    activity: "Enjoy the wonders of science and technology together in BGC.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
    { 
    time: "06:00 PM", 
    title: "Marugame Udon",
    activity: "Before going home, let's share a warm bowl of udon!", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
      { 
    time: "07:00 PM", 
    title: "The End!",
    activity: "We head back home with our hearts full and happy hehe xd.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
];

export default function DateTimeline() {
  return (
    <main className="min-h-screen w-full bg-transparent py-6 flex flex-col justify-center sm:py-12 font-serif">
      
      <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
        <h1 className="text-[80px] font-bold text-center text-white font-tangerine mb-12 text-shadow-lg">
          Sunday, January 11, 2026
        </h1>

        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          
          <div className="hidden sm:block w-1 bg-pink-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {events.map((event, index) => (
            <div key={index} className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                
                <div className={`flex w-full mx-auto items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                    
                    <div className="p-6 w bg-white/90 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 border-t-4 border-pink-400 relative">
                      <h3 className="text-pink-500 font-bold text-lg mb-1">{event.time}</h3>
                      <h4 className="text-gray-900 text-[36px] font-bold text-shadow-lg font-tangerine mb-2">{event.title}</h4>
                      <p className="text-gray-600 font-serif leading-relaxed">
                        {event.activity}
                      </p>
                    </div>

                  </div>
                </div>

                {/* The Center Icon */}
                <div className="rounded-full bg-pink-400 border-4 border-white w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center shadow-md z-10">
                  {event.icon}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/home" className="text-white text-2xl font-tangerine hover:scale-110 transition-transform inline-block border-b border-transparent hover:border-white">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}