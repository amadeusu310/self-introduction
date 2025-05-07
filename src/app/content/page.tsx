"use client";

//import { link } from "fs";
import React, { useState } from "react";

const cards = [
  {
    title: "山下 智也",
    description: "サークル: 経済学研究会、Doer（プログラミングサークル）",
    text: "Info：基本情報技術者試験、TOEIC 815点、長期インターン参加、バイト：情報教室の補助員",
    button: "clickHere!",
  },
  {
    title: "趣味：F1観戦、経済学、プログラミング",
    description: "studying React / TypeScript / Tailwind CSS / rails and so on",
    text: "完全に独学で、記事や本をみて勉強、５月から長期インターンを開始",
    button: "next",
  },
  {
    title: "SEとして、人々の役に立つようなサービスの構築に貢献したい",
    description: "長期インターンではデータベース系のsaas系の企業で勤務",
    text: "一年生のころに、IT基礎論でFEの存在をしりそこからITに興味をもった。",
    button: "back to top",
  },
  
];

export default function Content() {
  const [index, setIndex] = useState(0);
  const cardCount = cards.length;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cardCount);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 relative overflow-hidden">
      {/* 背景のオシャレな線 */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="8 8" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#dc2626" strokeWidth="2" strokeDasharray="12 6" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="8 8" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="8 8" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="8 8" />
      </svg>
      <main className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center z-10">
        <div className="relative w-full flex items-center justify-center h-[42rem] overflow-x-visible select-none" style={{perspective: '1200px'}}>
          {cards.map((card, i) => {
            // 回転ずし風の位置計算
            const pos = ((i - index + cards.length) % cards.length);
            let style = {};
            let scale = 0.7 * 1.5 * 1.4 / 1.2;
            let zIndex = 1;
            let opacity = 0.5;
            let translateX = (pos - 1) * 315;
            if (pos === 1) { // 右
              scale = 0.85 * 1.5 * 1.4 / 1.2; zIndex = 2; opacity = 0.8; translateX = 315;
            } else if (pos === 0) { // 中央
              scale = 1 * 1.5 * 1.4 / 1.2; zIndex = 3; opacity = 1; translateX = 0;
            } else if (pos === cards.length - 1) { // 左
              scale = 0.85 * 1.5 * 1.4 / 1.2; zIndex = 2; opacity = 0.8; translateX = -315;
            }
            style = {
              transform: `translateX(${translateX}px) scale(${scale})`,
              zIndex,
              opacity,
              transition: 'all 0.6s cubic-bezier(.77,0,.18,1)',
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: '595px',
              height: '385px',
              marginLeft: '-297px',
              marginTop: '-192px',
              pointerEvents: pos === 0 ? 'auto' : 'none',
            };
            return (
              <div key={i} style={style} className="bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-12">
                <h1 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight font-sans">{card.title}</h1>
                <p className="text-xl text-gray-700 font-sans text-center mb-2">{card.description}</p>
                <p className="text-lg text-gray-600 font-sans text-center mb-2">{card.text}</p>
                
                {pos === 0 && (
                  <button className="mt-8 px-10 py-4 rounded-full bg-neutral-900 text-white text-lg font-bold shadow-md hover:bg-neutral-700 transition-colors" onClick={handleNext}>{card.button || '次へ'}</button>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}