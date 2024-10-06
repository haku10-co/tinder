import React from 'react';

const Popup = () => {
  document.body.className = 'w-[20rem] h-[30rem] bg-gradient-to-b from-pink-500 to-purple-500';

  const handleClick = () => {
    alert('返信を生成中...');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h1 className="text-2xl font-bold text-white mb-8 text-center animate-pulse">
        Tinder返信
        <br />
        ジェネレーター
      </h1>
      <button
        onClick={handleClick}
        className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105 mb-6"
      >
        魅力的な返信を生成
      </button>
      <p className="text-white text-center text-sm mt-4">
        あなたの魅力を引き出す
        <br />
        返信を自動生成します
      </p>
    </div>
  );
};

export default Popup;
