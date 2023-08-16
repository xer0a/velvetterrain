import { Layout } from "@/components/Layout";
import Page from "@/components/page";
import { NextPage } from "next";
import Head from "next/head";

const FAQ: NextPage = () => {
  return (
    <>
      <Page>
        <Head>
          <title>Frequently Asked Questions</title>
          <meta
            name="description"
            content="Velvet Terrain Frequently Asked Questions"
          />
        </Head>

        <Layout>
          <div className="w-full border-2 text-center py-20 max-w-xl mx-auto">
            FAQ
          </div>
        </Layout>
      </Page>
    </>
  );
};

export default FAQ;
