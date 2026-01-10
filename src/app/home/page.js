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
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 font-serif">
      
      <h1 className="text-7xl md:text-[100px] font-tangerine text-white mb-8 md:mb-12 drop-shadow-md text-center leading-tight">
        Happy 22nd, My Love!
      </h1>
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-sm md:max-w-none justify-center items-center group">
        {tabs.map((tab) => (
          <Link key={tab.name} href={tab.path} className="w-full md:w-auto flex justify-center">
            <div 
              className={`
                h-30 w-full
                md:h-100 md:w-80
                
                rounded-2xl text-white shadow-xl cursor-pointer transition-all duration-500 ease-out
                flex md:flex-col flex-row items-center justify-start md:justify-center gap-4 md:gap-8 border border-white/20 px-6 md:px-0
                
                bg-linear-to-b ${tab.color}
                
                scale-100 grayscale-0 z-0
                md:group-hover:scale-[0.9] md:group-hover:grayscale-[0.6]
                hover:scale-105 md:hover:scale-110 hover:grayscale-0 hover:z-50 hover:shadow-2xl
              `}
            >
              {tab.icon.startsWith("/") ? (
                <div className="relative w-12 h-12 md:w-20 md:h-20 drop-shadow-md">
                  <Image src={tab.icon} alt={tab.name} fill className="object-contain"/>
                </div>
              ) : (
                <span className="text-5xl md:text-7xl drop-shadow-md filter">{tab.icon}</span>
              )}
              
              <div className="flex flex-col items-start md:items-center text-left md:text-center">
                <p className="text-5xl md:text-6xl font-bold font-tangerine">{tab.name}</p>
                <p className="text-[14px] md:text-[16px] font-serif italic opacity-80 mt-1">{tab.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}