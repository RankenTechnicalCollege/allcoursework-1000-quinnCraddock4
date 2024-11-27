import React from "react";

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button 
      className="square" 
      onClick={onClick}
      style={{
        width: "60px",
        height: "60px",
        fontSize: "24px",
        fontWeight: "bold",
        border: "1px solid #000",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
    >
      {value}
    </button>
  );
};

export default Square;
