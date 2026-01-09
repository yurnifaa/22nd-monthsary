import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const tabs = [
    { 
      name: "Letter", 
      path: "/letter", 
      icon: "✉️",
      label: "My Words for You",
      color: "bg-radial from-[#e46cc0] to-[#160a13]/60"
    },
    { 
      name: "Date", 
      path: "/date", 
      icon: "📅", 
      label: "January 11, 2026",
      color: "bg-radial from-[#e46cc0] to-[#160a13]/60"
    },
    { 
      name: "Pictures", 
      path: "/pictures", 
      icon: "📸", 
      label: "Memories we've shared throughout",
      color: "bg-radial from-[#e46cc0] to-[#160a13]/60"
    },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-8 font-serif">
      <h1 className="text-[80px] font-bold font-tangerine text-white mb-12 drop-shadow-lg">
        Happy 22nd, My Love!
      </h1>
      
      <div className="flex flex-row gap-4 w-full justify-center items-center h-120 group">
        {tabs.map((tab) => (
          <Link key={tab.name} href={tab.path} className="h-full flex items-center">
            <div 
              className={`
                h-110 w-50 md:w-90 rounded-2xl text-white text-shadow-lg shadow-xl cursor-pointer transition-all duration-500 ease-out
                flex flex-col items-center justify-center gap-5 border border-white/20
                ${tab.color}
                
                scale-100 grayscale-0 z-0
                group-hover:scale-[0.9] group-hover:grayscale-[0.6]
                
                hover:scale-110 hover:grayscale-0 hover:z-50 hover:shadow-2xl
              `}
            >
              {tab.icon.startsWith("/") ? (
                <div className="relative w-20 h-20 drop-shadow-md">
                  <Image 
                    src={tab.icon} 
                    alt={tab.name}
                    fill 
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="text-7xl drop-shadow-md filter">{tab.icon}</span>
              )}
              
              <div className="flex flex-col items-center text-center">
                <p className="text-[55px] font-bold font-tangerine">{tab.name}</p>
                <p className="text-sm font-serif italic opacity-80">{tab.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}