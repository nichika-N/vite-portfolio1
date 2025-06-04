import React from "react";

function Portfolio() {
  return (
    <div className="relative w-screen min-h-screen p-6 space-y-6 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-blue-gradient.png')" }}>
      {/* 🌟 タイトル */}
      <div className="flex flex-wrap px-4 pt-6 z-10 relative">
        {"About Me".split("").map((char, index) => (
          <span key={index} style={{ animation: `fadeIn 0.4s ease-out ${index * 0.1}s both` }}>
            <span className="text-white text-4xl md:text-5xl tracking-wide animate-glow-text" style={{ fontFamily: "'Send Flowers', cursive" }}>
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </div>

      {/* 🧑‍🏠 自己紹介カード */}
      <div className="bg-white/60 p-6 rounded-2xl shadow-md w-full z-10 relative animate-fadeIn transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:backdrop-blur-md" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
        <p className="text-xl font-semibold text-black">
          Name
          <span className="ml-2">
            <ruby style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              中村 日知花
              <rt className="text-sm not-italic font-normal">ナカムラ ニチカ</rt>
            </ruby>
          </span>
        </p>
        <p className="mt-4 text-black">
          このポートフォリオは、自分の学びを形にするために作成しました。<br />
          実際に手を動かしながら習得してきた技術を組み合わせています。<br />
          「どんなことができるようになったか」を見てもらえるように、デザインやアニメーションも工夫しました。
        </p>
      </div>

      {/* 📋 業務経歴タイムライン */}
      <div className="bg-white/60 p-6 rounded-2xl shadow-md w-full z-10 relative animate-fadeIn transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:backdrop-blur-md" style={{ animationDelay: "1s", animationFillMode: "both" }}>
        <h2 className="text-xl font-bold mb-6 border-b pb-2 text-black">Work Experience</h2>
        <div className="space-y-8">
          {/* 経歴1 */}
          <div className="flex items-start">
            <div className="w-44 text-sm font-semibold text-black pt-1 whitespace-nowrap">2018年4月〜2021年9月</div>
            <div className="flex flex-col items-center mr-4 min-h-[60px]">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
              <div className="flex-1 w-px grow h-full animate-glowLine"></div>
            </div>
            <div className="flex-1">
              <p className="text-base font-bold text-black">歯科術生士として勤務</p>
              <p className="text-sm text-black mt-1">
                歯科予防処置やホワイトニングの施術、インプラント手術・歯科矩正の診療補助など、歯科術生士として一連の業務を実施。
              </p>
            </div>
          </div>

          {/* 経歴2 */}
          <div className="flex items-start">
            <div className="w-44 text-sm font-semibold text-black pt-1 whitespace-nowrap">2021年10月〜2025年4月</div>
            <div className="flex flex-col items-center mr-4 min-h-[60px]">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
              <div className="flex-1 w-px grow h-full animate-glowLine"></div>
            </div>
            <div className="flex-1">
              <p className="text-base font-bold text-black">歯科材料・機器メーカーで技術サポート</p>
              <p className="text-sm text-black mt-1">
                営業部門カスタマーサービスセンターにて、治療、製品に関する問い合わせ対応( 電話、メール )
              </p>
            </div>
          </div>

          {/* 経歴3 */}
          <div className="flex items-start">
            <div className="w-44 text-sm font-semibold text-black pt-1 whitespace-nowrap">2025年5月〜</div>
            <div className="flex flex-col items-center mr-4 min-h-[60px]">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
              <div className="flex-1 w-px grow h-full animate-glowLine"></div>
            </div>
            <div className="flex-1">
              <div className="mt-1 space-y-1 text-sm text-black">
                <p className="text-base font-bold text-black">入社</p>
                <p className="text-sm text-black mt-1">社内研修</p>
                <div className="flex">
                  <span className="w-28">フロントエンド：</span>
                  <span>React / Node.js</span>
                </div>
                <div className="flex">
                  <span className="w-28">バックエンド：</span>
                  <span>Java / Spring Boot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🛠 Skill + Works（横並び） */}
      <div className="flex flex-col md:flex-row gap-4 w-full z-10 relative">
        {/* Skill カード */}
        <div className="bg-white/60 p-4 rounded-2xl shadow-md flex-1 animate-fadeIn transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:backdrop-blur-md" style={{ animationDelay: "1.5s", animationFillMode: "both" }}>
          <h2 className="text-lg font-semibold text-black mb-2">Skill（スキル）</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black text-sm">
            <div>
              <h3 className="font-bold mb-1">（言語・フレームワーク）</h3>
              <ul className="list-disc list-inside">
                <li>Java / Spring Boot</li>
                <li>HTML / CSS / JavaScript</li>
                <li>React / Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-1">（開発環境）</h3>
              <ul className="list-disc list-inside">
                <li>VS Code</li>
                <li>Git</li>
                <li>CLI操作</li>
                <li>Node.js</li>
                <li>Vite / npm</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-1">（実装スキル）</h3>
              <ul className="list-disc list-inside">
                <li>REST API / JSON連携</li>
                <li>レスポンシブ対応</li>
                <li>CSSアニメーション（Keyframes）</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Works カード */}
        <div className="bg-white/60 p-4 rounded-2xl shadow-md flex-1 animate-fadeIn transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:backdrop-blur-md" style={{ animationDelay: "1.8s", animationFillMode: "both" }}>
          <h2 className="text-lg font-semibold text-black mb-2">Works（開発物）</h2>
          <div className="space-y-4 text-black text-sm">
            <div>
              <p className="font-bold">自己紹介ポートフォリオ</p>
              <p>Java（Spring Boot）＋ React（Vite）＋ Tailwind CSS</p>
              <p>APIから自己紹介を取得して表示</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
