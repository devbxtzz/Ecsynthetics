import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Roadmap from "../components/roadmap";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecsynths</title>
        <meta
          name="description"
          content="Ecsynthetic is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Roadmap />
      <Footer />
    </>
  );
}
