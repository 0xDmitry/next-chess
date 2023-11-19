"use client";

import styled from "styled-components";
import Square from "./Square";
import { getSquareColor, getSquareDigit, getSquareLetter } from "../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Field() {
  return (
    <Container>
      {[...Array(8)].map((_, i) => (
        <Row key={i}>
          {[...Array(8)].map((_, j) => (
            <Square
              key={`${i}-${j}`}
              color={getSquareColor(i, j)}
              digit={getSquareDigit(i, j)}
              letter={getSquareLetter(i, j)}
            ></Square>
          ))}
        </Row>
      ))}
    </Container>
  );
}
