import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ArrowLeft, Crown, Medal, Trophy } from "lucide-react";
import { Avatar } from "./ui/avatar";

interface LeaderboardProps {
  onNavigate: (screen: string) => void;
}

const goalsLeaderboard = [
  { rank: 1, name: "Chris Thompson", goals: 22, avatar: "CT" },
  { rank: 2, name: "Marcus Johnson", goals: 18, avatar: "MJ" },
  { rank: 3, name: "Jordan Silva", goals: 15, avatar: "JS" },
  { rank: 4, name: "Alex Rodriguez", goals: 12, avatar: "AR" },
  { rank: 5, name: "Sam Wilson", goals: 8, avatar: "SW" },
  { rank: 6, name: "Jamie Lee", goals: 6, avatar: "JL" },
];

const assistsLeaderboard = [
  { rank: 1, name: "Jamie Lee", assists: 18, avatar: "JL" },
  { rank: 2, name: "Alex Rodriguez", assists: 15, avatar: "AR" },
  { rank: 3, name: "Marcus Johnson", assists: 12, avatar: "MJ" },
  { rank: 4, name: "Jordan Silva", assists: 8, avatar: "JS" },
  { rank: 5, name: "Sam Wilson", assists: 6, avatar: "SW" },
  { rank: 6, name: "Chris Thompson", assists: 4, avatar: "CT" },
];

const savesLeaderboard = [
  { rank: 1, name: "Sam Wilson", saves: 38, avatar: "SW" },
  { rank: 2, name: "Marcus Johnson", saves: 23, avatar: "MJ" },
  { rank: 3, name: "Jamie Lee", saves: 8, avatar: "JL" },
  { rank: 4, name: "Alex Rodriguez", saves: 5, avatar: "AR" },
  { rank: 5, name: "Jordan Silva", saves: 2, avatar: "JS" },
  { rank: 6, name: "Chris Thompson", saves: 1, avatar: "CT" },
];

const PodiumCard = ({ player, position, stat, statValue }: { 
  player: any, 
  position: number, 
  stat: string,
  statValue: number 
}) => {
  const podiumColors = {
    1: "bg-gradient-to-b from-yellow-400 to-yellow-600",
    2: "bg-gradient-to-b from-gray-300 to-gray-500", 
    3: "bg-gradient-to-b from-orange-400 to-orange-600"
  };

  const podiumIcons = {
    1: <Crown className="h-6 w-6 text-yellow-600" />,
    2: <Medal className="h-6 w-6 text-gray-600" />,
    3: <Trophy className="h-6 w-6 text-orange-600" />
  };

  return (
    <Card className={`p-4 text-center ${position === 1 ? 'transform scale-110' : ''} border-2 ${
      position === 1 ? 'border-yellow-300' : position === 2 ? 'border-gray-300' : 'border-orange-300'
    }`}>
      <div className="flex justify-center mb-2">
        {podiumIcons[position as keyof typeof podiumIcons]}
      </div>
      <Avatar className={`h-12 w-12 mx-auto mb-2 ${podiumColors[position as keyof typeof podiumColors]} text-white`}>
        <div className="flex items-center justify-center h-full w-full font-black">
          {player.avatar}
        </div>
      </Avatar>
      <h4 className="font-black text-black text-sm">{player.name}</h4>
      <div className="text-2xl font-black text-primary mt-1">{statValue}</div>
      <div className="text-xs text-muted-foreground">{stat}</div>
    </Card>
  );
};

const LeaderboardList = ({ data, stat }: { data: any[], stat: string }) => (
  <div className="space-y-3">
    {data.map((player, index) => (
      <Card 
        key={player.rank} 
        className={`p-4 transition-all ${
          index < 3 
            ? 'border-2 border-primary bg-gradient-to-r from-white to-green-50' 
            : 'border border-gray-200'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black ${
              index === 0 ? 'bg-yellow-100 text-yellow-800' :
              index === 1 ? 'bg-gray-100 text-gray-800' :
              index === 2 ? 'bg-orange-100 text-orange-800' :
              'bg-gray-50 text-gray-600'
            }`}>
              {player.rank}
            </div>
            <Avatar className="h-10 w-10 bg-primary text-white">
              <div className="flex items-center justify-center h-full w-full text-sm font-black">
                {player.avatar}
              </div>
            </Avatar>
            <div>
              <p className="font-black text-black">{player.name}</p>
              <p className="text-sm text-muted-foreground">Rank #{player.rank}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-primary">
              {player[stat.toLowerCase() as keyof typeof player]}
            </div>
            <div className="text-sm text-muted-foreground">{stat}</div>
          </div>
        </div>
      </Card>
    ))}
  </div>
);

export function Leaderboard({ onNavigate }: LeaderboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
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
          <h1 className="text-2xl font-black text-black">Leaderboard</h1>
          <div></div>
        </div>

        {/* Leaderboard Tabs */}
        <Tabs defaultValue="goals" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white border-2 border-green-100">
            <TabsTrigger value="goals" className="data-[state=active]:bg-primary data-[state=active]:text-white">⚽ Goals</TabsTrigger>
            <TabsTrigger value="assists" className="data-[state=active]:bg-primary data-[state=active]:text-white">🎯 Assists</TabsTrigger>
            <TabsTrigger value="saves" className="data-[state=active]:bg-primary data-[state=active]:text-white">🧤 Saves</TabsTrigger>
          </TabsList>
          
          <TabsContent value="goals" className="space-y-6">
            {/* Goals Podium */}
            <div>
              <h3 className="text-center mb-4 text-black">Goals Champions</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="order-2">
                  <PodiumCard player={goalsLeaderboard[1]} position={2} stat="Goals" statValue={goalsLeaderboard[1].goals} />
                </div>
                <div className="order-1">
                  <PodiumCard player={goalsLeaderboard[0]} position={1} stat="Goals" statValue={goalsLeaderboard[0].goals} />
                </div>
                <div className="order-3">
                  <PodiumCard player={goalsLeaderboard[2]} position={3} stat="Goals" statValue={goalsLeaderboard[2].goals} />
                </div>
              </div>
            </div>
            
            {/* Full Goals List */}
            <div>
              <h3 className="mb-4 text-black">Complete Rankings</h3>
              <LeaderboardList data={goalsLeaderboard} stat="Goals" />
            </div>
          </TabsContent>
          
          <TabsContent value="assists" className="space-y-6">
            {/* Assists Podium */}
            <div>
              <h3 className="text-center mb-4 text-black">Assist Masters</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="order-2">
                  <PodiumCard player={assistsLeaderboard[1]} position={2} stat="Assists" statValue={assistsLeaderboard[1].assists} />
                </div>
                <div className="order-1">
                  <PodiumCard player={assistsLeaderboard[0]} position={1} stat="Assists" statValue={assistsLeaderboard[0].assists} />
                </div>
                <div className="order-3">
                  <PodiumCard player={assistsLeaderboard[2]} position={3} stat="Assists" statValue={assistsLeaderboard[2].assists} />
                </div>
              </div>
            </div>
            
            {/* Full Assists List */}
            <div>
              <h3 className="mb-4 text-black">Complete Rankings</h3>
              <LeaderboardList data={assistsLeaderboard} stat="Assists" />
            </div>
          </TabsContent>
          
          <TabsContent value="saves" className="space-y-6">
            {/* Saves Podium */}
            <div>
              <h3 className="text-center mb-4 text-black">Save Specialists</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="order-2">
                  <PodiumCard player={savesLeaderboard[1]} position={2} stat="Saves" statValue={savesLeaderboard[1].saves} />
                </div>
                <div className="order-1">
                  <PodiumCard player={savesLeaderboard[0]} position={1} stat="Saves" statValue={savesLeaderboard[0].saves} />
                </div>
                <div className="order-3">
                  <PodiumCard player={savesLeaderboard[2]} position={3} stat="Saves" statValue={savesLeaderboard[2].saves} />
                </div>
              </div>
            </div>
            
            {/* Full Saves List */}
            <div>
              <h3 className="mb-4 text-black">Complete Rankings</h3>
              <LeaderboardList data={savesLeaderboard} stat="Saves" />
            </div>
          </TabsContent>
        </Tabs>

        {/* Back to Dashboard Button */}
        <Button 
          onClick={() => onNavigate('dashboard')}
          className="w-full h-14 bg-black hover:bg-black/90 text-white flex items-center justify-center space-x-3"
        >
          <Trophy className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </Button>
      </div>
    </div>
  );
}