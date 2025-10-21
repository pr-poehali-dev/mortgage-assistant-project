import { useEffect, useState } from 'react';

interface FloatingEmoji {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

const MoneyBackground = () => {
  const [emojis, setEmojis] = useState<FloatingEmoji[]>([]);

  const emojiList = ['🥭', '💰', '💵', '💴', '💶', '💷', '💸', '🪙', '💳', '💎', '🏆', '👑'];

  useEffect(() => {
    const generateEmojis = () => {
      const newEmojis: FloatingEmoji[] = [];
      for (let i = 0; i < 25; i++) {
        newEmojis.push({
          id: i,
          emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 30 + 20,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
          rotation: Math.random() * 360,
        });
      }
      setEmojis(newEmojis);
    };

    generateEmojis();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {emojis.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float opacity-10"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            transform: `rotate(${item.rotation}deg)`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default MoneyBackground;
