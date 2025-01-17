import { FormCalc } from "@/components/Elem/Calc";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>Главная</h1>
        <FormCalc />
      </main>
    </>
  );
}
