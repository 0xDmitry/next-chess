export enum PieceColor {
  White = "White",
  Black = "Black",
}

export enum PieceType {
  Pawn = "Pawn",
  Knight = "Knight",
  Bishop = "Bishop",
  Rook = "Rook",
  Queen = "Queen",
  King = "King",
}

export type Piece = {
  color: PieceColor;
  type: PieceType;
};

export const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function getSquareId(i: number, j: number) {
  return `${files[j]}${8 - i}`;
}

export function createInitialBoardState() {
  const result = new Map<string, Piece>();

  result.set("a1", { color: PieceColor.White, type: PieceType.Rook });
  result.set("b1", { color: PieceColor.White, type: PieceType.Knight });
  result.set("c1", { color: PieceColor.White, type: PieceType.Bishop });
  result.set("d1", { color: PieceColor.White, type: PieceType.Queen });
  result.set("e1", { color: PieceColor.White, type: PieceType.King });
  result.set("f1", { color: PieceColor.White, type: PieceType.Bishop });
  result.set("g1", { color: PieceColor.White, type: PieceType.Knight });
  result.set("h1", { color: PieceColor.White, type: PieceType.Rook });
  for (let i = 0; i < 8; i++) {
    result.set(`${files[i]}2`, {
      color: PieceColor.White,
      type: PieceType.Pawn,
    });
  }

  for (let i = 0; i < 8; i++) {
    result.set(`${files[i]}7`, {
      color: PieceColor.Black,
      type: PieceType.Pawn,
    });
  }
  result.set("a8", { color: PieceColor.Black, type: PieceType.Rook });
  result.set("b8", { color: PieceColor.Black, type: PieceType.Knight });
  result.set("c8", { color: PieceColor.Black, type: PieceType.Bishop });
  result.set("d8", { color: PieceColor.Black, type: PieceType.Queen });
  result.set("e8", { color: PieceColor.Black, type: PieceType.King });
  result.set("f8", { color: PieceColor.Black, type: PieceType.Bishop });
  result.set("g8", { color: PieceColor.Black, type: PieceType.Knight });
  result.set("h8", { color: PieceColor.Black, type: PieceType.Rook });

  return result;
}
