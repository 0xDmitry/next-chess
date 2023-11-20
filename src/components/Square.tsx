import styled from "styled-components";
import { Piece, PieceColor, PieceType, files } from "../utils";
import KingBlack from "./pieces/KingBlack";
import PawnWhite from "./pieces/PawnWhite";
import PawnBlack from "./pieces/PawnBlack";
import KnightWhite from "./pieces/KnightWhite";
import KnightBlack from "./pieces/KnightBlack";
import BishopWhite from "./pieces/BishopWhite";
import BishopBlack from "./pieces/BishopBlack";
import RookWhite from "./pieces/RookWhite";
import RookBlack from "./pieces/RookBlack";
import QueenWhite from "./pieces/QueenWhite";
import QueenBlack from "./pieces/QueenBlack";
import KingWhite from "./pieces/KingWhite";

enum SquareColor {
  Light = "Light",
  Dark = "Dark",
}

function getSquareColor(squareId: string) {
  const i = Number(squareId[1]) - 8;
  const j = files.indexOf(squareId[0]);

  if (i % 2 === 0) {
    return j % 2 === 0 ? SquareColor.Light : SquareColor.Dark;
  } else {
    return j % 2 === 0 ? SquareColor.Dark : SquareColor.Light;
  }
}

const squareSize = "80px";
const pieceSize = "65px";

const lightSquareColor = "#FFD2A2";
const darkSquareColor = "#996126";

const Container = styled.div<{ $color: string; $isSelectable: boolean }>`
  width: ${squareSize};
  height: ${squareSize};
  background-color: ${(props) => props.$color};
  cursor: ${(props) => (props.$isSelectable ? "pointer" : "default")};
`;

const ActiveLayer = styled.div<{ $isTransparent: boolean }>`
  width: ${squareSize};
  height: ${squareSize};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(
    0,
    255,
    0,
    ${(props) => (props.$isTransparent ? "0" : "0.5")}
  );
`;

const RankLabel = styled.div<{ $color: string }>`
  position: absolute;
  top: 5px;
  left: 5px;
  color: ${(props) => props.$color};
  user-select: none;
`;

const FileLabel = styled.div<{ $color: string }>`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: ${(props) => props.$color};
  user-select: none;
`;

function renderPiece(piece?: Piece) {
  if (!piece) {
    return null;
  }

  switch (piece.type) {
    case PieceType.Pawn:
      return piece.color === PieceColor.White ? (
        <PawnWhite size={pieceSize} />
      ) : (
        <PawnBlack size={pieceSize} />
      );
    case PieceType.Knight:
      return piece.color === PieceColor.White ? (
        <KnightWhite size={pieceSize} />
      ) : (
        <KnightBlack size={pieceSize} />
      );
    case PieceType.Bishop:
      return piece.color === PieceColor.White ? (
        <BishopWhite size={pieceSize} />
      ) : (
        <BishopBlack size={pieceSize} />
      );
    case PieceType.Rook:
      return piece.color === PieceColor.White ? (
        <RookWhite size={pieceSize} />
      ) : (
        <RookBlack size={pieceSize} />
      );
    case PieceType.Queen:
      return piece.color === PieceColor.White ? (
        <QueenWhite size={pieceSize} />
      ) : (
        <QueenBlack size={pieceSize} />
      );
    case PieceType.King:
      return piece.color === PieceColor.White ? (
        <KingWhite size={pieceSize} />
      ) : (
        <KingBlack size={pieceSize} />
      );
  }
}

interface Props {
  squareId: string;
  piece?: Piece;
  isActive: boolean;
  isSelectable: boolean;
  onClick?: () => void;
}

export default function Square({
  squareId,
  piece,
  isActive,
  isSelectable,
  onClick,
}: Props) {
  const rankLabel = squareId[0] === "a" && squareId[1];
  const fileLabel = squareId[1] === "1" && squareId[0];
  const squareColor = getSquareColor(squareId);

  return (
    <Container
      $color={
        squareColor === SquareColor.Dark ? darkSquareColor : lightSquareColor
      }
      $isSelectable={isSelectable}
      onClick={onClick}
    >
      <ActiveLayer $isTransparent={!isActive}>
        {rankLabel && (
          <RankLabel
            $color={
              squareColor === SquareColor.Dark
                ? lightSquareColor
                : darkSquareColor
            }
          >
            {rankLabel}
          </RankLabel>
        )}
        {renderPiece(piece)}
        {fileLabel && (
          <FileLabel
            $color={
              squareColor === SquareColor.Dark
                ? lightSquareColor
                : darkSquareColor
            }
          >
            {fileLabel}
          </FileLabel>
        )}
      </ActiveLayer>
    </Container>
  );
}
