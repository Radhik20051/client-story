import React from 'react';
import { CharacterState } from '../types/game';
import { motion, AnimatePresence } from 'framer-motion';

interface CharacterStageProps {
  characters: CharacterState[];
}

export const CharacterStage: React.FC<CharacterStageProps> = ({ characters }) => {
  // Helper to get position styles
  const getPosition = (pos: string) => {
    switch (pos) {
      case 'left': return 'left-[10%]';
      case 'center': return 'left-1/2 -translate-x-1/2';
      case 'right': return 'right-[10%]';
      default: return 'left-1/2';
    }
  };

  // Helper to get expression color/style (placeholder for real assets)
  const getExpressionStyle = (expr: string) => {
    switch (expr) {
      case 'worried': return 'border-blue-400 shadow-blue-900/50';
      case 'happy': return 'border-yellow-400 shadow-yellow-900/50';
      case 'angry': return 'border-red-400 shadow-red-900/50';
      case 'determined': return 'border-purple-400 shadow-purple-900/50';
      default: return 'border-white/50 shadow-white/20';
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {characters.map((char) => (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className={`absolute bottom-0 h-[80%] w-64 md:w-80 ${getPosition(char.position)}`}
          >
            {/* Character Placeholder Visual */}
            <div className={`
              h-full w-full bg-gradient-to-t from-black/80 to-gray-800/50 
              backdrop-blur-sm border-t-4 rounded-t-3xl 
              flex flex-col items-center justify-end pb-32
              transition-colors duration-500
              ${getExpressionStyle(char.expression)}
            `}>
              <div className="text-6xl mb-4 opacity-50">
                {char.expression === 'happy' ? '😊' : 
                 char.expression === 'worried' ? '😰' : 
                 char.expression === 'angry' ? '😠' : 
                 char.expression === 'determined' ? '😤' : '😐'}
              </div>
              <span className="text-2xl font-bold text-white uppercase tracking-widest">
                {char.id}
              </span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
