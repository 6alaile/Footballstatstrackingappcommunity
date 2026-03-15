import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Crown, User } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { useState } from "react";

interface ComparisonTableProps {
  onNavigate: (screen: string) => void;
}

const playerData = [
  { id: 1, name: "Jordan Silva", goals: 15, assists: 8, passes: 120, tackles: 25, saves: 2, avatar: "JS" },
  { id: 2, name: "Marcus Johnson", goals: 18, assists: 12, passes: 145, tackles: 18, saves: 23, avatar: "MJ" },
  { id: 3, name: "Alex Rodriguez", goals: 12, assists: 15, passes: 160, tackles: 32, saves: 5, avatar: "AR" },
  { id: 4, name: "Sam Wilson", goals: 8, assists: 6, passes: 95, tackles: 45, saves: 38, avatar: "SW" },
  { id: 5, name: "Chris Thompson", goals: 22, assists: 4, passes: 88, tackles: 12, saves: 1, avatar: "CT" },
  { id: 6, name: "Jamie Lee", goals: 6, assists: 18, passes: 175, tackles: 28, saves: 8, avatar: "JL" },
];

export function ComparisonTable({ onNavigate }: ComparisonTableProps) {
  const [filter, setFilter] = useState("match");

  const getTopPerformer = (stat: keyof typeof playerData[0]) => {
    if (stat === 'name' || stat === 'id' || stat === 'avatar') return null;
    const max = Math.max(...playerData.map(p => p[stat] as number));
    return playerData.find(p => p[stat] === max)?.id;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
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
          <h1 className="text-2xl font-black text-black">Player Comparison</h1>
          <div></div>
        </div>

        {/* Filter */}
        <Card className="p-4 border-2 border-green-100">
          <div className="flex items-center justify-between">
            <h3 className="text-black">Filter by:</h3>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">By Match</SelectItem>
                <SelectItem value="week">By Week</SelectItem>
                <SelectItem value="month">By Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Comparison Table */}
        <Card className="overflow-hidden border-2 border-green-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left p-4 font-black">Player</th>
                  <th className="text-center p-4 font-black">⚽ Goals</th>
                  <th className="text-center p-4 font-black">🎯 Assists</th>
                  <th className="text-center p-4 font-black">👟 Passes</th>
                  <th className="text-center p-4 font-black">⚔️ Tackles</th>
                  <th className="text-center p-4 font-black">🧤 Saves</th>
                </tr>
              </thead>
              <tbody>
                {playerData.map((player, index) => (
                  <tr 
                    key={player.id} 
                    className={`border-b transition-colors hover:bg-green-50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10 bg-primary text-white">
                          <div className="flex items-center justify-center h-full w-full text-sm font-black">
                            {player.avatar}
                          </div>
                        </Avatar>
                        <div>
                          <p className="font-black text-black">{player.name}</p>
                          <p className="text-sm text-muted-foreground">Player #{player.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className={`inline-flex items-center space-x-1 ${
                        getTopPerformer('goals') === player.id ? 'text-primary' : ''
                      }`}>
                        {getTopPerformer('goals') === player.id && (
                          <Crown className="h-4 w-4 text-yellow-500" />
                        )}
                        <span className="font-black text-lg">{player.goals}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className={`inline-flex items-center space-x-1 ${
                        getTopPerformer('assists') === player.id ? 'text-primary' : ''
                      }`}>
                        {getTopPerformer('assists') === player.id && (
                          <Crown className="h-4 w-4 text-yellow-500" />
                        )}
                        <span className="font-black text-lg">{player.assists}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className={`inline-flex items-center space-x-1 ${
                        getTopPerformer('passes') === player.id ? 'text-primary' : ''
                      }`}>
                        {getTopPerformer('passes') === player.id && (
                          <Crown className="h-4 w-4 text-yellow-500" />
                        )}
                        <span className="font-black text-lg">{player.passes}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className={`inline-flex items-center space-x-1 ${
                        getTopPerformer('tackles') === player.id ? 'text-primary' : ''
                      }`}>
                        {getTopPerformer('tackles') === player.id && (
                          <Crown className="h-4 w-4 text-yellow-500" />
                        )}
                        <span className="font-black text-lg">{player.tackles}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className={`inline-flex items-center space-x-1 ${
                        getTopPerformer('saves') === player.id ? 'text-primary' : ''
                      }`}>
                        {getTopPerformer('saves') === player.id && (
                          <Crown className="h-4 w-4 text-yellow-500" />
                        )}
                        <span className="font-black text-lg">{player.saves}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Legend */}
        <Card className="p-4 border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-white">
          <div className="flex items-center justify-center space-x-2">
            <Crown className="h-5 w-5 text-yellow-500" />
            <span className="text-sm text-black">Crown indicates top performer in each category</span>
          </div>
        </Card>

        {/* Navigation Button */}
        <Button 
          onClick={() => onNavigate('leaderboard')}
          className="w-full h-14 bg-primary hover:bg-primary/90 text-white flex items-center justify-center space-x-3"
        >
          <Crown className="h-5 w-5" />
          <span>View Leaderboard</span>
        </Button>
      </div>
    </div>
  );
}