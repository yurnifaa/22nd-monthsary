import { Tangerine } from "next/font/google";
import "./globals.css";
import Silk from "@/components/Silk";

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-tangerine",
});

export const metadata = {
  title: "22nd Monthsary w/ You",
  description: "A gift for my love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tangerine.variable} antialiased text-gray-800`}>
        <Silk 
          color="#e46cc0"
          speed={0.3} 
          noiseIntensity={2.50} 
        />
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}