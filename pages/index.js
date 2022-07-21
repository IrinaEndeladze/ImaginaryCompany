import Head from "next/head";
import { HomePageContent } from "../components/contents/HomePage";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomePageContent />
    </div>
  );
}

export default HomePage;
