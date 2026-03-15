import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { Crown, Users, Target, Shield } from "lucide-react";

interface DashboardProps {
  onNavigate: (screen: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-black text-black tracking-tight">
            Kick<span className="text-primary">Stats</span>
          </h1>
          <p className="text-muted-foreground mt-2">Track your football journey</p>
        </div>

        {/* Today's Match Summary */}
        <Card className="p-6 border-2 border-green-100 bg-gradient-to-r from-white to-green-50">
          <h2 className="mb-4 text-black">Today's Match</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl">⚽</div>
              <div className="text-3xl font-black text-primary">2</div>
              <div className="text-sm text-muted-foreground">Goals</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🎯</div>
              <div className="text-3xl font-black text-primary">1</div>
              <div className="text-sm text-muted-foreground">Assists</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🧤</div>
              <div className="text-3xl font-black text-primary">3</div>
              <div className="text-sm text-muted-foreground">Saves</div>
            </div>
          </div>
        </Card>

        {/* Top Player of the Day */}
        <Card className="p-6 border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-black">Top Player Today</h3>
            <Crown className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 bg-primary text-white">
              <div className="flex items-center justify-center h-full w-full">JS</div>
            </Avatar>
            <div className="flex-1">
              <p className="font-black text-black">Jordan Silva</p>
              <p className="text-sm text-muted-foreground">3 Goals • 2 Assists</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-primary">5</div>
              <div className="text-xs text-muted-foreground">Points</div>
            </div>
          </div>
        </Card>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button 
            onClick={() => onNavigate('stats')}
            className="h-20 flex flex-col items-center justify-center space-y-2 bg-primary hover:bg-primary/90 text-white"
          >
            <Users className="h-6 w-6" />
            <span>Your Profile</span>
          </Button>
          
          <Button 
            onClick={() => onNavigate('comparison')}
            className="h-20 flex flex-col items-center justify-center space-y-2 bg-black hover:bg-black/90 text-white"
          >
            <Target className="h-6 w-6" />
            <span>Comparison</span>
          </Button>
          
          <Button 
            onClick={() => onNavigate('badges')}
            className="h-20 flex flex-col items-center justify-center space-y-2 bg-primary hover:bg-primary/90 text-white"
          >
            <Shield className="h-6 w-6" />
            <span>Badges & Streaks</span>
          </Button>
          
          <Button 
            onClick={() => onNavigate('leaderboard')}
            className="h-20 flex flex-col items-center justify-center space-y-2 bg-black hover:bg-black/90 text-white"
          >
            <Crown className="h-6 w-6" />
            <span>Leaderboard</span>
          </Button>
        </div>
      </div>
    </div>
  );
}