export default function Letter() {
  return (
    <main className="min-h-screen bg-transparent p-6 flex flex-col items-center overflow-y-auto">
      <div className="bg-lana-offwhite w-full max-w-2xl p-10 shadow-2xl my-8 min-h-150 relative">
        <p className="leading-loose text-gray-800 italic whitespace-pre-line">
          My Dearest... [Your Letter Here] ...
        </p>
      </div>
      
      {/* Background Music Player */}
      <div className="fixed bottom-4 right-4">
        <iframe src="https://open.spotify.com/embed/track/4X76p59vS7pY6Hjsh4A6uY?utm_source=generator" width="250" height="80" allow="autoplay"></iframe>
      </div>

      <a href="/home" className="mt-4 text-white underline italic">Go Back</a>
    </main>
  );
}