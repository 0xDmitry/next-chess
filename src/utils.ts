export enum CellColor {
  Black = "Black",
  White = "White",
}

export function getCellColor(i: number, j: number) {
  if (i % 2 === 0) {
    return j % 2 === 0 ? CellColor.White : CellColor.Black;
  } else {
    return j % 2 === 0 ? CellColor.Black : CellColor.White;
  }
}

export function getCellDigit(i: number, j: number): string | null {
  if (j > 0) {
    return null;
  }

  return String(8 - i);
}

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function getCellLetter(i: number, j: number): string | null {
  if (i < 7) {
    return null;
  }

  return letters[j];
}
