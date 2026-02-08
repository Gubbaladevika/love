import { useState } from "react";

const Home = () => {
  const [step, setStep] = useState(1);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-pink-50 overflow-hidden">

      {/* ❤️ Falling hearts (final stage) */}
      {step === 3 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="falling-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${18 + Math.random() * 22}px`,
              }}
            >
              ❤️
            </span>
          ))}
        </div>
      )}

      {/* 💌 Main Card */}
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-[90%] max-w-md relative z-10">

        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold text-pink-600 mb-6">
              Usha, do you like me? 💖
            </h1>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              >
                Yes 💕
              </button>

              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
              >
                No 🙈
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold text-pink-600 mb-4">
              Really? 🥺
            </h2>
            <p className="mb-6">
              Please don’t say no…  
              I’m asking from my heart 💗
            </p>

            <button
              onClick={() => setStep(3)}
              className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
            >
              Okay… Yes 💞
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              I knew it! 💘
            </h2>
            <p className="text-lg">
              This made my day ❤️  
              Thank you for saying yes 🥰
            </p>
          </>
        )}

      </div>
    </section>
  );
};

export default Home;
