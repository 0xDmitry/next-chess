import { Metadata } from "next";
import Board from "../components/Board";

export const metadata: Metadata = {
  title: "Next Chess",
};

export default function Home() {
  return <Board />;
}
