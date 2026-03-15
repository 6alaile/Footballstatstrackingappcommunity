import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowLeft, Trophy } from "lucide-react";

interface YourStatsProps {
  onNavigate: (screen: string) => void;
}

const performanceData = [
  { match: 1, goals: 1, assists: 0, saves: 2 },
  { match: 2, goals: 2, assists: 1, saves: 1 },
  { match: 3, goals: 0, assists: 2, saves: 4 },
  { match: 4, goals: 3, assists: 1, saves: 0 },
  { match: 5, goals: 2, assists: 1, saves: 3 },
  { match: 6, goals: 1, assists: 3, saves: 2 },
];

export function YourStats({ onNavigate }: YourStatsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('dashboard')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <h1 className="text-2xl font-black text-black">Your Stats</h1>
          <div></div>
        </div>

        {/* Player Profile Card */}
        <Card className="p-6 border-2 border-green-100 bg-gradient-to-r from-white to-green-50">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16 bg-primary text-white">
              <div className="flex items-center justify-center h-full w-full text-xl font-black">MJ</div>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-black text-black">Marcus Johnson</h2>
              <p className="text-primary">Midfielder</p>
              <div className="flex items-center space-x-2 mt-2">
                <div className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">⚡ Level 8</div>
                <div className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-sm">🔥 Hot Streak</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center border-2 border-green-100">
            <div className="text-3xl mb-2">⚽</div>
            <div className="text-3xl font-black text-primary">18</div>
            <div className="text-sm text-muted-foreground">Total Goals</div>
          </Card>
          
          <Card className="p-4 text-center border-2 border-green-100">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-3xl font-black text-primary">12</div>
            <div className="text-sm text-muted-foreground">Assists</div>
          </Card>
          
          <Card className="p-4 text-center border-2 border-green-100">
            <div className="text-3xl mb-2">👟</div>
            <div className="text-3xl font-black text-primary">145</div>
            <div className="text-sm text-muted-foreground">Passes</div>
          </Card>
          
          <Card className="p-4 text-center border-2 border-green-100">
            <div className="text-3xl mb-2">🧤</div>
            <div className="text-3xl font-black text-primary">23</div>
            <div className="text-sm text-muted-foreground">Saves</div>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card className="p-6 border-2 border-green-100">
          <h3 className="mb-4 text-black">Performance Trend</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <XAxis 
                  dataKey="match" 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#00A651' }}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  axisLine={{ stroke: '#00A651' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '2px solid #00A651',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="goals" 
                  stroke="#00A651" 
                  strokeWidth={3}
                  dot={{ fill: '#00A651', strokeWidth: 2, r: 4 }}
                  name="Goals"
                />
                <Line 
                  type="monotone" 
                  dataKey="assists" 
                  stroke="#34D399" 
                  strokeWidth={2}
                  dot={{ fill: '#34D399', strokeWidth: 2, r: 3 }}
                  name="Assists"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* View Badges Button */}
        <Button 
          onClick={() => onNavigate('badges')}
          className="w-full h-14 bg-primary hover:bg-primary/90 text-white flex items-center justify-center space-x-3"
        >
          <Trophy className="h-5 w-5" />
          <span>View Badges & Streaks</span>
        </Button>
      </div>
    </div>
  );
}