"use client";

import { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import {
  Piece,
  createInitialBoardState,
  getSquareId,
  getSquareColor,
  getSquareRankLabel,
  getSquareFileLabel,
} from "../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Board() {
  const [boardState, setBoardState] = useState<Map<string, Piece>>(
    createInitialBoardState()
  );

  return (
    <Container>
      {[...Array(8)].map((_, i) => (
        <Row key={i}>
          {[...Array(8)].map((_, j) => {
            const squareId = getSquareId(i, j);
            return (
              <Square
                key={squareId}
                color={getSquareColor(i, j)}
                rankLabel={getSquareRankLabel(i, j)}
                fileLabel={getSquareFileLabel(i, j)}
                piece={boardState.get(squareId)}
              ></Square>
            );
          })}
        </Row>
      ))}
    </Container>
  );
}
