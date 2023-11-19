import styled from "styled-components";
import { Piece, PieceColor, PieceType, SquareColor } from "../utils";
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

const squareSize = "80px";
const pieceSize = "65px";

const lightSquareColor = "#FFD2A2";
const darkSquareColor = "#996126";

const Container = styled.div<{ $color: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${squareSize};
  height: ${squareSize};
  background-color: ${(props) => props.$color};
`;

const RankLabel = styled.div<{ $color: string }>`
  position: absolute;
  top: 5px;
  left: 5px;
  color: ${(props) => props.$color};
`;

const FileLabel = styled.div<{ $color: string }>`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: ${(props) => props.$color};
`;

const renderPiece = (piece?: Piece) => {
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
};

interface Props {
  color: SquareColor;
  rankLabel?: string;
  fileLabel?: string;
  piece?: Piece;
}

export default function Square({ color, rankLabel, fileLabel, piece }: Props) {
  return (
    <Container
      $color={color === SquareColor.Dark ? darkSquareColor : lightSquareColor}
    >
      {rankLabel && (
        <RankLabel
          $color={
            color === SquareColor.Dark ? lightSquareColor : darkSquareColor
          }
        >
          {rankLabel}
        </RankLabel>
      )}
      {renderPiece(piece)}
      {fileLabel && (
        <FileLabel
          $color={
            color === SquareColor.Dark ? lightSquareColor : darkSquareColor
          }
        >
          {fileLabel}
        </FileLabel>
      )}
    </Container>
  );
}
