import React from 'react';
import { SceneView } from './SceneView';
import { MetersSidebar } from './MetersSidebar';

export const GameContainer: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-black overflow-hidden font-sans">
      <MetersSidebar />
      <div className="flex-1 relative">
        <SceneView />
      </div>
    </div>
  );
};
