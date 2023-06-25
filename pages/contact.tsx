import { Layout } from "@/components/Layout";
import { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Velvet Terrain Contact" />
      </Head>
      <Layout>
        <div className="w-full border-2 text-center py-20 max-w-xl mx-auto">
          Contact
        </div>
      </Layout>
    </>
  );
};

export default Contact;
