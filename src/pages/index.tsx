import Head from "next/head";
import Field from "../components/Field";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Chess</title>
        <meta name="description" content="Next Chess" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Field />
    </>
  );
}
