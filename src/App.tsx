import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { YourStats } from "./components/YourStats";
import { BadgesStreaks } from "./components/BadgesStreaks";
import { ComparisonTable } from "./components/ComparisonTable";
import { Leaderboard } from "./components/Leaderboard";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentScreen} />;
      case 'stats':
        return <YourStats onNavigate={setCurrentScreen} />;
      case 'badges':
        return <BadgesStreaks onNavigate={setCurrentScreen} />;
      case 'comparison':
        return <ComparisonTable onNavigate={setCurrentScreen} />;
      case 'leaderboard':
        return <Leaderboard onNavigate={setCurrentScreen} />;
      default:
        return <Dashboard onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="size-full">
      {renderScreen()}
    </div>
  );
}