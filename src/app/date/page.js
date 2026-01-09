const events = [
  { time: "10:00 AM", activity: "Pick up / Meet up" },
  { time: "12:00 PM", activity: "Lunch at our favorite spot" },
  { time: "03:00 PM", activity: "Surprise Activity" },
];

export default function DateTimeline() {
  return (
    <main className="min-h-screen bg-lana-offwhite p-8 font-serif">
      <h2 className="text-center text-2xl mb-12 italic text-lana-pink underline decoration-1">Sunday, January 11, 2026</h2>
      <div className="max-w-md mx-auto border-l-2 border-lana-pink pl-6 space-y-12">
        {events.map((e, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-7.75 top-1 w-4 h-4 rounded-full bg-lana-pink border-2 border-white" />
            <p className="text-sm text-pink-400">{e.time}</p>
            <p className="text-lg text-gray-700">{e.activity}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-20">
        <a href="/home" className="text-lana-pink italic border border-lana-pink px-4 py-2">Back to Home</a>
      </div>
    </main>
  );
}