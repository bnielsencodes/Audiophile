import { productsArray } from "@/productsData";
import Head from "next/head";
import Navigation from "@/components/navigation/Navigation";
import ProductHeader from "@/components/header/ProductHeader";
import Shop from "@/components/shop/Shop";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";

export default function MarkI() {
  const product = productsArray[1];

  return (
    <>
      <Head>
        <title>Audiophile | XX99 Mark I Headphones</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navigation />
      <ProductHeader product={product} />
      <main className="main--current-product">
        <Shop />
        <div className="spacer hidden-sm-lg"></div>
        <About />
      </main>
      <Footer />
    </>
  );
}
