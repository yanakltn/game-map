import { Box, Stack } from "@mui/material";

type GameBoxProps = {
  gameMap: boolean[][];
  handleMouseEnter: (row: number, column: number) => void;
};

export const GameBox = ({ gameMap, handleMouseEnter }: GameBoxProps) => {
  return (
    <Stack direction="column" margin={3}>
      {gameMap.map((row, rowNumber) => (
        <Stack direction="row" key={rowNumber}>
          {row.map((square, columnNumber) => (
            <Box
              border="1px solid black"
              width={20}
              height={20}
              key={columnNumber}
              bgcolor={square ? "#00BFFF" : undefined}
              onMouseEnter={() => handleMouseEnter(rowNumber, columnNumber)}
            ></Box>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};
