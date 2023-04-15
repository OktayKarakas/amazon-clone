import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Hello Amazon !</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (data) => data.json()
  );

  return {
    props: {
      products,
    },
  };
}
