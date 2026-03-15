import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, Trophy, Target, Shield, Zap, Star, Award } from "lucide-react";

interface BadgesStreaksProps {
  onNavigate: (screen: string) => void;
}

const badges = [
  { id: 1, name: "Hat-trick Hero", icon: "⚽", description: "Score 3+ goals in a match", earned: true, color: "bg-yellow-100 text-yellow-800" },
  { id: 2, name: "Assist King", icon: "🎯", description: "5+ assists in a match", earned: true, color: "bg-blue-100 text-blue-800" },
  { id: 3, name: "Wall in Goal", icon: "🧤", description: "10+ saves in a match", earned: false, color: "bg-gray-100 text-gray-600" },
  { id: 4, name: "Perfect Passer", icon: "👟", description: "95%+ pass accuracy", earned: true, color: "bg-green-100 text-green-800" },
  { id: 5, name: "Speed Demon", icon: "⚡", description: "Fastest sprint in match", earned: false, color: "bg-gray-100 text-gray-600" },
  { id: 6, name: "Team Captain", icon: "👑", description: "Lead team to victory", earned: true, color: "bg-purple-100 text-purple-800" },
];

const streaks = [
  { type: "Goals", current: 3, description: "Scored in 3 consecutive games", active: true },
  { type: "Assists", current: 2, description: "Assisted in 2 consecutive games", active: true },
  { type: "Clean Sheets", current: 0, description: "No active streak", active: false },
];

export function BadgesStreaks({ onNavigate }: BadgesStreaksProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('stats')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <h1 className="text-2xl font-black text-black">Achievements</h1>
          <div></div>
        </div>

        {/* Achievement Summary */}
        <Card className="p-6 border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-black">Your Progress</h2>
              <p className="text-sm text-muted-foreground">Keep pushing your limits!</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-600">4/6</div>
              <div className="text-xs text-muted-foreground">Badges Earned</div>
            </div>
          </div>
        </Card>

        {/* Badges Grid */}
        <div>
          <h3 className="mb-4 text-black flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-primary" />
            <span>Badges Collection</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge) => (
              <Card 
                key={badge.id} 
                className={`p-4 text-center transition-all ${
                  badge.earned 
                    ? 'border-2 border-primary bg-gradient-to-br from-white to-green-50 shadow-lg' 
                    : 'border border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <div className={`text-3xl mb-2 ${badge.earned ? '' : 'grayscale'}`}>
                  {badge.icon}
                </div>
                <h4 className={`font-black text-sm mb-1 ${badge.earned ? 'text-black' : 'text-gray-500'}`}>
                  {badge.name}
                </h4>
                <p className={`text-xs ${badge.earned ? 'text-muted-foreground' : 'text-gray-400'}`}>
                  {badge.description}
                </p>
                {badge.earned && (
                  <Badge className={`mt-2 ${badge.color} text-xs`}>
                    Earned
                  </Badge>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Current Streaks */}
        <div>
          <h3 className="mb-4 text-black flex items-center space-x-2">
            <Zap className="h-5 w-5 text-primary" />
            <span>Current Streaks</span>
          </h3>
          <div className="space-y-3">
            {streaks.map((streak, index) => (
              <Card 
                key={index} 
                className={`p-4 ${
                  streak.active 
                    ? 'border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-white' 
                    : 'border border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      streak.active ? 'bg-orange-100' : 'bg-gray-200'
                    }`}>
                      {streak.active ? (
                        <Star className="h-5 w-5 text-orange-600" />
                      ) : (
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h4 className={`font-black ${streak.active ? 'text-black' : 'text-gray-500'}`}>
                        {streak.type} Streak
                      </h4>
                      <p className={`text-sm ${streak.active ? 'text-muted-foreground' : 'text-gray-400'}`}>
                        {streak.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-black ${
                      streak.active ? 'text-orange-600' : 'text-gray-400'
                    }`}>
                      {streak.current}
                    </div>
                    <div className="text-xs text-muted-foreground">Games</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Back to Stats Button */}
        <Button 
          onClick={() => onNavigate('stats')}
          className="w-full h-14 bg-primary hover:bg-primary/90 text-white flex items-center justify-center space-x-3"
        >
          <Award className="h-5 w-5" />
          <span>Back to Your Stats</span>
        </Button>
      </div>
    </div>
  );
}