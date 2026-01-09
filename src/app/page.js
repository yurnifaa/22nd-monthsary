"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PinLock() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);
  const router = useRouter();

  // Focus the first input on load
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Only take the last char
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
    
    // Reset error when typing
    setError(false);
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code === "031124") {
      router.push("/home");
    } else {
      setError(true);
      // Shake animation or clear inputs could go here
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent font-serif p-4">
      
      {/* Main Card */}
      <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full max-w-md space-y-4">
        <div className="flex flex-col items-center justify-center relative rounded-xl p-8 bg-white/90 backdrop-blur-sm [box-shadow:var(--shadow)] overflow-hidden border border-white">
          
          <h6 className="text-3xl font-bold text-gray-800 mb-2">Baby Verification xd</h6>
          <p className="text-zinc-500 text-sm text-center mb-6 italic">
            Enter the date our story began (MMDDYY)
          </p>

          {/* 6-Digit Grid */}
          <div className="w-full flex justify-center gap-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`
                  w-10 h-12 sm:w-12 sm:h-14 
                  text-2xl text-center font-bold text-gray-700 
                  bg-white border rounded-md shadow-sm outline-none transition-all
                  focus:ring-2 focus:ring-pink-300 focus:border-pink-400
                  ${error ? "border-red-400 ring-2 ring-red-200" : "border-gray-200"}
                `}
                type="tel"
                maxLength={1}
                autoComplete="off"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            type="button"
            className="mt-2 w-full px-4 py-3 bg-pink-400 hover:bg-pink-500 text-white font-medium tracking-wider rounded-md transition-colors duration-200 shadow-md"
          >
            Verify
          </button>

          {/* Error Message & Song */}
          {error && (
            <div className="mt-6 text-center">
              <p className="text-pink-500 text-[22px] mb-3">That&apos;s not our date, bub...</p>
              <div className="rounded-lg overflow-hidden shadow-lg mx-auto w-full max-w-120">
                <iframe 
                  style={{ borderRadius: "12px" }} 
                  src="https://open.spotify.com/embed/track/0gEyKnHvgkrkBM6fbeHdwK?utm_source=generator&theme=0" 
                  width="100%" 
                  height="80" 
                  frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" >
                </iframe>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Small Card (Hint) */}
        <div className="flex flex-col items-center justify-center relative rounded-xl p-4 bg-white/80 [box-shadow:var(--shadow)]">
          <div className="text-sm text-gray-600 italic">
            <span className="text-pink-500 font-semibold">Please enter the 6-digits password into my heart...</span>
          </div>
        </div>
      </div>
    </div>
  );
}