import styled from "styled-components";
import { SquareColor } from "../utils";

const Container = styled.div<{ $color: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.$color};
`;

const Digit = styled.div<{ $color: string }>`
  position: absolute;
  top: 5px;
  left: 5px;
  color: ${(props) => props.$color};
`;

const Letter = styled.div<{ $color: string }>`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: ${(props) => props.$color};
`;

interface Props {
  color: SquareColor;
  digit?: string;
  letter?: string;
}

export default function Square({ color, digit, letter }: Props) {
  return (
    <Container $color={color === SquareColor.Black ? "#7D945D" : "#EEEED5"}>
      {digit && (
        <Digit $color={color === SquareColor.Black ? "#EEEED5" : "#7D945D"}>
          {digit}
        </Digit>
      )}
      {letter && (
        <Letter $color={color === SquareColor.Black ? "#EEEED5" : "#7D945D"}>
          {letter}
        </Letter>
      )}
    </Container>
  );
}
