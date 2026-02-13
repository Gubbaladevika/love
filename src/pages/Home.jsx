import { useState } from "react";

const bestieMessages = [
  "Excuse me?? Besties don’t say no 😤💗",
  "Try again… we’re literally soul sisters 💕",
  "No button is broken when it comes to us 😌✨",
  "Final warning… best friend bond is forever 💞",
];

const Home = () => {
  const [step, setStep] = useState(1);
  const [noIndex, setNoIndex] = useState(0);

  const handleNoClick = () => {
    setNoIndex((prev) => (prev + 1) % bestieMessages.length);
    setStep(2);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 overflow-hidden">

      {/* Cute sparkles on final screen */}
      {step === 3 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="falling-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${16 + Math.random() * 20}px`,
              }}
            >
              ✨💖
            </span>
          ))}
        </div>
      )}

      <div className="bg-white/90 backdrop-blur p-8 rounded-3xl shadow-2xl text-center w-[90%] max-w-md relative z-10">

        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold text-purple-600 mb-6">
              Are we best friends forever? 👯‍♀️💗
            </h1>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
              >
                Obviously Yes 💕
              </button>

              <button
                onClick={handleNoClick}
                className="px-6 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
              >
                No 🙈
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold text-purple-600 mb-4">
              {bestieMessages[noIndex]}
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
              >
                Okay fine… Yes 💞
              </button>

              <button
                onClick={handleNoClick}
                className="px-6 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
              >
                Still No 😅
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              That’s my girl! 💖👯‍♀️
            </h2>
            <p className="text-lg">
              Best friends today, tomorrow, and forever ✨💕
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
