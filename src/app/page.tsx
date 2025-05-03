import React from "react";

const SFIntro: React.FC<{
  name?: string;
  description?: string;
  buttonText?: string;
}> = ({
  name = "AI Explorer",
  description = "銀河を旅するフロントエンドエンジニア。未知のUI/UXを探求中。",
  buttonText = "CONTACT",
}) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
    <div className="relative">
      {/* SF風グローアニメーション */}
      <div className="absolute inset-0 animate-pulse rounded-full bg-indigo-500 opacity-30 blur-2xl"></div>
      <div className="relative z-10 flex flex-col items-center p-8 rounded-xl bg-black/60 border border-indigo-400 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-300 tracking-widest animate-fade-in-down">
          {name}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-indigo-100 animate-fade-in-up text-center">
          {description}
        </p>
      </div>
    </div>
    <button className="mt-10 px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-400 text-white font-semibold shadow-lg transition-all duration-300 animate-flicker">
      {buttonText}
    </button>
    <style>{`
      @keyframes fade-in-down {
        0% { opacity: 0; transform: translateY(-30px);}
        100% { opacity: 1; transform: translateY(0);}
      }
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(30px);}
        100% { opacity: 1; transform: translateY(0);}
      }
      @keyframes flicker {
        0%, 100% { opacity: 1;}
        50% { opacity: 0.7;}
      }
      .animate-fade-in-down { animation: fade-in-down 1s ease; }
      .animate-fade-in-up { animation: fade-in-up 1.2s ease; }
      .animate-flicker { animation: flicker 2s infinite; }
    `}</style>
  </div>
);

export default function Home() {
  return <SFIntro />;
}