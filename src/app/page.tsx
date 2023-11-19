import { Metadata } from "next";
import Field from "../components/Field";

export const metadata: Metadata = {
  title: "Next Chess",
};

export default function Home() {
  return <Field />;
}
