import Head from "next/head";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="main">
      </main>
    </>
  );
}
