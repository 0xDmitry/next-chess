import styled from "styled-components";
import Cell from "./Cell";
import { getCellColor, getCellDigit, getCellLetter } from "../utils";

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
            <Cell
              key={`${i}-${j}`}
              color={getCellColor(i, j)}
              digit={getCellDigit(i, j)}
              letter={getCellLetter(i, j)}
            ></Cell>
          ))}
        </Row>
      ))}
    </Container>
  );
}
