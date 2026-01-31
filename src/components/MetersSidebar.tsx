import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Activity, Heart, Eye, Zap } from 'lucide-react';

export const MetersSidebar: React.FC = () => {
  const { meters } = useGameStore();

  const renderMeter = (label: string, value: number, icon: React.ReactNode, color: string) => (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1 text-white/80 text-sm font-medium">
        <div className="flex items-center gap-2">
          {icon}
          <span>{label}</span>
        </div>
        <span>{Math.round(value)}%</span>
      </div>
      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="w-64 bg-gray-900/90 backdrop-blur-md border-r border-white/10 p-6 flex flex-col h-full z-20">
      <h2 className="text-xl font-bold text-white mb-6 tracking-wider">STATUS</h2>
      
      {renderMeter('Awareness', meters.awareness, <Eye size={16} />, 'bg-blue-400')}
      {renderMeter('Impact', meters.impact, <Zap size={16} />, 'bg-yellow-400')}
      {renderMeter('Empathy', meters.empathy, <Heart size={16} />, 'bg-pink-400')}
      {renderMeter('Action', meters.action, <Activity size={16} />, 'bg-green-400')}

      <div className="mt-auto pt-6 border-t border-white/10">
        <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Current Objective</p>
        <p className="text-sm text-white/80 italic">"Navigate the rising tides of Neovara."</p>
      </div>
    </div>
  );
};
