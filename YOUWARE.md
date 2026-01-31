# Tides & Threads - Interactive Environmental Storytelling Game

A cinematic, choice-based visual novel focused on environmental awareness and sustainability. Built with React, TypeScript, and Tailwind CSS.

## Project Overview

**Tides & Threads** places the player in the coastal city of Neovara, where everyday decisions impact the environment. The game features a complex branching narrative where choices affect not just the story, but the world state itself (Air Quality, Water Level, Biodiversity).

### Key Features

- **Visual Novel Engine**: Custom-built JSON-based scene engine supporting multi-character dialogue, expressions, and branching paths.
- **Responsibility Meter System**: Real-time tracking of Awareness, Impact, Empathy, and Action.
- **World State Simulation**: Choices visibly affect the game world (smog overlays, rain effects, lighting).
- **Emotion Engine**: Tracks the emotional tone of the narrative (Fear, Hope, Empowerment).
- **Cinematic Presentation**: Typewriter dialogue, animated character entrances, and dramatic scene transitions.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion (for animations)
- **State Management**: Zustand (Game state, meters, history)
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/
│   ├── GameContainer.tsx    # Main layout wrapper
│   ├── SceneView.tsx        # Core visual renderer
│   ├── DialogueBox.tsx      # Typewriter text & interaction
│   ├── ChoiceButtons.tsx    # Decision interface
│   ├── CharacterStage.tsx   # Character rendering & animation
│   ├── MetersSidebar.tsx    # HUD for game stats
│   └── WorldEffects.tsx     # Visual overlays (rain, smog)
├── data/
│   └── scenes.ts            # Narrative content & logic
├── store/
│   └── gameStore.ts         # Zustand state management
├── types/
│   └── game.ts              # TypeScript interfaces
└── App.tsx                  # Entry point
```

## Game Mechanics

### Scene Structure
Each scene is defined in `src/data/scenes.ts` and includes:
- **Dialogue**: Array of lines with speaker and expression.
- **Choices**: 3 options per decision point.
- **Impact**: Numerical changes to game state (e.g., `{ airQuality: -5, awareness: +10 }`).

### Ending Calculation
The game tracks cumulative scores. Endings are determined in `gameStore.ts` based on final meter values:
- **Climate Champion**: High Action & Impact
- **Community Catalyst**: High Empathy & Awareness
- **Unintentional Polluter**: Low Impact
- **Passive Observer**: Default

## Development

### Adding New Scenes
1. Open `src/data/scenes.ts`.
2. Add a new entry to the `scenes` object.
3. Define the `id`, `background`, `dialogue`, and `choices`.
4. Link to it from a previous scene's `nextSceneId`.

### Customizing Assets
- **Backgrounds**: Update `getBackground` in `SceneView.tsx` to use real images instead of CSS gradients.
- **Characters**: Update `CharacterStage.tsx` to render images instead of colored placeholders.

## Build & Run

```bash
npm install
npm run dev   # Start development server
npm run build # Build for production
```
