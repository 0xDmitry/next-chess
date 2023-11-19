export enum SquareColor {
  Black = "Black",
  White = "White",
}

export function getSquareColor(i: number, j: number) {
  if (i % 2 === 0) {
    return j % 2 === 0 ? SquareColor.White : SquareColor.Black;
  } else {
    return j % 2 === 0 ? SquareColor.Black : SquareColor.White;
  }
}

export function getSquareDigit(i: number, j: number): string | null {
  if (j > 0) {
    return null;
  }

  return String(8 - i);
}

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function getSquareLetter(i: number, j: number): string | null {
  if (i < 7) {
    return null;
  }

  return letters[j];
}
