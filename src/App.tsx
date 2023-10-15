import { Stack } from "@mui/material";
import { useCallback, useState } from "react";
import { AppModeSelector } from "./components/AppModeSelector";
import { HoverSquaresLogs } from "./components/HoverSquaresLogs";
import { GameBox } from "./components/GameBox";

function App() {
  const [gameMap, setGameMap] = useState<boolean[][]>([]);

  const handleStart = useCallback(
    (mapSize: number) => {
      const newMap = Array(mapSize).fill(Array(mapSize).fill(false));

      setGameMap(newMap);
    },
    [setGameMap]
  );

  const handleMouseEnter = (row: number, column: number) => {
    setGameMap((gameMap) => {
      const newMap = JSON.parse(JSON.stringify(gameMap));
      newMap[row][column] = !newMap[row][column];

      return newMap;
    });
  };

  return (
    <Stack direction="row">
      <Stack direction="column">
        <AppModeSelector handleStart={handleStart} />
        <GameBox gameMap={gameMap} handleMouseEnter={handleMouseEnter} />
      </Stack>
      <HoverSquaresLogs gameMap={gameMap} />
    </Stack>
  );
}

export default App;
