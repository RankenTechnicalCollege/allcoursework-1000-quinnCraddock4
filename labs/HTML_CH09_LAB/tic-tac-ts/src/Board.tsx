import React from "react";
import Square from "./Square";

interface BoardProps {
  squares: (string | null)[];
  onSquareClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onSquareClick }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)", gap: "5px" }}>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
};

export default Board;
