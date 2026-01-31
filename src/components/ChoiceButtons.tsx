import React from 'react';
import { Choice } from '../types/game';
import { motion } from 'framer-motion';

interface ChoiceButtonsProps {
  choices: Choice[];
  onChoose: (choice: Choice) => void;
}

export const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ choices, onChoose }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-40 bg-black/40 backdrop-blur-[2px]">
      <div className="flex flex-col gap-4 max-w-2xl w-full px-4">
        {choices.map((choice, index) => (
          <motion.button
            key={choice.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChoose(choice)}
            className="group relative overflow-hidden bg-black/80 border border-white/20 p-6 text-left rounded-lg shadow-xl hover:border-cyan-400/50 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-lg text-white font-medium group-hover:text-cyan-100">
              {choice.text}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
