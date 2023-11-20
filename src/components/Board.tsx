"use client";

import { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import { Piece, createInitialBoardState, getSquareId } from "../utils";

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
  const [activeSquareId, setActiveSquareId] = useState<string | null>(null);

  return (
    <Container>
      {[...Array(8)].map((_, i) => (
        <Row key={i}>
          {[...Array(8)].map((_, j) => {
            const squareId = getSquareId(i, j);
            const piece = boardState.get(squareId);
            return (
              <Square
                key={squareId}
                squareId={squareId}
                piece={piece}
                isActive={activeSquareId === squareId}
                isSelectable={!!activeSquareId || !!piece}
                onClick={() => {
                  if (!activeSquareId) {
                    piece && setActiveSquareId(squareId);
                  } else {
                    setBoardState((prevState) => {
                      const newState = new Map(prevState);
                      newState.delete(activeSquareId);
                      newState.set(squareId, prevState.get(activeSquareId));
                      return newState;
                    });
                    setActiveSquareId(null);
                  }
                }}
              ></Square>
            );
          })}
        </Row>
      ))}
    </Container>
  );
}
