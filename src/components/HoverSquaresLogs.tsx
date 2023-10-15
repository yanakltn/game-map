import { Box, Stack, Typography } from "@mui/material";

type HoverSquaresLogsProps = {
  gameMap: boolean[][];
};
export const HoverSquaresLogs = ({ gameMap }: HoverSquaresLogsProps) => {
  return (
    <Stack display="column" margin="20px">
      <Typography fontWeight="bold" marginBottom="20px">
        Hover squares
      </Typography>
      {gameMap.map((row, rowIndex) =>
        row.map((square, columnIndex) => {
          return (
            square && (
              <Box
                sx={{
                  padding: "5px",
                  border: "1px solid #daa520",
                  backgroundColor: "#fcf6e9",
                  marginBottom: "5px",
                  color: "#b1871b",
                }}
                key={`${rowIndex} ${columnIndex}`}
              >
                row {rowIndex + 1} col {columnIndex + 1}
              </Box>
            )
          );
        })
      )}
    </Stack>
  );
};
