import Link from "next/link";
import Head from "next/head";
import Navigation from "@/components/navigation/Navigation";
import PayConfirmModal from "@/components/checkout/PayConfirmModal";
import Footer from "@/components/footer/Footer";

export default function Checkout() {
  const [showPayConfirm, setShowPayConfirm] = useState(false);

  return (
    <>
      <Head>
        <title>Audiophile | Checkout</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navigation />
      <PayConfirmModal
        showPayConfirm={showPayConfirm}
        setShowPayConfirm={setShowPayConfirm}
      />
      <header className={styles.header}>
        <Link className={styles.headerLink} href="/">
          Go Back
        </Link>
      </header>
      <main className={styles.main}>
      </main>
      <Footer />
    </>
  );
}
